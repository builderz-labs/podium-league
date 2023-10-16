import { AiOutlineClose } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsTwitter } from "react-icons/bs";
import { signIn, useSession } from "next-auth/react";
import { BsDownload } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";
import { grandPrix } from "../../pages";
import { Skeleton } from "antd";

interface MintProps {
  isMintOpen: boolean;
  toggleMint: () => void;
  currentIndex1: number;
  currentIndex2: number;
  currentIndex3: number;
  image: string;
}

const Mint = ({
  isMintOpen,
  toggleMint,
  currentIndex1,
  currentIndex2,
  currentIndex3,
  image,
}: MintProps) => {
  const session = useSession();

  const [isLoading, setIsLoading] = useState(true);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = `${image}&download=true`;
    // link.download = "podium-leage.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = () => {
    const tweetText = `Just locked in my prediction for ${grandPrix}! Make your prediction here:`; // Update per Grand Prix
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      tweetText,
    )}&url=${encodeURIComponent("https://podium-league.vercel.app/")}`;
    window.open(url, "_blank");
  };

  const handleLoginAndTransfer = async () => {
    const propsAsString = JSON.stringify({
      currentIndex1,
      currentIndex2,
      currentIndex3,
      mint: true,
    });
    const callbackUrl = `${window.location.origin}${
      window.location.pathname
    }?props=${encodeURIComponent(propsAsString)}`;
    await signIn("google", { callbackUrl });
  };

  if (!isMintOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden px-4 outline-none  focus:outline-none md:px-0 ">
        <div className="relative mx-auto my-6 flex w-full max-w-3xl items-center justify-center">
          {/*content*/}
          <div className="relative z-50 flex w-full flex-col rounded-lg border-0 bg-orange-50  shadow-lg outline-none focus:outline-none md:w-[500px]">
            {/*header*/}
            <div className="relative flex items-center justify-center">
              <p className="font-outline-2 text-[50px] font-black text-[#55CBCD]"></p>
              <div className="absolute right-0 flex items-center justify-end rounded-b  border-solid border-slate-200 p-6">
                <button
                  className=" flex h-[40px] w-[40px] items-center justify-center rounded-lg border bg-white transition-all duration-150 ease-linear"
                  type="button"
                  onClick={toggleMint}
                >
                  <AiOutlineClose />
                </button>
              </div>
            </div>
            <div
              style={{
                position: "relative",
                margin: "35px",
              }}
            >
              {/* {isLoading ? <div className='w-full h-full flex items-center justify-center'> <Spin /> </div> : null} */}
              <Image
                alt="Podium Prediction"
                width={500}
                height={500}
                src={image}
                style={{
                  display: isLoading ? "none" : "block",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "contain", // or "cover", depending on your needs
                }}
                onLoad={() => setIsLoading(false)}
              />
            </div>
            {/* Login Button -> Only shown when user is not logged in */}
            <div className="mb-5 flex w-full flex-col items-between justify-between gap-6 ">
              {session.status !== "authenticated" && (
                <div className="px-4 flex w-full justify-center">
                  <button
                    onClick={handleLoginAndTransfer}
                    className="outline-black-100 roboto-400 flex h-[63px] w-full items-center justify-center rounded-[16px] bg-[#E2F0CB] p-2 text-[16px] outline outline-1 outline-offset-2 md:w-[413px]"
                  >
                    <FcGoogle className="h-[26px] w-[26px]" /> Login to claim
                  </button>
                </div>
              )}
              <div className="px-4 mb-4 flex w-full justify-between items-center space-x-6">
                <button
                  onClick={handleShare}
                  className="outline-black-100 roboto-400 flex h-[63px] w-full items-center justify-center gap-2 rounded-[16px] bg-[#C7E8FF] p-2 text-[16px] outline outline-1 md:w-[337px] "
                >
                  <BsTwitter className="h-[20px] w-[25px] text-[#1D9BF0]" />{" "}
                  Share on Twitter
                </button>
                <button
                  onClick={
                    // Call the function when you want to save the part as PNG
                    handleDownload
                  }
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
  );
};

export default Mint;
