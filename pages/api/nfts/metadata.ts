// pages/api/nfts/metadata.ts
import { NextApiRequest, NextApiResponse } from "next";
import { drivers } from "../../../constants/drivers";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    const { first, second, third, race } = req.query;

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

    const metadata = {
      name: "Podium Prediction",
      description: "Podium: The on-chain Mini League",
      image: `${process.env.NEXT_PUBLIC_DOMAIN}/api/image?first=${first}&second=${second}&third=${third}`,
      external_url: "https://podium.sporting.gg",
      attributes: [
        {
          trait_type: "Pos 1.",
          value: racerFirst,
        },
        {
          trait_type: "Pos 2.",
          value: racerSecond,
        },
        {
          trait_type: "Pos 3.",
          value: racerThird,
        },
        {
          trait_type: "Race",
          value: raceName,
        },
        { trait_type: "Points", value: "To be evaluated" }, // TODO: If race results exist, points can be evaluated and rendered here
      ],
      properties: {
        files: [
          {
            uri: `${process.env.NEXT_PUBLIC_DOMAIN}/api/image?first=${first}&second=${second}&third=${third}}`,
            type: "image/png",
          },
        ],
        category: "image",
      },
    };

    // Send the metadata
    res.json(metadata);
  } else {
    res.status(405).send("Method not allowed"); // Only allow GET requests
  }
}
