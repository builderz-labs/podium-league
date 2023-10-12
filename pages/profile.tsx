import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useUser from "../hooks/useUser";
import { drivers } from "../constants/drivers";
import Image from "next/image";
import arrowLeft from "../public/images/arrow-left.svg";
import arrowRight from "../public/images/arrow-right.svg";
import Leaderboard from "../components/modals/leaderboard";
import Rules from "../components/modals/rules";
import Disclaimer from "../components/modals/disclaimer";
import Unofficial from "../components/modals/unofficial";
import MintedPodiums from "../components/modals/mintedPodiums";

type ProfileProps = {
  isLeaderboardOpen: boolean;
  toggleLeaderboard: () => void;
  isRulesOpen: boolean;
  toggleRules: () => void;
  isDisclaimerOpen: boolean;
  toggleDisclaimer: () => void;
  isUnofficialOpen: boolean;
  toggleUnofficial: () => void;
  isMintedPodiumsOpen: boolean;
  toggleMintedPodiums: () => void;
};

const Profile: React.FC<ProfileProps> = ({
  isLeaderboardOpen,
  toggleLeaderboard,
  isRulesOpen,
  toggleRules,
  isDisclaimerOpen,
  toggleDisclaimer,
  isUnofficialOpen,
  toggleUnofficial,
  isMintedPodiumsOpen,
  toggleMintedPodiums,
}) => {
  const router = useRouter();
  const user = useUser();

  console.log(user.user?.nfts);

  useEffect(() => {
    // Fetch user data here and set it to user state
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-[800px] pt-20 w-full flex-col items-center justify-center">
      <section className="container relative flex h-auto flex-col items-center justify-center rounded-md bg-bg-light ">
        <div className="-mt-14">
          <p className=" rowdies-400 font-outline-2 text-[70px] font-black text-[#55CBCD]">
            PROFILE
          </p>
        </div>

        <div className="my-[30px] flex w-[60%]">
          <div className="num rowdies-300 flex h-[64px] w-[120px] items-center justify-center rounded-[16px] border border-black bg-[#f6eac2]  text-center text-[30px]">
            245
          </div>
          <div className="ml-[17px] flex h-[60px] flex-col justify-between">
            <p className="text-[20px] font-[700]">Brandon</p>
            <p className="text-[20px] font-[400]">12 Points</p>
          </div>
        </div>
<div className="flex justify-center relative h-[300px] w-[100%] my-[30px]">
        <div className=" top-0 h-[100%]  flex w-[60%] border-black absolute ">
          <div className="box-border flex h-[300px]  w-[300px] flex-col items-center justify-center gap-[20px] rounded-[16px] border border-black bg-[#B5EAD6]">
            <div className="pb-[50px] pt-[80px] text-[20px]">Preview Here</div>
            <button className="h-[67px]  w-[266px] items-center rounded-[16px] border border-black bg-[#FFFFFF80] text-[23px]">
              Mint!
            </button>
          </div>

          <div className="mb-[5px] mt-[5px] grid w-[70%] grid-cols-2 gap-[35px] pl-10  ">
            <div className="flex  flex-col items-start justify-between px-[5px]">
              <div className="num rowdies-300 w-[15%] pb-5 text-center text-[30px]">
                Backgroud
              </div>
              <button className="flex h-[67px] w-[266px] items-center justify-between rounded-[16px] border border-black bg-[#DFCCF1] px-2 text-[20px]">
                <Image src={arrowLeft} alt="" className="h-8 w-8" /> Sunrise{" "}
                <Image src={arrowRight} alt="" className="h-8 w-8" />
              </button>
            </div>
            <div className="flex  flex-col items-start justify-between px-[5px]">
              <div className="num rowdies-300 w-[15%] text-center text-[30px]">
                Helmet
              </div>
              <button className="flex h-[67px] w-[266px] items-center justify-between rounded-[16px] border border-black bg-[#F6EAC2] px-2 text-[20px]">
                <Image src={arrowLeft} alt="" className="h-8 w-8" /> Alonso{" "}
                <Image src={arrowRight} alt="" className="h-8 w-8" />
              </button>
            </div>
            <div className="flex  flex-col items-start justify-between px-[5px]">
              <div className="num rowdies-300 w-[15%] text-center text-[30px]">
                Skin{" "}
              </div>
              <button className="flex h-[67px] w-[266px] items-center justify-between rounded-[16px] border border-black bg-[#D3F6C2] px-2 text-[20px]">
                <Image src={arrowLeft} alt="" className="h-8 w-8" /> Dark{" "}
                <Image src={arrowRight} alt="" className="h-8 w-8" />
              </button>
            </div>
            <div className="flex  flex-col items-start justify-between px-[5px]">
              <div className="num rowdies-300 w-[15%] text-center text-[30px]">
                Suit
              </div>
              <button className="flex h-[67px] w-[266px] items-center justify-between rounded-[16px] border border-black bg-[#FFB8B1] px-2 text-[20px]">
                <Image src={arrowLeft} alt="" className="h-8 w-8" /> Ferrari{" "}
                <Image src={arrowRight} alt="" className="h-8 w-8" />
              </button>
            </div>
          </div>
        </div>

        <div className=" top-0 h-[100%] absolute z-10 w-[60%] bg-black bg-opacity-75 rounded-[23px]">
          Coming Soon
        </div>
        </div>



        <div className="flex w-[60%] items-center justify-between">
          <p className="text-[20px] font-[400]">Minted Podiums</p>
          <button
            onClick={toggleMintedPodiums}
            className="color-[#282828] h-[40px] w-[115px] rounded-[8px] border border-black bg-white"
          >
            View All
          </button>
        </div>
        <div className="mb-[50px] mt-[20px] grid w-[60%] grid-cols-2 gap-4">
          {user.user?.nfts.map((nft, index)=> {
            return(
            <div key={index} className="flex h-[60px] w-[100%] items-center justify-between rounded-[16px] border border-black px-[20px]">
            <p>{nft.attributes.Race}</p>
            <p>View NFT</p>
          </div>
            )
          })}
          
          
        </div>
      </section>
      <Leaderboard
        isLeaderboardOpen={isLeaderboardOpen}
        toggleLeaderboard={toggleLeaderboard}
      />
      <Rules isRulesOpen={isRulesOpen} toggleRules={toggleRules} />

      <Disclaimer
        isDisclaimerOpen={isDisclaimerOpen}
        toggleDisclaimer={toggleDisclaimer}
      />
      <Unofficial
        isUnofficialOpen={isUnofficialOpen}
        toggleUnofficial={toggleUnofficial}
      />
      <MintedPodiums
        isMintedPodiumsOpen={isMintedPodiumsOpen}
        toggleMintedPodiums={toggleMintedPodiums}
      />
    </div>
  );
};

export default Profile;
