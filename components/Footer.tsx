import React, { MouseEventHandler } from "react";
import UnderdogLogo from "../public/images/underdog.png";
import Image from "next/image";

interface FooterProps {
  toggleDisclaimer: MouseEventHandler;
  toggleUnofficial: MouseEventHandler;
}

const Footer = ({ toggleDisclaimer, toggleUnofficial }: FooterProps) => {
  return (
    <footer className="footer relative lg:absolute lg:bottom-0 z-10 flex w-[100%] flex-col-reverse md:flex-col items-center justify-between bg-white p-4 text-center text-[20px]  text-black">
      <div className="flex w-full md:w-[75%] my-5 md;My-0 flex-row items-center justify-between  ">
        <p className="text-[15px] font-[400] text-[#969696]">
          All rights reserved
        </p>
        <div className="right-0 flex flex-row gap-5">
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
      <div className="flex flex-col items-center justify-between gap-[15px] md:flex-row m-5 md:my-0">
        <p className="text-[20px] font-[400] text-[#282828]"> Supported by</p>
        <div className="flex h-[50px] w-[200px] items-center justify-center rounded-[8px] border border-[#000000] object-cover">
          <Image
            src={UnderdogLogo}
            alt="'Underdog logo"
            className='object-cover'
            width={160}
            height={30}
          />
        </div>
        {/* <div className="flex h-[50px] w-[200px] items-center justify-center rounded-[8px] border border-[#000000] object-cover">
      <Image
        src={KrakenLogo}
        alt="'Underdog logo"
        width={160}
        height={30}
      />
    </div> */}
      </div>
    </footer>
  );
};

export default Footer;
