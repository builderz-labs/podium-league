import { AiOutlineClose } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsTwitter } from "react-icons/bs";
import Image from "next/image";
import podium from "../../public/images/podium.png";
import { players } from "../../constants";
import { signIn, useSession } from "next-auth/react";
import { BsDownload } from "react-icons/bs";
import Logo from "../../public/images/logo.png";
import UnderdogLogo from "../../public/images/underdog.png";
import KrakenLogo from "../../public/images/kraken.png";

interface MintProps {
  isMintOpen: boolean;
  toggleMint: () => void;
  currentIndex1: number;
  currentIndex2: number;
  currentIndex3: number;
}

const Mint = ({
  isMintOpen,
  toggleMint,
  currentIndex1,
  currentIndex2,
  currentIndex3,
}: MintProps) => {
  const session = useSession();

  const handleDownload = () => {
    // TODO:
  };

  const handleShare = () => {
    // TODO:
  };

  const handleLoginAndTransfer = () => {
    // TODO
  };

  if (!isMintOpen) return null;

  return (
    <div>
      <>
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none  ">
          <div className="relative mx-auto my-6 w-auto max-w-3xl">
            {/*content*/}
            <div className="relative flex w-[500px] flex-col rounded-lg border-0 bg-orange-50 shadow-lg  outline-none focus:outline-none">
              {/*header*/}
              <div className="relative flex items-center justify-center">
                <p className="font-outline-2 text-[50px] font-black text-[#55CBCD]"></p>
                <div className="absolute right-0 flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
                  <button
                    className=" flex h-[40px] w-[40px] items-center justify-center rounded-lg border bg-white transition-all duration-150 ease-linear"
                    type="button"
                    onClick={toggleMint}
                  >
                    <AiOutlineClose />
                  </button>
                </div>
              </div>
              {/*body*/}
              <div className="m-[35px] flex flex-col rounded-[20px]  bg-green-100 p-10">
                <div className="-mt-7 ml-20 ">
                <Image alt="Sporting Lab Logo" src={Logo}  width={150} height={25}  />
                  <p className=" rowdies-400 font-outline-2   text-[45px] font-black text-[#55CBCD]">
                    PODIUM
                  </p>
                </div>
                {/* TODO: This has to be refactored so different formats of the webpage don't affect this */}
                <div className="relative h-[328px] w-[362px]">
                  <div className="flex w-full items-center justify-center">
                    <div className="mx-auto h-full min-h-[350px] w-full rounded-lg border border-black  bg-background-illustration bg-cover bg-center bg-no-repeat md:h-1/3 md:min-h-[320px]"></div>
                  </div>

                  <div className="absolute inset-0 flex h-full w-full flex-row items-end justify-center gap-4 p-4">
                    <div className="flex w-1/3 flex-col items-center justify-center">
                      <img
                        src="/images/racer.png"
                        alt=""
                        className="relative z-10 h-full w-[80%]"
                      />
                      <div className="relative z-0 -mt-4 rounded-lg border border-black bg-first-place p-4 py-6 text-center">
                        {players[currentIndex2].split("(")[0]}
                      </div>
                    </div>
                    <div className="-mt-12 flex w-1/3 flex-col items-center justify-center">
                      <img
                        src="/images/racer.png"
                        alt=""
                        className="relative z-10 h-full w-[90%]"
                      />
                      <div className="relative z-0 -mt-4 rounded-lg border border-black bg-second-place p-4 py-8 text-center">
                        {players[currentIndex1].split("(")[0]}
                      </div>
                    </div>
                    <div className="flex w-1/3 flex-col items-center justify-center">
                      <img
                        src="/images/racer.png"
                        alt=""
                        className="relative z-10 h-full w-[80%]"
                      />
                      <div className="relative z-0  -mt-4 rounded-lg border border-black bg-third-place p-4 text-center">
                        {players[currentIndex3].split("(")[0]}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between gap-3 ">
                    <div className="mb-2 mt-3 roboto-400 ">Supported by</div>
                    <div className="mb-2 mt-3 flex h-[20px] w-[100px] items-center justify-center">
                      <Image
                        src={UnderdogLogo}
                        alt="'Underdog logo"
                        width={200}
                        height={60}
                      />
                    </div>
                    <div className="mb-2 mt-3 flex h-[20px] w-[100px] items-center justify-center ">
                      {/* <Image
                        src={KrakenLogo}
                        alt="'Underdog logo"
                        width={80}
                        height={17}
                      /> */}
                    </div>
                  </div>

                  {/* <Image
                    src={podium}
                    className="container h-[400px] object-cover rounded-xl border-2 border-green-400 bg-green-100"
                    alt=""
                    width={800}
                    height={400}
                  />
                  <div className="absolute left-[100px] top-[100px] p-4 text-sm">
                    {players[currentIndex2].split("(")[0]}
                  </div>
                  <div className="absolute left-[20px] top-[110px] p-4 text-sm">
                    {players[currentIndex1].split("(")[0]}
                  </div>
                  <div className="absolute left-[210px] top-[110px] p-4 text-sm">
                    {players[currentIndex3].split("(")[0]}
                  </div> */}
                </div>
              </div>
              {/*footer*/}
              {/* Login Button -> Only shown when user is not logged in */}
              <div className="mb-5 flex w-full flex-col items-center justify-center gap-6 ">
                {session.status !== "authenticated" && (
                  <div className="">
                    <button
                      onClick={handleLoginAndTransfer}
                      className="outline-black-100 roboto-400 text-[16px] flex h-[63px] w-[413px] items-center justify-center rounded-[16px] bg-[#E2F0CB] p-2 outline outline-1 outline-offset-2"
                    >
                      <FcGoogle className="h-[26px] w-[26px]" /> Login to claim
                    </button>
                  </div>
                )}
                <div className="mb-4 flex space-x-6">
                  <button
                    onClick={handleShare}
                    className="outline-black-100 roboto-400 text-[16px] flex h-[63px] w-[337px] items-center justify-center rounded-[16px] bg-[#C7E8FF] p-2 outline outline-1 outline-offset-2"
                  >
                      <BsTwitter className="h-[20px] w-[25px] text-[#1D9BF0]" /> Share on Twitter 
                      
                    
                  </button>
                  <button
                    onClick={handleDownload}
                    className="outline-black-100 flex h-[63px] w-[62px] items-center justify-center rounded-[16px]  bg-white p-2 outline outline-1 outline-offset-2"
                  >
                    <BsDownload className=" h-[32px] w-[32px] justify-center" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
      </>
    </div>
  );
};

export default Mint;
