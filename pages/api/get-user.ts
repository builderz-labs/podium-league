import { NextApiRequest, NextApiResponse } from "next";
import { findLinkPda } from "@underdog-protocol/underdog-identity-sdk";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { userId } = req.body;

  const context = createUmi(process.env.NEXT_PUBLIC_HELIUS_PROXY!);
  const linkPda = findLinkPda(context, {
    identifier: userId,
  })[0];

  try {
    const response = await axios.get(
      `https://mainnet.underdogprotocol.com/v2/projects/2/nfts?ownerAddress=${linkPda}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_UNDERDOG_API_KEY}`,
        },
      },
    );

    res.status(200).json({
      nfts: response.data.results,
      walletPda: linkPda,
    });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}
