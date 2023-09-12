import { AiOutlineClose } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

interface UnofficialProps {
    isUnofficialOpen: boolean;
    toggleUnofficial: () => void;
  }

const Unofficial = ({ isUnofficialOpen, toggleUnofficial }: UnofficialProps) => {
    if (!isUnofficialOpen) return null;

     
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
          unofficial application
          </p>
          <div className="flex right-0 absolute items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className=" w-[40px] h-[40px] rounded-sm border border-black flex items-center justify-center ease-linear transition-all duration-150"
                    type="button"
                    onClick={toggleUnofficial}
                  >
                    <AiOutlineClose />
                  </button>
                </div>
        </div>
                {/*body*/}
               <div className="flex flex-col m-[35px] p-10 rounded-[20px] bg-green-100 border border-black">
                    <div>
                    
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

export default Unofficial;




