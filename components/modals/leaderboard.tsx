
import { AiOutlineClose } from "react-icons/ai";
import { drivers } from "../../constants/drivers";
type LeaderboardProps = {
  isLeaderboardOpen: boolean;
  toggleLeaderboard: () => void;
};

const Leaderboard = ({
  isLeaderboardOpen,
  toggleLeaderboard,
}: LeaderboardProps) => {
  if (!isLeaderboardOpen) return null;

  const newplayers = drivers.slice(0, 10);


  return (
    
    <div>
      
      
      <>
      
      
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
          <div className="relative mx-auto my-6 w-auto max-w-3xl">
            {/*content*/}
            <div className="relative flex w-full flex-col rounded-lg border-0 bg-orange-50 shadow-lg  outline-none focus:outline-none">
              {/*header*/}
              <div className="relative flex items-center justify-center">
                <p className="font-outline-2 text-[50px] font-black text-[#55CBCD]">
                  LEADERBOARD
                </p>
                <div className="absolute right-0 flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
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
                {newplayers.map((player, i) => {
                  return (
                    <div
                      key={i}
                      className="mx-[20px] my-[10px] flex flex-row gap-4"
                    >
                      <div className=" num rowdies-300 flex h-[60px] w-[110px] items-center justify-center rounded-[16px] border border-black text-center text-[30px]">
                        {i + 1}
                      </div>
                      <div className="flex h-[60px] w-[550px] items-center justify-between rounded-[10px] border border-black bg-orange-200 px-4 text-center text-[20px]">
                        <p>{player.driver}</p>
                        <p>245 Points</p>
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
