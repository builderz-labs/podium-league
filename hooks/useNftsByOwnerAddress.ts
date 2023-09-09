import { useQuery } from "react-query";

import { PublicKey } from "@metaplex-foundation/umi";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";

const context = createUmi(process.env.NEXT_PUBLIC_HELIUS_PROXY!);

const fetchNftsByOwnerAddress = (ownerAddress?: PublicKey, page = 1) => {
  if (!ownerAddress) {
    return Promise.reject("No ownerAddress provided");
  }

  return ({
    ownerAddress,
    page,
  });
};

export const useNftsByOwnerAddress = (ownerAddress?: PublicKey, page = 1) => {
  return useQuery(
    ["nftsByOwnerAddress", ownerAddress, page],
    () => fetchNftsByOwnerAddress(ownerAddress, page),
    { enabled: !!ownerAddress }
  );
};