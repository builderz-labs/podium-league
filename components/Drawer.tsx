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
import { FcGoogle } from "react-icons/fc";
import { BsTwitter } from "react-icons/bs";
import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";

type Anchor = "top" | "left" | "bottom" | "right";

export default function SwipeableTemporaryDrawer({
  toggleLeaderboard,
  toggleRules,
}: {
  toggleLeaderboard: React.MouseEventHandler;
  toggleRules: React.MouseEventHandler;
}) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
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
        <ListItem
          onClick={toggleRules}
          className="text-textColor hover:text-headingColor cursor-pointer text-base transition-all duration-100 ease-in-out"
        >
          <ListItemText primary="Rules" />
        </ListItem>
        {/* <ListItem
          onClick={toggleLeaderboard}
          className="text-textColor hover:text-headingColor cursor-pointer text-base transition-all duration-100 ease-in-out"
        >
          <ListItemText primary="Leaderboard" />
        </ListItem> */}
        <li className="whitespace-no-wrap mb-10 block bg-[#FFF] px-4 py-2">
          <Link className=" " href="/profile">
            Profile
          </Link>
        </li>
        {session.status !== "authenticated" ? (
          <div className="flex flex-col gap-2">
            <ListItem
              onClick={() => signIn("google")}
              className="z-10 flex cursor-pointer items-center justify-center rounded-2xl border border-gray-300 bg-white bg-opacity-60 p-2  transition-all duration-300  ease-in-out hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:bg-opacity-100 hover:shadow-[#FFF6EA] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
            >
              <ListItemIcon>
                <FcGoogle fontSize={30} />
              </ListItemIcon>
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem
              onClick={() => signIn("twitter")}
              className="z-10 flex cursor-pointer items-center justify-center rounded-2xl border border-gray-300 bg-white bg-opacity-60 p-2  transition-all duration-300  ease-in-out hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:bg-opacity-100 hover:shadow-[4px_4px_0px_orange] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
            >
              <ListItemIcon>
                <BsTwitter fontSize={30} />
              </ListItemIcon>
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
                    href="https://twitter.com/sportinglabs"
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
              </div>
            </div>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
