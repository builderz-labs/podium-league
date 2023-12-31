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
import { Spin } from 'antd';

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
    <div className="flex  h-full  w-full flex-col items-center justify-start">
      <section className="container mt-20 md:mt-40 relative  flex h-auto flex-col items-center justify-start rounded-md bg-bg-light scale-90">
        <div className="-mt-12">
          <p className=" rowdies-400 font-outline-2 text-[70px] font-black text-[#55CBCD]">
            PROFILE
          </p>
        </div>

        {/* <div className="my-[30px] mb-1 flex w-[60%]">
          <div className="num rowdies-300 flex h-[64px] w-[120px] items-center justify-center rounded-[16px] border border-black bg-[#f6eac2]  text-center text-[30px]">
            465
          </div>
          <div className="ml-[17px] flex h-[60px] flex-col justify-between">
            <p className="roboto-400 text-[20px] font-bold">{user.user?.name}</p>
            <p className="roboto-400 text-[20px]">0 Points</p>
          </div>
        </div> */}

        <div className="relative my-[30px] flex h-[300px] w-[100%] justify-center py-4">
          <div className=" absolute top-0  flex h-[100%] w-[60%] border-black ">
            <div className="box-border flex h-[300px]  w-[300px] flex-col items-center justify-center gap-[20px] rounded-[16px] border border-black bg-[#B5EAD6]">
              <div className="pb-[50px] pt-[80px] text-[20px]">
                Preview Here
              </div>
              <button className="h-[67px]  w-[266px] items-center rounded-[16px] border border-black bg-[#FFFFFF80] text-[23px]">
                Mint!
              </button>
            </div>

            {/* <div className=" m-5 grid w-[70%] grid-cols-2 gap-[35px] pl-10  ">
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
                  Skin{"Tone "}
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
            </div> */}
          </div>

          <div className="absolute top-0 z-10 flex h-[105%] w-[100%] items-center justify-center  bg-black bg-opacity-60 backdrop-blur-lg">
            <p className=" rowdies-400 opacity-60 text-[74px] font-black text-center text-[#55CBCD]">
              Coming soon
            </p>
          </div>
        </div>

        <div className="flex  w-full md:w-[60%] items-center justify-between mt-10 px-4">
          <p className="text-2xl font-semibold">Minted Podiums</p>
        </div>
        {user.loading && <Spin />}
        <div className="mb-[400px] mt-[20px] grid w-full md:w-[60%] grid-cols-1 md:grid-cols-2 gap-4 px-4">
          {user.user?.nfts.slice(0, 4).map((nft, index) => {
            return (
              <div key={index} className='rounded-lg flex flex-col items-center justify-start gap-4'>
                <img src={nft.image} alt='image' className='rounded-md' />
                <div className="flex h-[60px] w-[100%] items-center justify-between rounded-[16px] border border-black px-[20px] ">
                  <p className="text-[12px] md:text-[15px]">{nft.attributes.Race}</p>
                  <a target="_blank" href={`https://xray.helius.xyz/token/${nft.mintAddress}?network=mainnet`} className='hover:scale-110 transition-all duration-300 ease-in-out border border-slate-200 text-black px-4 whitespace-nowrap py-1 rounded-md'>View NFT</a>
                </div>
              </div>
            );
          })}
        </div>
        { }
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
    </div>
  );
};

export default Profile;
