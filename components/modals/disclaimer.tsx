import { AiOutlineClose } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

interface DisclaimerProps {
    isDisclaimerOpen: boolean;
    toggleDisclaimer: () => void;
  }

const Disclaimer = ({ isDisclaimerOpen, toggleDisclaimer }: DisclaimerProps) => {
    if (!isDisclaimerOpen) return null;

     
  return (
    <div>
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  "
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="bg-orange-50 border-0 rounded-lg shadow-lg relative flex flex-col w-[500px]  outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-center relative">
          <p className="font-outline-2 text-[50px] font-black text-[#55CBCD]">
          Disclaimer
          </p>
          <div className="flex right-0 absolute items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className=" w-[40px] h-[40px] rounded-sm border border-black flex items-center justify-center ease-linear transition-all duration-150"
                    type="button"
                    onClick={toggleDisclaimer}
                  >
                    <AiOutlineClose />
                  </button>
                </div>
        </div>
                {/*body*/}
               <div className="flex flex-col m-[35px] p-10 rounded-[20px] bg-green-100 border border-black">
                    <div>
                    Sporting Labs is not affiliated or associated with Formula 1 or any of its related companies. The terms F1, FORMULA ONE, FORMULA 1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX, and related marks are trademarks owned by Formula One Licensing B.V. While Sporting Labs may provide information, services, or products related to sports or motorsports, it is important to note that any references made to Formula 1 are purely for informational purposes. Sporting Labs operates independently and does not have any official endorsement or sponsorship from Formula 1 or association with the athletes or brands featured in our applications.
                    </div>
                    

                </div>
                {/*footer*/}
                <div className="">
                       
                    </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    </div>
  )
}

export default Disclaimer;




