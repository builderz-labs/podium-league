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
import { useNftsByOwnerAddress } from "../hooks/useNftsByOwnerAddress";

import axios from "axios";


type HomeContainerProps = {
  isLeaderboardOpen: boolean;
  toggleLeaderboard: () => void;
  isRulesOpen: boolean;
  toggleRules: () => void;
  isMintOpen: boolean; 
  toggleMint: () => void; 
};


const Homecontainer: React.FC<HomeContainerProps> = ({ isLeaderboardOpen, toggleLeaderboard, isRulesOpen, toggleRules, isMintOpen, toggleMint }) => {
  
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
  


  const { data, isLoading, refetch } = useNftsByOwnerAddress();
  const handleMintNft = async () => {
    

    await axios.post("/api/create-nft");

    for (let i = 0; i < 9; i++) {
      await refetch();
      
    }

  
  };

  return (
    <div className="flex h-auto w-full flex-col items-center justify-center">
      <section className="container  relative flex h-auto flex-col items-center justify-center bg-orange-100">
        <div className="-mt-12">
          <p className=" font-outline-2 text-[70px] font-black text-[#55CBCD]">
            PODIUM
          </p>
        </div>
        <div className="bg-[#FFEFD8] p-2 rounded-2xl">
          <p>The on-chain mini league</p>
        </div>
        <div className="my-12 mb-36 flex flex-row items-center justify-center">
          <div className="mb-25 container w-[600px] p-5">
            <p className="flex flex-row items-center text-[20px] font-[400]">
              Pick your racer{" "}
              <Image src={helmet} className="h-[50px] w-[50px]" alt="" 
               width={53}
               height={59}
              />
            </p>

            <div className="w-350 mt-3 grid grid-cols-1 justify-start gap-2">
              <div className="mt-5 flex h-[80px] w-full flex-row items-center justify-between gap-[24px]">
                <span className="w-[15%] text-center text-[30px]">1st</span>
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
                <span className="w-[15%] text-center text-[30px]">2nd</span>
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
                <span className="w-[15%] text-center text-[30px]">3rd</span>
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
          <div className="container min-h-[400px]">
            <div className="relative  w-full">
            <Image src={podium} className="container h-[400px] rounded-xl border-2 border-green-400 bg-green-100"
                alt="" 
                width={800}
                height={400}
                />
              <div className="absolute left-[100px] top-[280px] p-4 ">
                {players[currentIndex2].split("(")[0]}
              </div>
              <div className="absolute left-[310px] top-[270px] p-4 ">
                {players[currentIndex1].split("(")[0]}
              </div>
              <div className="absolute right-[70px] top-[290px] p-4 ">
                {players[currentIndex3].split("(")[0]}
              </div>
            </div>
            <button onClick={handleMintNft} className="mt-[30px] h-[90px] w-full rounded-[16px] border-[0.5px] border-black bg-white font-black drop-shadow-lg">
              Mint!
            </button>
          </div>

          <div className="container flex w-[800px] flex-col items-center justify-center p-5">
            <p className="align-center mt-[40px] text-center text-[20px] font-[400]">
              Share your strategy!
            </p>
            <button className="border-1 flex h-[70px] w-[70px] items-center justify-center rounded-[5px] border border-black bg-[#C7E8FF]">
              <BsTwitter className="h-[30px] w-[35px] text-[#1D9BF0]" />
            </button>
            <div className="BG-[#FFED8] mt-[35px] h-[10px] w-full border-2"></div>

            <p className="align-center mt-[40px] text-center text-[20px] font-[400]">
              {
                "Intrigued by what you've seen? Join our main league to participate in exciting races and earn rewards!"
              }
            </p>
            <button className="outline-black-100 mt-[35px] h-[65px] w-[175px] rounded-xl bg-white p-2 text-[20px] outline outline-1 outline-offset-2">
              View league
            </button>
          </div>
        </div>

        <div className="bg-red absolute bottom-1 right-[20px]">
          <Image src={racer} alt="" 
           width={198}
           height={112}
          />
        </div>
      </section>
      <Leaderboard isLeaderboardOpen={isLeaderboardOpen} players={players} toggleLeaderboard={toggleLeaderboard} />
      <Rules isRulesOpen={isRulesOpen} toggleRules={toggleRules}/>
      <Mint isMintOpen={isMintOpen} toggleMint={toggleMint} />
    </div>
  );
};

export default Homecontainer;
