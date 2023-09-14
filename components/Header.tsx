import React, { MouseEventHandler } from "react";
import { signIn, useSession, signOut } from "next-auth/react";
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

const Header: React.FC<HeaderProps> = ({ toggleLeaderboard, toggleRules }) => {
  const session = useSession();

  const user = useUser();

  console.log(user);

  return (
    <header className="fixed z-50 w-screen  bg-white p-3 px-4 md:bg-transparent md:p-4 md:px-16">
      {/* desktop and tablet */}
      <div className="flex h-full w-full items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md border-2 border-green-300 bg-green-100 p-2"
        >
          <div className="flex h-[45px] w-[270px] items-center justify-center border border-[#B5EAD6] bg-[#E2FFF4]">
            <Image alt="Sporting Lab Logo" src={Logo} width={240} height={35} />
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
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
              <div className="dropdown relative inline-block">
                <button className="inline-flex h-[52px] w-[179px] items-center rounded-[16px] border border-[#282828] bg-[#FFF6EA] px-4 py-2 font-semibold text-[#282828]">
                  <span className="mr-1">{session.data?.user?.name}</span>
                  <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                  </svg>
                </button>
                <ul className="dropdown-menu absolute hidden w-full rounded-[16px] pt-1 text-[#282828] ">
                  <li className="">
                    <a
                      className=" whitespace-no-wrap block bg-[#FFF] px-4 py-2"
                      href="#"
                    >
                      Profile
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="whitespace-no-wrap block bg-[#FFF] px-4 py-2"
                      onClick={() => signOut()}
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </motion.ul>
        </div>

        <div className="flex md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
