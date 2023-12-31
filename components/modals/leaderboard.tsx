import { AiOutlineClose } from "react-icons/ai";
import useLeaderboard from "../../hooks/useLeaderboard";
type LeaderboardProps = {
  isLeaderboardOpen: boolean;
  toggleLeaderboard: () => void;
};

function truncate(str: string) {
  if (str.length <= 8) {
    return str;
  }
  return str.slice(0, 4) + '...' + str.slice(-4);
}

const Leaderboard = ({
  isLeaderboardOpen,
  toggleLeaderboard,
}: LeaderboardProps) => {
  const leaderboard = useLeaderboard();
  console.log(leaderboard);

  if (!isLeaderboardOpen) return null;

  return (
    <div>
      <>
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none mt-20 md:mt-0 ">
          <div className="relative mx-auto my-6 w-auto max-w-3xl">
            {/*content*/}
            <div className="relative flex w-full flex-col rounded-lg border-0 bg-orange-50 shadow-lg  outline-none focus:outline-none">
              {/*header*/}
              <div className="relative flex items-center justify-center w-full">
                <h1 className="font-outline-2 text-3xl mt-10 md:text-[50px] font-black text-[#55CBCD]">
                  LEADERBOARD
                </h1>
                <div className="absolute right-0 flex items-center justify-end rounded-b border-solid border-slate-200 p-6">
                  <button
                    className=" flex h-[40px] w-[40px] items-center justify-center rounded-lg border bg-white transition-all duration-150 ease-linear"
                    type="button"
                    onClick={toggleLeaderboard}
                  >
                    <AiOutlineClose />
                  </button>
                </div>
              </div>
              {/*body*/}
              <div className="m-[35px] flex flex-col">
                {leaderboard.slice(0, 10).map((player, i) => {
                  return (
                    <div
                      key={i}
                      className="mx-[20px] my-[10px] flex flex-row gap-4"
                    >
                      <div className=" num rowdies-300 flex h-[60px] w-[110px] items-center justify-center rounded-[16px] border border-black text-center text-[30px]">
                        {i + 1}
                      </div>
                      <div
                        className={`flex ${i === 0
                          ? "bg-[#F6EAC2]"
                          : i === 1
                            ? "bg-[#DFCCF1]"
                            : i === 2
                              ? "bg-[#FFB8B1]"
                              : "bg-[#FFFFFF]"
                          } roboto-400 h-[60px] w-full md:w-[550px] items-center justify-between rounded-[10px] border border-black  px-4 text-center text-[20px]`}
                      >
                        <p>{truncate(player.ownerAddress)}</p>
                        <p>{player.totalPoints} Points</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/*footer*/}
            </div>
          </div>
        </div>
        <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
      </>
    </div>
  );
};

export default Leaderboard;
