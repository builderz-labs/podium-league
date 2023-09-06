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
      className={` bg-[${color}] outline-black-100  flex h-[70px] w-[300px] items-center justify-between rounded-xl p-2 outline outline-1 outline-offset-2`}
    >
      <BsArrowLeftCircle
        onClick={() => currentIndex !== 0 && onBackwardClick()}
      />
      {currentName}
      <BsArrowRightCircle
        onClick={() => currentIndex !== players.length - 1 && onForwardClick()}
      />
    </button>
  );
};

export default Button;
