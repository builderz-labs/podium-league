import { AiOutlineClose } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsTwitter } from "react-icons/bs";
import Image from "next/image";
import podium from "../../public/images/podium.png";
import { players } from "../../constants";
import { useSession } from "next-auth/react";
import { BsDownload } from "react-icons/bs";

interface MintProps {
  isMintOpen: boolean;
  toggleMint: () => void;
  currentIndex1: number;
  currentIndex2: number;
  currentIndex3: number;
}

const Mint = ({ isMintOpen, toggleMint, currentIndex1, currentIndex2, currentIndex3 }: MintProps) => {
  const session = useSession();

  const handleDownload = () => {
    // TODO:
  }

  const handleShare = () => {
    // TODO:
  }

  const handleLoginAndTransfer = () => {
    // TODO
  }

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
                    className=" flex h-[40px] w-[40px] items-center justify-center rounded-sm border border-black transition-all duration-150 ease-linear"
                    type="button"
                    onClick={toggleMint}
                  >
                    <AiOutlineClose />
                  </button>
                </div>
              </div>
              {/*body*/}
              <div className="m-[35px] flex flex-col rounded-[20px] border border-black bg-green-100 p-10">
                {/* TODO: This has to be refactored so different formats of the webpage don't affect this */}
                <div className="relative w-full">
                  <Image
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
                  </div>
                </div>

                {/* <div>
                  <button></button>
                </div> */}
              </div>
              {/*footer*/}
              {/* Login Button -> Only shown when user is not logged in */}
              <div className="w-full flex flex-row items-center justify-center gap-4 mb-10 ">
                {session.status !== "authenticated" && <div className="">
                  <button onClick={handleLoginAndTransfer} className="outline-black-100  flex gap-2  items-center justify-between rounded-xl p-2 outline outline-1 outline-offset-2">
                    <FcGoogle /> Login to claim
                  </button>
                </div>}
                <div className="flex space-x-4">
                  <button onClick={handleShare} className="outline-black-100 flex gap-2 items-center justify-between rounded-xl p-2 outline outline-1 outline-offset-2">
                    <BsTwitter /> Share on Twitter
                  </button>
                </div>
                <button onClick={handleDownload} className="outline-black-100 flex  rounded-xl p-2 outline outline-1 outline-offset-2"><BsDownload /></button>
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
