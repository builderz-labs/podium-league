import { useSession } from "next-auth/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { findLinkPda } from "@underdog-protocol/underdog-identity-sdk";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";

const useUser = () => {
  const session = useSession();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const context = createUmi(process.env.NEXT_PUBLIC_HELIUS_PROXY!);

  useEffect(() => {
    if (session && session.data?.user?.name) {
      const fetchUser = async () => {
        console.log("Fetching user");

        setLoading(true);

        const linkPda = findLinkPda(context, {
          identifier: session.data?.user?.name!.substring(0, 10)!,
        })[0];
        try {
          const response = await axios.get(
            `https://api.underdogprotocol.com/v2/projects/4/nfts?ownerAddress=${linkPda}&limit=1`,
            {
              headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_UNDERDOG_API_KEY}`,
              },
            },
          );
          console.log(response);
          setUser({ ...response.data, walletPda: linkPda });
        } catch (error) {
          console.log(error);
        }

        setLoading(false);
      };
      fetchUser();
    }
  }, [session, context]);

  return { user, loading };
};

export default useUser;
