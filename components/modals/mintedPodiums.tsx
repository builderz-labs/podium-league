
import { AiOutlineClose } from "react-icons/ai";
type MintedPodiumsProps = {
  isMintedPodiumsOpen: boolean;
  toggleMintedPodiums: () => void;
  
};

const MintedPodiums = ({
  isMintedPodiumsOpen,
  toggleMintedPodiums,
  
}: MintedPodiumsProps) => {
  if (!isMintedPodiumsOpen) return null;



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
                  Minted Podiums
                </p>
                <div className="absolute right-0 flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
                  <button
                    className=" flex h-[40px] w-[40px] items-center justify-center rounded-sm border border-black transition-all duration-150 ease-linear"
                    type="button"
                    onClick={toggleMintedPodiums}
                  >
                    <AiOutlineClose />
                  </button>
                </div>
              </div>
              {/*body*/}
              <div className="m-[35px] flex flex-col">
                
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

export default MintedPodiums;
