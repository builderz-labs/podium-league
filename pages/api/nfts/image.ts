// pages/api/dynamicImage.ts
import { NextApiRequest, NextApiResponse } from "next";
import Jimp from "jimp";
import { drivers } from "../../../constants/drivers";
import path from "path";

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

    const racerFirst = drivers
      .find((p) => p.driver === firstDriver)
      ?.driver.split(" ");
    const racerSecond = drivers
      .find((p) => p.driver === secondDriver)
      ?.driver.split(" ");
    const racerThird = drivers
      .find((p) => p.driver === thirdDriver)
      ?.driver.split(" ");

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

    const width = 2048 / 2;
    const height = 2048 / 2;

    // Load the image and the font
    let image = await Jimp.read(
      `${process.env.NEXT_PUBLIC_DOMAIN}/images/nft-base.png`,
    );
    const fontPath = path.join(
      process.cwd(),
      "assets",
      "fonts",
      "BNSZOIHwmim0lgTeD0YfrIdt.ttf.fnt",
    );
    const font = await Jimp.loadFont(fontPath);

    // Calculate the horizontal position
    const horizontalPositionFirst = width * 0.5;
    const horizontalPositionSecond = width * 1.125;
    const horizontalPositionThird = -128;

    // Calculate the vertical positions
    const firstPosition = height * 0.92;
    const secondPosition = height * 1.1;
    const thirdPosition = height * 1.1;

    const lineHeight = Jimp.measureTextHeight(font, " ", width);

    // Print the text on the image
    // Print each word on a new line
    for (let i = 0; i < racerFirst!.length; i++) {
      image.print(
        font,
        horizontalPositionFirst,
        firstPosition + i * lineHeight,
        {
          text: racerFirst![i],
          alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
          alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE,
        },
        width,
        height,
      );
    }
    for (let i = 0; i < racerSecond!.length; i++) {
      image.print(
        font,
        horizontalPositionSecond,
        secondPosition + i * lineHeight,
        {
          text: racerSecond![i],
          alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
          alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE,
        },
        width,
        height,
      );
    }
    for (let i = 0; i < racerThird!.length; i++) {
      image.print(
        font,
        horizontalPositionThird,
        thirdPosition + i * lineHeight,
        {
          text: racerThird![i],
          alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
          alignmentY: Jimp.VERTICAL_ALIGN_MIDDLE,
        },
        width,
        height,
      );
    }

    // Convert the image to a buffer
    const imageBuffer = await image.getBufferAsync(Jimp.MIME_PNG);

    // Set the correct header for the image
    res.setHeader("Content-Type", "image/png");

    // Send the image
    res.send(imageBuffer);
  } else {
    res.status(405).send("Method not allowed"); // Only allow POST requests
  }
}
