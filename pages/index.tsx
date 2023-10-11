import React, { useState } from "react";
import { players } from "../constants";
import Button from "../components/Button";
import { BsTwitter } from "react-icons/bs";
import Image from "next/image";
import podium from "../public/images/podium.png";
import racer from "../public/images/racercar.png";
import helmet from "../public/images/helmet.png";
import Leaderboard from "../components/modals/leaderboard";
import Rules from "../components/modals/rules";
import Mint from "../components/modals/mint";
import Disclaimer from "../components/modals/disclaimer";
import Unofficial from "../components/modals/unofficial";
import axios from "axios";
import { Spin } from "antd";

type HomeContainerProps = {
  isLeaderboardOpen: boolean;
  toggleLeaderboard: () => void;
  isRulesOpen: boolean;
  toggleRules: () => void;
  isMintOpen: boolean;
  toggleMint: () => void;
  isDisclaimerOpen: boolean;
  toggleDisclaimer: () => void;
  isUnofficialOpen: boolean;
  toggleUnofficial: () => void;
};

const Homecontainer: React.FC<HomeContainerProps> = ({
  isLeaderboardOpen,
  toggleLeaderboard,
  isRulesOpen,
  toggleRules,
  isDisclaimerOpen,
  toggleDisclaimer,
  isUnofficialOpen,
  toggleUnofficial,
}) => {
  const [isMintOpen, setIsMintOpen] = useState(false);
  const [loading, setLoading] = useState(false);


  const toggleMint = () => {
    setIsMintOpen(!isMintOpen);
  };

  // State for each button's currentIndex
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [currentIndex3, setCurrentIndex3] = useState(0);

  // Function to handle forward click
  const handleForwardClick = (
    setCurrentIndex: (index: number) => void,
    currentIndex: number,
  ) => {
    if (currentIndex < players.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Function to handle backward click
  const handleBackwardClick = (
    setCurrentIndex: (index: number) => void,
    currentIndex: number,
  ) => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // const { data, isLoading, refetch } = useNftsByOwnerAddress();
  const handleMintNft = async () => {
    setLoading(true);

    try {
      const res = await axios.post("/api/create-nft", {
        first: players[currentIndex1],
        second: players[currentIndex2],
        third: players[currentIndex3],
      });
      console.log(res.data);

      setIsMintOpen(true);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div className="mt-0 flex h-auto w-full flex-col items-center justify-start md:-mt-10">
      <section className="container relative flex h-auto flex-col items-center justify-start rounded-md bg-bg-light">
        <div className="-mt-12">
          <p className=" rowdies-400 font-outline-2 text-[70px] font-black text-[#55CBCD]">
            PODIUM
          </p>
        </div>
        <div className="rounded-2xl bg-bg-mid px-4">
          <p>The on-chain mini league</p>
        </div>

        <div className=" flex w-full flex-col items-center justify-center gap-8 px-8 py-4 md:flex-row md:items-start md:gap-16">
          <div className=" container h-full w-full md:w-1/3">
            <p className="flex w-full flex-row items-center text-[20px] font-[400]">
              Pick your racer{" "}
              <Image
                src={helmet}
                className="h-[50px] w-[50px]"
                alt=""
                width={53}
                height={59}
              />
            </p>

            <div className="mt-3 grid w-full grid-cols-1 justify-start gap-2">
              <div className="mt-5 flex h-[80px] w-full flex-row items-center justify-between gap-[24px]">
                <span className=" num rowdies-300 w-[15%] text-center text-[30px]">
                  1st
                </span>
                <Button
                  color={"#F6EAC2"}
                  players={players}
                  currentIndex={currentIndex1}
                  onSelectName={() => {}}
                  onForwardClick={() =>
                    handleForwardClick(setCurrentIndex1, currentIndex1)
                  }
                  onBackwardClick={() =>
                    handleBackwardClick(setCurrentIndex1, currentIndex1)
                  }
                />
              </div>

              <div className="mt-5 flex h-[80px] w-full flex-row items-center justify-between gap-[24px]">
                <span className="num rowdies-300 w-[15%] text-center text-[30px]">
                  2nd
                </span>
                <Button
                  players={players}
                  currentIndex={currentIndex2}
                  onSelectName={() => {}}
                  onForwardClick={() =>
                    handleForwardClick(setCurrentIndex2, currentIndex2)
                  }
                  onBackwardClick={() =>
                    handleBackwardClick(setCurrentIndex2, currentIndex2)
                  }
                  color={"#DFCCF1"}
                />
              </div>

              <div className="mt-5 flex h-[80px] w-full flex-row items-center justify-between gap-[24px]">
                <span className="num rowdies-300 w-[15%] text-center text-[30px]">
                  3rd
                </span>
                <Button
                  players={players}
                  currentIndex={currentIndex3}
                  onSelectName={() => {}}
                  onForwardClick={() =>
                    handleForwardClick(setCurrentIndex3, currentIndex3)
                  }
                  onBackwardClick={() =>
                    handleBackwardClick(setCurrentIndex3, currentIndex3)
                  }
                  color={"#FFB8B1"}
                />
              </div>
            </div>
          </div>

          <div className="container mx-auto flex h-full w-full flex-col gap-4 ">
            {/* TODO: This has to be refactored so different formats of the webpage don't affect this */}
            <div className="relative  w-full">
              <div className="flex w-full items-center justify-center">
                <div className="mx-auto h-full min-h-[350px] w-full rounded-lg border border-black  bg-background-illustration bg-cover bg-center bg-no-repeat md:h-1/3 md:min-h-[520px]"></div>
              </div>

              <div className="absolute inset-0 flex h-full w-full flex-row items-end justify-center gap-4 p-4">
                <div className="flex w-1/3 flex-col items-center justify-center">
                  <img
                    src="/images/racer.png"
                    alt="racer"
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
            </div>

            <div className="relative">
              <button
                onClick={handleMintNft}
                className="relative z-20 h-[90px] w-full rounded-[16px] border-[0.5px] border-black bg-white transition-all duration-300  ease-in-out hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:bg-opacity-100 hover:shadow-[#FFF6EA] active:translate-x-[0px]
                     active:translate-y-[0px] active:rounded-2xl active:shadow-none"
              >
                {loading && <Spin />} Mint!
              </button>
              <div className="absolute -bottom-1 z-10 h-full w-full rounded-2xl bg-[#B5EAD6]"></div>
            </div>
            <p className=" text-center text-[16px] font-[400] text-[#282828]">
              Dont keep the Podium fun to yourself - mint and share away!
            </p>
          </div>

          <div className="container flex h-full w-1/3 flex-col items-center justify-center gap-2">
            <p className="align-center mt-[40px] text-center text-[20px] font-[400]">
              Share your strategy!
            </p>
            <button className="border-1 flex items-center justify-center rounded-2xl border border-black bg-[#C7E8FF] p-3">
              <BsTwitter className="h-[48px] w-[48px] text-[#1D9BF0]" />
            </button>
            <div className="mt-[35px] h-[10px] w-full rounded-2xl bg-[#FFEFD8]"></div>

            <p className="align-center mt-[40px] text-center text-[20px] font-[400]">
              {
                "Intrigued by what you've seen? Join our main league to participate in exciting races and earn rewards!"
              }
            </p>
            <button className="outline-black-100 mt-[35px] h-[65px] w-[175px] rounded-xl bg-white p-2 py-0 text-[20px] outline outline-1 outline-offset-2">
              View league
            </button>
          </div>
        </div>

        <div className="bg-red absolute bottom-20 right-1 md:bottom-8 md:right-8">
          <Image src={racer} alt="" width={198} height={112} />
        </div>
      </section>
      <Leaderboard
        isLeaderboardOpen={isLeaderboardOpen}
        players={players}
        toggleLeaderboard={toggleLeaderboard}
      />
      <Rules isRulesOpen={isRulesOpen} toggleRules={toggleRules} />
      <Mint
        isMintOpen={isMintOpen}
        toggleMint={toggleMint}
        currentIndex1={currentIndex1}
        currentIndex2={currentIndex2}
        currentIndex3={currentIndex3}
      />
      <Disclaimer
        isDisclaimerOpen={isDisclaimerOpen}
        toggleDisclaimer={toggleDisclaimer}
      />
      <Unofficial
        isUnofficialOpen={isUnofficialOpen}
        toggleUnofficial={toggleUnofficial}
      />
    </div>
  );
};

export default Homecontainer;
