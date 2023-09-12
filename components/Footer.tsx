import React, { MouseEventHandler } from "react";
import UnderdogLogo from "../public/images/underdog.png"
import KrakenLogo from "../public/images/kraken.png"
import Image from "next/image";

interface FooterProps {
  toggleDisclaimer: MouseEventHandler;
  toggleUnofficial: MouseEventHandler
  
}

const Footer = ({ toggleDisclaimer, toggleUnofficial }: FooterProps) => {
  return (
    <footer className="footer bg-white flex justify-center items-center flex-col p-4 text-center text-[20px]  text-black ">
      <div className="flex justify-between w-full items-center">
        <p className="font-[400] text-[15px] text-[#969696]">All rights reserved</p>
        <div className="flex flex-row gap-5">
          <p className="font-[400] text-[15px] text-[#969696] cursor-pointer"
              onClick={toggleDisclaimer}
          >Disclaimer</p>
          <p className="font-[400] text-[15px] text-[#969696]"
          onClick={toggleUnofficial}
          >Unofficial application</p>
        </div>
      </div>
      <div className="flex justify-between items-center w-[600px] gap-[15px]">
      <p  className="font-[400] text-[20px] text-[#282828]"> Supported by</p>
        <div className="flex items-center justify-center w-[200px] h-[50px] border border-[#000000] rounded-[8px]">
      <Image src={UnderdogLogo} alt="'Underdog logo" width={160} height={30} />
        </div>
        <div className="flex items-center justify-center w-[200px] h-[50px] border border-[#000000] rounded-[8px]">
      <Image src={KrakenLogo} alt="'Underdog logo" width={160} height={30} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
