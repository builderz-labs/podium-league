import * as React from "react";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import Image from "next/image";
import arrowLeft from "../public/images/arrow-left.svg";
import arrowRight from "../public/images/arrow-right.svg";

interface ButtonProps {
  players: string[];
  currentIndex: number;
  onForwardClick: () => void;
  onBackwardClick: () => void;
  color: string;
  onSelectName: (name: string) => void;
}

const Button: React.FC<ButtonProps> = ({
  players,
  currentIndex,
  onForwardClick,
  onBackwardClick,
  color,
  onSelectName,
}) => {
  const currentName = players[currentIndex].split("(")[0];
  return (
    <button
      onClick={() => onSelectName(currentName)}
      style={{ backgroundColor: color }}
      className={` bg-[${color}] outline-black-100 flex h-[60px] w-[266px] items-center justify-between rounded-xl p-2 px-2 text-[20px] outline outline-1 outline-offset-0`}
    >
      <Image
        src={arrowLeft}
        alt=""
        className="h-13 w-16"
        onClick={() => currentIndex !== 0 && onBackwardClick()}
      />
      {/* <Image src="/images/arrow-left.png" alt="" className='h-8 w-8' width={50} height={50} /> */}
      {currentName}
      <Image
        src={arrowRight}
        alt=""
        className="h-13 w-16"
        onClick={() => currentIndex !== players.length - 1 && onForwardClick()}
      />
    </button>
  );
};

export default Button;
