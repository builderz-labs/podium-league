import { rule } from "postcss";
import { AiOutlineClose } from "react-icons/ai";

interface RulesProps {
  isRulesOpen: boolean;
  toggleRules: () => void;
}

const rules = [
  {description: 'Pick your racers', key: 0},
  {description: 'Mint your predictions for free', key: 1},
  {description: 'Share with friends!', key: 2},
  {description: 'Check your point/leaderboard after every race', key: 3},
  {description: 'Have fun!', key: 4}
];


const Rules = ({ isRulesOpen, toggleRules }: RulesProps) => {
  if (!isRulesOpen) return null;

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
                  Rules
                </p>
                <div className="absolute right-0 flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
                  <button
                    className=" flex h-[40px] w-[40px] items-center justify-center rounded-lg border bg-white transition-all duration-150 ease-linear"
                    type="button"
                    onClick={toggleRules}
                  >
                    <AiOutlineClose />
                  </button>
                </div>
              </div>
              {/*body*/}
              <div className="m-[35px] text-[22px] flex flex-col rounded-[20px] border border-black bg-green-100 p-10">
                <p className=" pb-5">
                  Welcome to Podium: The on-chain mini league by Sporting labs
                </p>
                <p className=" pb-5">
                  Before every race weekend you can mint a prediction for who 
                  you think is going to come on the podium. 1st place gets 25
                  points,  2nd gets 18, and 3rd place gets 15 points. Watch
                  Formula 1 all season,  make your predictions, share with
                  friends, & climb the leaderboard!
                </p>
                <p className=" pb-5 font-bold">Steps:</p>
                
                <ol className=" pb-8">
                {rules.map(rule =>
       <li key={rule.key}>{rule.key + 1}. {rule.description}</li>
     )}
                </ol>
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

export default Rules;
