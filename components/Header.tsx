import React, { MouseEventHandler } from "react";
import { signIn, useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { BsTwitter } from "react-icons/bs";
import Logo from "../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import useUser from "../hooks/useUser";



interface HeaderProps {
  toggleLeaderboard: MouseEventHandler;
  toggleRules: MouseEventHandler;
}

const handleSignOut = () => {

}

const Header: React.FC<HeaderProps> = ({ toggleLeaderboard, toggleRules }) => {
  const session = useSession();

  const user = useUser();

  console.log(user)

  return (
    <header className="fixed z-50 w-screen bg-white p-3 px-4 md:p-4 md:px-16">
      {/* desktop and tablet */}
      <div className="hidden h-full w-full items-center justify-between md:flex">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md border-2 border-green-300 bg-green-100 p-2"
        >
          <div className="flex h-[45px] w-[270px] items-center justify-center border border-[#B5EAD6] bg-[#E2FFF4]">
            <Image alt="Sporting Lab Logo" src={Logo} width={240} height={35} />
          </div>
        </Link>

        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8"
          >
            <li
              onClick={toggleRules}
              className="text-textColor hover:text-headingColor cursor-pointer text-base transition-all duration-100 ease-in-out"
            >
              Rules
            </li>
            <li
              onClick={toggleLeaderboard}
              className="text-textColor hover:text-headingColor cursor-pointer text-base transition-all duration-100 ease-in-out"
            >
              Leaderboard
            </li>
            {session.status !== "authenticated" ? (
              <>
                <li>
                  <div
                    onClick={() => signIn("google")}
                    className="z-10 flex cursor-pointer items-center justify-center rounded-2xl border border-gray-300 
                    bg-white bg-opacity-60 p-2  transition-all duration-300  ease-in-out hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:bg-opacity-100 hover:shadow-[4px_4px_0px_orange] active:translate-x-[0px]
                     active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                  >
                    <FcGoogle fontSize={30} />
                    <p className="mx-4  text-lg">Login</p>
                  </div>
                </li>
                <li>
                  <div
                    onClick={() => signIn("twitter")}
                    className="z-10 flex cursor-pointer items-center justify-center rounded-2xl border border-gray-300 
                    bg-white bg-opacity-60 p-2  transition-all duration-300  ease-in-out hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:bg-opacity-100 hover:shadow-[4px_4px_0px_orange] active:translate-x-[0px]
                     active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                  >
                    <BsTwitter fontSize={30} />
                    <p className="mx-4  text-lg">Login</p>
                  </div>
                </li>
              </>
            ) : (
              <div className="dropdown inline-block relative">
              <button className="bg-[#FFF6EA] border border-[#282828] rounded-[16px] text-[#282828] font-semibold py-2 px-4 inline-flex items-center">
                <span className="mr-1">{session.data?.user?.name}</span>
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
              </button>
              <ul className="dropdown-menu absolute hidden text-[#282828] w-full pt-1">
                <li className=""><a className="rounded-t bg-[#FFF6EA] py-2 px-4 block whitespace-no-wrap" href="#">Profile</a></li>
                <li className=""><a className="bg-[#FFF6EA] py-2 px-4 block whitespace-no-wrap" href="#">Logout</a></li>
              </ul>
            </div>
            )}
          </motion.ul>
        </div>
      </div>

      {/* mobile */}
      <div className="flex h-full w-full md:hidden">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md border-2 border-green-300 bg-green-100 p-2"
        >
          <p className="text-headingColor text-[10px] font-bold uppercase">
            Sporting labs
          </p>
        </Link>

        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8"
          >
            <li
              onClick={toggleRules}
              className="text-textColor hover:text-headingColor cursor-pointer text-base transition-all duration-100 ease-in-out"
            >
              Rules
            </li>
            <li
              onClick={toggleLeaderboard}
              className="text-textColor hover:text-headingColor cursor-pointer text-base transition-all duration-100 ease-in-out"
            >
              Leaderboard
            </li>
            <li>
              <button>Login</button>
            </li>
          </motion.ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
