import React from "react";

import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";

import  Link  from "next/link";

const Header = () => {
  return (
    <header className="fixed z-50 w-screen bg-white p-3 px-4 md:p-4 md:px-16">
      {/* desktop and tablet */}
      <div className="hidden h-full w-full items-center justify-between md:flex">
        <Link
        href='/'
          className="flex items-center gap-2 rounded-md border-2 border-green-300 bg-green-100 p-2"
        >
          <p className="text-xl font-bold uppercase text-headingColor">
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
            <li className="cursor-pointer text-base text-textColor transition-all duration-100 ease-in-out hover:text-headingColor">
              Rules
            </li>
            <li className="cursor-pointer text-base text-textColor transition-all duration-100 ease-in-out hover:text-headingColor">
              Leaderboard
            </li>
            <li>
              <div
                className="z-10 flex cursor-pointer items-center justify-center rounded-2xl border border-gray-300 
                    bg-white bg-opacity-60 p-2 duration-150 ease-in-out hover:bg-opacity-100 hover:shadow-md"
              >
                <FcGoogle fontSize={30} />
                <p className="mx-4  text-lg">Login</p>
              </div>
            </li>
          </motion.ul>
        </div>
      </div>

      {/* mobile */}
      <div className="flex h-full w-full md:hidden">
        <Link
         href="/"
          className="flex items-center gap-2 rounded-md border-2 border-green-300 bg-green-100 p-2"
        >
          <p className="text-[10px] font-bold uppercase text-headingColor">
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
            <li className="cursor-pointer text-base text-textColor transition-all duration-100 ease-in-out hover:text-headingColor">
              Rules
            </li>
            <li className="cursor-pointer text-base text-textColor transition-all duration-100 ease-in-out hover:text-headingColor">
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
