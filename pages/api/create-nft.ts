import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { findLinkPda } from "@underdog-protocol/underdog-identity-sdk";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { createRouter } from "next-connect";
import { authOptions } from "./auth/[...nextauth]";
import { drivers } from "../../constants/drivers";

import axios from "axios";

const router = createRouter<NextApiRequest, NextApiResponse>();

const context = createUmi(process.env.NEXT_PUBLIC_HELIUS_PROXY!);

router.post(async (req, res) => {
  const session = await getServerSession(req, res, authOptions);

  const { first, second, third, race } = req.body;

  // Use the index to get the player data
  const firstDriver = (first as string).replace(/-/g, " ");
  const secondDriver = (second as string).replace(/-/g, " ");
  const thirdDriver = (third as string).replace(/-/g, " ");

  const racerFirst = drivers.find((p) => p.driver === firstDriver);
  const racerSecond = drivers.find((p) => p.driver === secondDriver);
  const racerThird = drivers.find((p) => p.driver === thirdDriver);

  const racerNames = [firstDriver, secondDriver, thirdDriver];
  const uniqueRacerNames = new Set(racerNames);

  if (racerNames.length !== uniqueRacerNames.size) {
    res.status(400).send("Duplicate drivers are not allowed");
    return;
  }

  const racers = racerNames.map((name) =>
    drivers.find((p) => p.driver === name),
  );

  if (racers.includes(undefined)) {
    res.status(400).send("One or more racers not found");
    return;
  }

  const raceName = (race as string).replace(/-/g, " ");

  if (!raceName) {
    res.status(400).send("Race name is required");
    return;
  }

  const name = "Podium Prediction";
  const description = "Podium: The on-chain Mini League";
  // const attributes = [
  //   {
  //     trait_type: "Pos 1.",
  //     value: racerFirst,
  //   },
  //   {
  //     trait_type: "Pos 2.",
  //     value: racerSecond,
  //   },
  //   {
  //     trait_type: "Pos 3.",
  //     value: racerThird,
  //   },
  //   {
  //     trait_type: "Race",
  //     value: raceName,
  //   },
  //   { trait_type: "Points", value: "To be evaluated" }, // TODO: If race results exist, points can be evaluated and rendered here
  // ];

  const attributes = {
    "Pos 1.": racerFirst?.driver,
    "Pos 2.": racerSecond?.driver,
    "Pos 3.": racerThird?.driver,
    Race: raceName,
    Points: "To be evaluated", // TODO: If race results exist, points can be evaluated and rendered here
  };

  const image = `${process.env.NEXT_PUBLIC_DOMAIN}/api/nfts/image?first=${first}&second=${second}&third=${third}`;
  console.log(image);

  try {
    if (!session?.user?.email) {
      // Mint to Authority wallet from where it can be transferred later
      const linkPda = findLinkPda(context, {
        identifier: "podium-authority",
      })[0];

      const createRes = await axios.post(
        "https://mainnet.underdogprotocol.com/v2/projects/1/nfts",
        {
          name,
          description,
          attributes,
          image,
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
        "https://mainnet.underdogprotocol.com/v2/projects/1/nfts",
        {
          name,
          description,
          attributes,
          image,
          receiverAddress: linkPda,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_UNDERDOG_API_KEY}`,
          },
        },
      );

      console.log(createRes.data);

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
