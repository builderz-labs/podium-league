import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { FcGoogle } from 'react-icons/fc';
import { BsTwitter } from 'react-icons/bs';
import Link from 'next/link';
import { signIn, useSession, signOut } from "next-auth/react";

type Anchor = "top" | "left" | "bottom" | "right";

export default function SwipeableTemporaryDrawer({
    toggleLeaderboard,
    toggleRules
}: {
    toggleLeaderboard: React.MouseEventHandler;
    toggleRules: React.MouseEventHandler;
}
) {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false
    });
    const session = useSession();

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === "keydown" &&
                    ((event as React.KeyboardEvent).key === "Tab" ||
                        (event as React.KeyboardEvent).key === "Shift")
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box
            sx={{
                width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
                paddingLeft: "1rem",
                paddingRight: "1rem",
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className="">
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: "none", sm: "block" } }}
                    className="my-5 pl-5 text-start"
                >
                    Builderz
                </Typography>
            </div>
            <Divider />
            <List>
                <ListItem onClick={toggleRules} className="text-textColor hover:text-headingColor cursor-pointer text-base transition-all duration-100 ease-in-out">
                    <ListItemText primary="Rules" />
                </ListItem>
                <ListItem onClick={toggleLeaderboard} className="text-textColor hover:text-headingColor cursor-pointer text-base transition-all duration-100 ease-in-out">
                    <ListItemText primary="Leaderboard" />
                </ListItem>
                {session.status !== "authenticated" ? (
                    <div className='flex flex-col gap-2'>
                        <ListItem onClick={() => signIn("google")} className="z-10 flex cursor-pointer items-center justify-center rounded-2xl border border-gray-300 bg-white bg-opacity-60 p-2  transition-all duration-300  ease-in-out hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:bg-opacity-100 hover:shadow-[#FFF6EA] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                            <ListItemIcon><FcGoogle fontSize={30} /></ListItemIcon>
                            <ListItemText primary="Login" />
                        </ListItem>
                        <ListItem onClick={() => signIn("twitter")} className="z-10 flex cursor-pointer items-center justify-center rounded-2xl border border-gray-300 bg-white bg-opacity-60 p-2  transition-all duration-300  ease-in-out hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:bg-opacity-100 hover:shadow-[4px_4px_0px_orange] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                            <ListItemIcon><BsTwitter fontSize={30} /></ListItemIcon>
                            <ListItemText primary="Login" />
                        </ListItem>
                    </div>
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

                        <ul className="dropdown-menu absolute hidden w-full  pt-1 text-[#282828] ">
                            <li className="whitespace-no-wrap block bg-[#FFF] px-4 py-2">
                                <Link className=" " href="/profile">
                                    Profile
                                </Link>
                            </li>
                            <li className=" whitespace-no-wrap block bg-[#FFF] px-4 py-2">
                                <div className="cursor-pointer" onClick={() => signOut()}>
                                    Logout
                                </div>
                            </li>
                        </ul>
                    </div>
                )}
            </List>
            <Divider />
        </Box>
    );
    return (
        <div>
            {(["left"] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    {" "}
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer(anchor, true)}
                        className="inline lg:hidden"
                    >
                        <MenuIcon />
                    </IconButton>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                        <div className="mx-2 mt-auto flex flex-col items-end justify-center  gap-0.5 px-2">
                            <div
                                className={`mx-auto grid max-w-md grid-cols-2 items-start gap-1 self-start  py-4 text-start sm:pl-6 lg:pl-0 `}
                            >
                                <div className="mt-auto rounded-lg border  border-[#1E2232] px-3 py-2 text-black dark:border-[#bcbdc1] dark:text-gray-400">
                                    <a
                                        href="https://github.com/builderz-labs/builderz-solana-dapp-scaffold"
                                        className="flex items-center justify-center  gap-2 text-xs"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="fill-current"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z"></path>
                                        </svg>
                                        Github
                                    </a>
                                </div>

                                <div className="mt-auto rounded-lg border  border-[#1E2232] px-3 py-2 text-black dark:border-[#bcbdc1] dark:text-gray-400">
                                    <a
                                        href="https://twitter.com/builderz__"
                                        className="flex items-center justify-center gap-2 text-xs"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            className="fill-current"
                                        >
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                        </svg>
                                        Twitter
                                    </a>
                                </div>
                                <div className=" mt-auto rounded-lg border  border-[#1E2232] px-3 py-2 text-black dark:border-[#bcbdc1] dark:text-gray-400">
                                    <a
                                        href="https://discord.gg/QFZAkbVmjE"
                                        className="flex items-center justify-center  gap-2 text-xs"
                                    >
                                        <svg
                                            xmlns="https://discord.gg/TAhQRHP6dU"
                                            width="20"
                                            height="20"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
                                        </svg>
                                        Discord
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}
