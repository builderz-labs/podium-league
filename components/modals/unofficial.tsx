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
            <div className="relative flex w-[700px] flex-col rounded-lg border-0 bg-orange-50 shadow-lg  outline-none focus:outline-none">
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
              <div className="m-[35px] flex flex-col rounded-[20px] border border-black bg-green-100 p-10">
                <div>
                  Sporting Labs is not affiliated or associated with Formula 1
                  or any of its related companies. The terms F1, FORMULA ONE,
                  FORMULA 1, FIA FORMULA ONE WORLD CHAMPIONSHIP, GRAND PRIX, and
                  related marks are trademarks owned by Formula One Licensing
                  B.V. While Sporting Labs may provide information, services, or
                  products related to sports or motorsports, it is important to
                  note that any references made to Formula 1 are purely for
                  informational purposes. Sporting Labs operates independently
                  and does not have any official endorsement or sponsorship from
                  Formula 1 or association with the athletes or brands featured
                  in our applications.
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
