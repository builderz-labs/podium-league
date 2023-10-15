import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { findLinkPda } from "@underdog-protocol/underdog-identity-sdk";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { createRouter } from "next-connect";
import { User, authOptions } from "./auth/[...nextauth]";
import { drivers } from "../../constants/drivers";

import axios from "axios";

const router = createRouter<NextApiRequest, NextApiResponse>();

const context = createUmi(process.env.NEXT_PUBLIC_HELIUS_PROXY!);

router.post(async (req, res) => {
  const session = await getServerSession(req, res, authOptions);

  const sessionData = session?.user as User;
  if (!sessionData) {
    res.status(401).send("Unauthorized");
    return;
  }

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

  try {
    if (sessionData.id) {
      // Mint directly to user wallet
      const linkPda = findLinkPda(context, {
        identifier: sessionData.id,
      })[0];
      const response = await axios.get(
        `https://mainnet.underdogprotocol.com/v2/projects/2/nfts?ownerAddress=${linkPda}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_UNDERDOG_API_KEY}`,
          },
        },
      );

      const exists = response.data.results
        .filter((nft: any) => nft.projectId === 2)
        .some((nft: any) => nft.attributes["Race"] === raceName);

      if (exists) {
        res.status(400).send("You already minted 1 Podium for this race");
        return;
      }
    } else {
      res.status(500).send("No Id to create PDA");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }

  // Action

  const name = "Podium Prediction";
  const description = "Podium: The on-chain Mini League";

  console.log(racerFirst?.driver, racerSecond?.driver, racerThird?.driver);

  const attributes = {
    "Pos 1.": racerSecond?.driver,
    "Pos 2.": racerFirst?.driver,
    "Pos 3.": racerThird?.driver,
    Race: raceName,
    Points: "To be evaluated", // TODO: If race results exist, points can be evaluated and rendered here
  };

  // E.g. https://us-central1-sporting-d8875.cloudfunctions.net/api/nfts/image?first=Sergio-Perez&second=Max-Verstappen&third=Lewis-Hamilton
  const image = `https://us-central1-sporting-d8875.cloudfunctions.net/api/nfts/image?first=${second}&second=${third}&third=${first}&race=${race}`;
  console.log(image);

  try {
    if (sessionData.id) {
      // Mint directly to user wallet
      const linkPda = findLinkPda(context, {
        identifier: sessionData.id,
      })[0];

      const createRes = await axios.post(
        "https://mainnet.underdogprotocol.com/v2/projects/2/nfts",
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

      res
        .status(202)
        .send({ ...createRes.data, url: image, ownerWallet: linkPda });
    } else {
      res.status(500).send("No Id to create PDA");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

export default router.handler();
