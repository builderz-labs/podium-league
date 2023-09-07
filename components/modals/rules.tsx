import { AiOutlineClose } from "react-icons/ai";

interface RulesProps {
    isRulesOpen: boolean;
    toggleRules: () => void;
  }

const rules = ({ isRulesOpen, toggleRules }: RulesProps) => {
    if (!isRulesOpen) return null;

    
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
            Rules
          </p>
          <div className="flex right-0 absolute items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className=" w-[40px] h-[40px] rounded-sm border border-black flex items-center justify-center ease-linear transition-all duration-150"
                    type="button"
                    onClick={toggleRules}
                  >
                    <AiOutlineClose />
                  </button>
                </div>
        </div>
                {/*body*/}
               <div className="flex flex-col m-[35px] p-10 rounded-[20px] bg-green-100 border border-black">
                    <p>Welcome to Podium: The on-chain mini league by Sporting labs</p>
                    <p>Before every race weekend you can mint a prediction for who 
you think is going to come on the podium. 1st place gets 25 points, 
2nd gets 18, and 3rd place gets 15 points. Watch Formula 1 all season,
 make your predictions, share with friends, & climb the leaderboard!</p>
<p>Steps:</p>
<ol>
    <li>
    Pick your racers
    </li>
    <li>
    Mint your predictions for free
    </li>
    <li>
    Share with friends!
    </li>
    <li>
    Check your point/leaderboard after every race
    </li>
    <li>
        Have fun!
    </li>
</ol>

                </div>
                {/*footer*/}
               
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    </div>
  )
}

export default rules




