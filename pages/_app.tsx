import "../styles/globals.css";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Index from "./index";
import Profile from "./index";
import Footer from "../components/Footer";
import { players } from "../constants";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = ({ Component, pageProps, session }: any) => {
  const [isLeaderboardOpen, setIsLeaderboardOpen] = React.useState(false);
  const [isRulesOpen, setIsRulesOpen] = React.useState(false);
  const [isDisclaimerOpen, setIsDisclaimerOpen] = React.useState(false);
  const [isUnofficialOpen, setIsUnofficialOpen] = React.useState(false);
  const [isMintOpen, setIsMintOpen] = React.useState(false);
  const [isMintedPodiumsOpen, setIsMintedPodiumsOpen] = React.useState(false);

  const toggleMint = () => {
    setIsMintOpen(!isMintOpen);
  };
  const toggleLeaderboard = () => {
    setIsLeaderboardOpen(!isLeaderboardOpen);
  };

  const toggleRules = () => {
    setIsRulesOpen(!isRulesOpen);
  };

  const toggleDisclaimer = () => {
    setIsDisclaimerOpen(!isDisclaimerOpen);
  };

  const toggleUnofficial = () => {
    setIsUnofficialOpen(!isUnofficialOpen);
  };

  const toggleMintedPodiums = () => {
    setIsMintedPodiumsOpen(!isMintedPodiumsOpen);
  };

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <AnimatePresence>
          <div className="flex h-[100%] w-full flex-col items-center justify-between">
            <Header
              toggleLeaderboard={toggleLeaderboard}
              toggleRules={toggleRules}
            />
            <main className="mt-[103px] w-full p-4 px-8">
              <Component
                {...pageProps }
                isLeaderboardOpen={isLeaderboardOpen}
                players={players}
                toggleLeaderboard={toggleLeaderboard}
                isRulesOpen={isRulesOpen} toggleRules={toggleRules}
                isDisclaimerOpen={isDisclaimerOpen}
        toggleDisclaimer={toggleDisclaimer}
        isUnofficialOpen={isUnofficialOpen}
        toggleUnofficial={toggleUnofficial}
        isMintOpen={isMintOpen}
        toggleMint={toggleMint}
        isMintedPodiumsOpen={isMintedPodiumsOpen}
        toggleMintedPodiums={toggleMintedPodiums}
                 // don't forget to pass the pageProps
              />

            </main>
           
            <Footer
              toggleDisclaimer={toggleDisclaimer}
              toggleUnofficial={toggleUnofficial}
            />
          </div>
        </AnimatePresence>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default App;
