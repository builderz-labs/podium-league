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
      <div className="flex flex-wrap w-full items-center justify-between">
        <div className="text-[12px] text-start text-sm w-full md:w-[387px] font-[400] text-[#55CBCD]">
        This website is unofficial and is not associated in any way with the Formula 1 companies. F1, FORMULA ONE, 
        FORMULA 1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX and related marks are trade marks of Formula One Licensing B.V.
        </div>
        <div className="flex items-center justify-center gap-[15px] w-full md:w-auto">
          <p className="text-[20px] roboto-400 font-[400] text-[#5c3030]"> Supported by</p>
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
        

        <div className="text-[12px] text-center text-sm w-full md:w-[400px] font-[400] text-[#55CBCD] ">
        Podium remains a non-profit making venture, and is presented as
merely a fun game for fans rather than a business; and
 Podium, as far as possible, abides by the Guidelines, to show
respect for and awareness of the F1 Companies’ ownership of the IP. The F1 Companies permit certain use of its IP by fans, but it is
important to note that this permission can be withdrawn at any time.
        </div>
          {/* <p
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
          </p> */}
      
      </div>
    </footer>
  );
};

export default Footer;
