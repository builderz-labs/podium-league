import { AiOutlineClose } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

interface MintProps {
  isMintOpen: boolean;
  toggleMint: () => void;
}

const Mint = ({ isMintOpen, toggleMint }: MintProps) => {
  if (!isMintOpen) return null;

  return (
    <div>
      <>
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none  ">
          <div className="relative mx-auto my-6 w-auto max-w-3xl">
            {/*content*/}
            <div className="relative flex w-[500px] flex-col rounded-lg border-0 bg-orange-50 shadow-lg  outline-none focus:outline-none">
              {/*header*/}
              <div className="relative flex items-center justify-center">
                <p className="font-outline-2 text-[50px] font-black text-[#55CBCD]"></p>
                <div className="absolute right-0 flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
                  <button
                    className=" flex h-[40px] w-[40px] items-center justify-center rounded-sm border border-black transition-all duration-150 ease-linear"
                    type="button"
                    onClick={toggleMint}
                  >
                    <AiOutlineClose />
                  </button>
                </div>
              </div>
              {/*body*/}
              <div className="m-[35px] flex flex-col rounded-[20px] border border-black bg-green-100 p-10">
                <div></div>

                <div>
                  <button></button>
                </div>
              </div>
              {/*footer*/}
              <div className="">
                <button className="outline-black-100  flex h-[70px] w-[400px] items-center justify-between rounded-xl p-2 outline outline-1 outline-offset-2">
                  <FcGoogle /> Login to claim
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
      </>
    </div>
  );
};

export default Mint;
