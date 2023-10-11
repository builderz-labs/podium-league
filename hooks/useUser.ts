import { useSession } from "next-auth/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { findLinkPda } from "@underdog-protocol/underdog-identity-sdk";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { User } from "../pages/api/auth/[...nextauth]";

const useUser = () => {
  const session = useSession();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const context = createUmi(process.env.NEXT_PUBLIC_HELIUS_PROXY!);

  useEffect(() => {
    if (session.data?.user) {
      const fetchUser = async () => {
        console.log("Fetching user");

        setLoading(true);

        const sessionData: User = session.data.user as User;

        const linkPda = findLinkPda(context, {
          identifier: sessionData.id,
        })[0];
        try {
          const response = await axios.get(
            `https://mainnet.underdogprotocol.com/v2/projects/1/nfts?ownerAddress=${linkPda}`,
            {
              headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_UNDERDOG_API_KEY}`,
              },
            },
          );
          setUser({
            ...sessionData,
            nfts: response.data.results,
            walletPda: linkPda,
          });
        } catch (error) {
          console.log(error);
        }

        setLoading(false);
      };
      fetchUser();
    }
  }, [session]);

  return { user, loading };
};

export default useUser;
