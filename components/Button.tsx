import * as React from "react";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import Image from "next/image";
import arrowLeft from "../public/images/arrow-left.svg";
import arrowRight from "../public/images/arrow-right.svg";
import { drivers } from "../constants/drivers";

interface ButtonProps {
  currentIndex: number;
  onForwardClick: () => void;
  onBackwardClick: () => void;
  color: string;
  onSelectName: (name: string) => void;
}

const Button: React.FC<ButtonProps> = ({
  currentIndex,
  onForwardClick,
  onBackwardClick,
  color,
  onSelectName,
}) => {
  const currentName = drivers[currentIndex].driver;
  return (
    <button
      onClick={() => onSelectName(currentName)}
      style={{ backgroundColor: color }}
      className={` bg-[${color}] outline-black-100 flex h-[60px] w-[270px] items-center justify-between rounded-xl p-2 px-2 text-[13px] outline outline-1 outline-offset-0`}
    >
      <Image
        src={arrowLeft}
        alt=""
        className="h-13 w-16"
        onClick={() => currentIndex !== 0 && onBackwardClick()}
      />
      {/* <Image src="/images/arrow-left.png" alt="" className='h-8 w-8' width={50} height={50} /> */}
      {currentName}&trade;
      <Image
        src={arrowRight}
        alt=""
        className="h-13 w-16"
        onClick={() => currentIndex !== drivers.length - 1 && onForwardClick()}
      />
    </button>
  );
};

export default Button;
