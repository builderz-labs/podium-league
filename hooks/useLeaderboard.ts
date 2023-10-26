import { useState, useEffect } from "react";
import axios from "axios";

interface Nft {
  attributes: {
    Points: string;
  };
  [key: string]: any; // for other properties
}

const fetchAllData = async (
  url: string,
  page: number = 1,
  limit: number = 100,
): Promise<any[]> => {
  const response = await axios.get(url, {
    params: {
      page,
      limit,
    },
    headers: {
      Authorization: `Bearer aa57c0f95480e8.b4976920d8ca4f519b9e9e9d3fc31ab3`,
    },
  });

  const data = response.data.nfts.results;

  // If data is empty, return an empty array
  if (data.length === 0) {
    return [];
  }

  // If data length is less than limit, return the data
  if (data.length < limit) {
    return data;
  }

  // If data length is equal to limit, there might be more data, fetch the next page
  return [...data, ...(await fetchAllData(url, page + 1, limit))];
};

const useLeaderboard = () => {
  const [nfts, setNfts] = useState<any[]>([]);

  useEffect(() => {
    const fetchNfts = async () => {
      const response = await fetchAllData(
        "https://mainnet.underdogprotocol.com/v2/projects/2",
      );

      // Group NFTs by owner
      const nftsByOwner = response.reduce((acc, nft) => {
        const ownerAddress = nft.ownerAddress;
        if (!acc[ownerAddress]) {
          acc[ownerAddress] = [];
        }
        acc[ownerAddress].push(nft);
        return acc;
      }, {});

      // Create an array of owners sorted by total points
      const sortedOwners = Object.entries(nftsByOwner)
        .map(([ownerAddress, nfts]: [string, any]) => ({
          ownerAddress,
          nfts: nfts as Nft[],
          totalPoints: (nfts as Nft[]).reduce(
            (total, nft) => total + parseInt(nft.attributes.Points, 10),
            0,
          ),
        }))
        .sort((a, b) => b.totalPoints - a.totalPoints);

      setNfts(
        sortedOwners.filter((o) => !isNaN(o.totalPoints) && o.totalPoints),
      );
    };

    fetchNfts();
  }, []);

  return nfts;
};

export default useLeaderboard;
