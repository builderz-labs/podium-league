import { AiOutlineClose } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

interface UnofficialProps {
  isUnofficialOpen: boolean;
  toggleUnofficial: () => void;
}

const Unofficial = ({
  isUnofficialOpen,
  toggleUnofficial,
}: UnofficialProps) => {
  if (!isUnofficialOpen) return null;

  return (
    <div>
      <>
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none  ">
          <div className="relative mx-auto my-6 w-auto max-w-3xl">
            {/*content*/}
            <div className="relative flex w-[778px]  flex-col rounded-lg border-0 bg-orange-50 shadow-lg  outline-none focus:outline-none">
              {/*header*/}
              <div className="relative flex items-center justify-center">
                <p className="font-outline-2 text-[50px] font-black text-[#55CBCD]">
                  Unofficial Application
                </p>
                <div className="absolute right-0 flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
                  <button
                    className=" flex h-[40px] w-[40px] items-center justify-center rounded-sm border border-black transition-all duration-150 ease-linear"
                    type="button"
                    onClick={toggleUnofficial}
                  >
                    <AiOutlineClose />
                  </button>
                </div>
              </div>
              {/*body*/}
              <div className="m-[35px] flex flex-col rounded-[20px] border border-black bg-green-100 p-10 h-[616px]">
                <div className="text-[19px] ">
                 <p className=" pb-2">Sporting Labs is an unofficial application and has no official affiliation or connection with any of the racing leagues, teams, drivers, athletes, franchises, or sanctioning bodies related to the games we provide coverage for.</p>
                 <p className=" pb-2">Sporting Labs adheres to the same standards as media publishers when it comes to legally displaying publicly available sports statistics and data on various consumer platforms such as websites, television, or social profiles. While Sporting Labs relies on publicly accessible sports data, it is essential to clarify that this does not imply any form of association between Sporting Labs and the athletes or sports franchises for which we present data.</p>
                 <p className=" pb-2">We consider publicity rights with great seriousness and place significant importance on showing respect and appreciation for any athlete, league, team, or sanctioning body whose real-life performance data and profiles are featured within our product.</p>
                 <p className=" pb-5">Throughout our applications, you will find additional disclaimers designed to prevent any confusion regarding the affiliation between Sporting Labs and specific leagues, teams, drivers, athletes, franchises, or sanctioning bodies.</p>
                </div>
              </div>
              {/*footer*/}
              <div className=""></div>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
      </>
    </div>
  );
};

export default Unofficial;
