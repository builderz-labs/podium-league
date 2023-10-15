import React, { MouseEventHandler } from "react";
import UnderdogLogo from "../public/images/underdog.png";
import Image from "next/image";

interface FooterProps {
  toggleDisclaimer: MouseEventHandler;
  toggleUnofficial: MouseEventHandler;
}

const Footer = ({ toggleDisclaimer, toggleUnofficial }: FooterProps) => {
  return (
    <footer className="container mx-auto footer relative z-10 flex w-[100%] items-center justify-between bg-white px-0 py-4 text-center text-[20px] text-black lg:absolute  lg:bottom-0">
      <div className="flex w-full items-center justify-between">
        <p className="text-[15px] font-[400] text-[#969696]">
          All rights reserved
        </p>
        <div className="flex items-center justify-center gap-[15px]">
          <p className="text-[20px] font-[400] text-[#282828]"> Supported by</p>
          <div className="flex h-[50px] w-[200px] items-center justify-center rounded-[8px] border border-[#000000] object-cover">
            <Image
              src={UnderdogLogo}
              alt="'Underdog logo"
              className="object-cover"
              width={160}
              height={30}
            />
          </div>
        </div>
        <div className="flex flex-row gap-5">
          <p
            className="cursor-pointer text-[15px] font-[400] text-[#969696]"
            onClick={toggleDisclaimer}
          >
            Disclaimer
          </p>
          <p
            className="cursor-pointer text-[15px] font-[400] text-[#969696]"
            onClick={toggleUnofficial}
          >
            Unofficial application
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
