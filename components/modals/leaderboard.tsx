import { AiOutlineClose } from "react-icons/ai";
type LeaderboardProps = {
    isLeaderboardOpen: boolean;
    toggleLeaderboard: () => void;
    players: string[];
  };

const leaderboard = ({ isLeaderboardOpen, toggleLeaderboard, players }: LeaderboardProps) => {
    if (!isLeaderboardOpen) return null;

    const newplayers = players.slice(0, 7);

  return (
    <div>
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="bg-orange-50 border-0 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-center justify-center relative">
      <p className="font-outline-2 text-[50px] font-black text-[#55CBCD]">
        LEADERBOARD
      </p>
      <div className="flex right-0 absolute items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className=" w-[40px] h-[40px] rounded-sm border border-black flex items-center justify-center ease-linear transition-all duration-150"
                type="button"
                onClick={toggleLeaderboard}
              >
                <AiOutlineClose />
              </button>
            </div>
    </div>
            {/*body*/}
           <div className="flex flex-col m-[35px]">
                {
                  newplayers.map((player, i) => {
                    return (
                      
              <div key={i} className="mx-[20px] my-[10px] flex flex-row gap-4">
                      <div className="w-[50px] h-[50px] border border-black items-center rounded-[10px] justify-center flex text-[15px] text-center">
                  {i+1}
                </div>
                <div className="bg-orange-200 w-[400px] h-[50px] border border-black items-center rounded-[10px] justify-between px-4 flex text-[15px] text-center"> 
                  <p>{player}</p>
                  <p>245 Points</p>
                </div>
              </div>
                    )
                  })
                }
                
            </div>
            {/*footer*/}
           
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </></div>
  )
}

export default leaderboard





