import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { findLinkPda } from "@underdog-protocol/underdog-identity-sdk";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { createRouter } from "next-connect";
import { authOptions } from "./auth/[...nextauth]";

import axios from "axios";

const router = createRouter<NextApiRequest, NextApiResponse>();

const context = createUmi(process.env.NEXT_PUBLIC_HELIUS_PROXY!);

router.post(async (req, res) => {
  const session = await getServerSession(req, res, authOptions);

  const { first, second, third } = req.body;

  const name = "Podium";
  const symbol = "PD";
  const description = "";
  const attributes = { "Pos 1.": first, "Pos 2.": second, "Pos 3.": third };
  // TODO: Create and Upload Image based on user input
  // Potentially create endpoint that returns the correct image based on metadata found

  try {
    if (!session?.user?.email) {
      // Mint to Authority wallet from where it can be transferred later
      const linkPda = findLinkPda(context, {
        identifier: "podium-authority",
      })[0];

      const createRes = await axios.post(
        "https://api.underdogprotocol.com/v2/projects/1/nfts",
        {
          name,
          symbol,
          description,
          attributes,
          image:
            "https://i.pinimg.com/originals/20/6c/7e/206c7e5bf9d5d1a97a51cb2fbe174050.png",
          receiverAddress: linkPda,
          delegated: true,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_UNDERDOG_API_KEY}`,
          },
        },
      );

      console.log(createRes.data);

      res.status(202).send(createRes.data);
    } else if (session.user.email) {
      // Mint directly to user wallet
      const linkPda = findLinkPda(context, {
        identifier: session.user.email,
      })[0];

      const createRes = await axios.post(
        "https://api.underdogprotocol.com/v2/projects/1/nfts",
        {
          name,
          symbol,
          description,
          attributes,
          image:
            "https://i.pinimg.com/originals/20/6c/7e/206c7e5bf9d5d1a97a51cb2fbe174050.png",
          receiverAddress: linkPda,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_UNDERDOG_API_KEY}`,
          },
        },
      );

      //console.log(createRes.data);

      res.status(202).send(createRes.data);
    } else {
      res.status(500).send("Something went wrong");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

export default router.handler();

// import { useSession } from "next-auth/react";
// import { findLinkPda } from "@underdog-protocol/underdog-identity-sdk";
// import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";

// const collectionName: string = "Podium";
// const collectionDescription: string =
//   "This Collection is to show the participation of Superteam Bounties";
// const nftName: string = "Podium";

// export const mint = () => {
//   const Createcollection = async (custom: { value: boolean; projectId: number }) => {
//     const session = useSession();
//     const context = createUmi(process.env.NEXT_PUBLIC_HELIUS_PROXY!);
//     const linkPda = findLinkPda(context, {
//       identifier: session.data?.user?.name!.substring(0, 10)!,
//     })
//     const options = {
//       method: "POST",
//       headers: {
//         accept: "application/json",
//         "content-type": "application/json",
//         authorization: "Bearer " + process.env.NEXT_PUBLIC_UNDERDOG_API_KEY,
//       },
//       body: JSON.stringify({
//         name: collectionName,
//         description: collectionDescription,
//         image: process.env.NFT_URL,
//       }),
//     };
//     try {
//       if (custom.value) {
//         console.log("project id", custom.projectId);

//         return custom.projectId;
//       } else {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_UNDERDOG_API_KEY}`, options);
//         if (!res.ok)
//           throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
//         const data = await res.json();
//         if (data.mintAddress) {
//           console.log(
//             `Project ID: ${data.projectId} and Mint Address: ${data.mintAddress}`
//           );
//           return data.projectId;
//         } else {
//           throw new Error("Couldnt Mint Collection");
//         }
//       }
//     } catch (err) {
//       console.log(err);
//       throw err;
//     }

//     return Createcollection
//   };
// }