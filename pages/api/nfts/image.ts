// pages/api/dynamicImage.ts
import { NextApiRequest, NextApiResponse } from "next";
import { createCanvas, Image } from "canvas";
import fetch from "node-fetch";
import { drivers } from "../../../constants/drivers";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "GET") {
    const { first, second, third } = req.query;

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

    const width = 1500;
    const height = 1500;

    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    const backgroundImage = new Image();
    backgroundImage.onload = () => {
      context.drawImage(backgroundImage, 0, 0, width, height);
    };
    // Fetch the image
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/images/nft-base.png`,
    );
    const image = await response.buffer();
    backgroundImage.src = image;

    context.font = "400 50px Roboto Slab";
    context.textAlign = "center";
    context.textBaseline = "middle";

    // Calculate the horizontal position
    const horizontalPositionFirst = width * 0.5;
    const horizontalPositionSecond = width * 0.805;
    const horizontalPositionThird = width * 0.195;

    // Calculate the vertical positions
    const firstPosition = height * 0.73; // 30% down the canvas
    const secondPosition = height * 0.82; // 50% down the canvas
    const thirdPosition = height * 0.82; // 70% down the canvas

    context.fillText(
      racerFirst!.driver,
      horizontalPositionFirst,
      firstPosition,
    );
    context.fillText(
      racerSecond!.driver,
      horizontalPositionSecond,
      secondPosition,
    );
    context.fillText(
      racerThird!.driver,
      horizontalPositionThird,
      thirdPosition,
    );

    // Convert the canvas to an image buffer
    const imageBuffer = canvas.toBuffer("image/png");

    // Set the correct header for the image
    res.setHeader("Content-Type", "image/png");

    // Send the image
    res.send(imageBuffer);
  } else {
    res.status(405).send("Method not allowed"); // Only allow POST requests
  }
}
