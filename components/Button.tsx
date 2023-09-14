import Image from "next/image";
import * as React from "react";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

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
  const currentName = players[currentIndex];
  return (
    <button
      onClick={() => onSelectName(currentName)}
      style={{ backgroundColor: color }}
      className={` bg-[${color}] outline-black-100  flex h-[70px] w-[400px] items-center justify-between rounded-xl p-2 px-6 outline outline-1 outline-offset-0`}
    >
      <BsArrowLeftCircle
        onClick={() => currentIndex !== 0 && onBackwardClick()}
      />
      {/* <Image src="/images/arrow-left.png" alt="" className='h-8 w-8' width={50} height={50} /> */}
      {currentName}
      <BsArrowRightCircle
        onClick={() => currentIndex !== players.length - 1 && onForwardClick()}
      />
    </button>
  );
};

export default Button;
