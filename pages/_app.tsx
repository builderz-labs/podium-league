import "../styles/globals.css";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Index from "./index";
import Footer from "../components/Footer";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = ({ Component, pageProps, session }: any) => {
  const [isLeaderboardOpen, setIsLeaderboardOpen] = React.useState(false);
  const [isRulesOpen, setIsRulesOpen] = React.useState(false);
  const [isMintOpen, setIsMintOpen] = React.useState(false);
  const [isDisclaimerOpen, setIsDisclaimerOpen] = React.useState(false);
  const [isUnofficialOpen, setIsUnofficialOpen] = React.useState(false);

  const toggleLeaderboard = () => {
    setIsLeaderboardOpen(!isLeaderboardOpen);
  };

  const toggleRules = () => {
    setIsRulesOpen(!isRulesOpen);
  };

  const toggleMint = () => {
    setIsMintOpen(!isRulesOpen);
  };

  const toggleDisclaimer = () => {
    setIsDisclaimerOpen(!isDisclaimerOpen);
  };

  const toggleUnofficial = () => {
    setIsUnofficialOpen(!isUnofficialOpen);
  };

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <AnimatePresence>
          <div className="flex h-auto w-screen flex-col">
            <Header
              toggleLeaderboard={toggleLeaderboard}
              toggleRules={toggleRules}
            />
            <main className="mt-20 w-full p-8">
              <Index
                isLeaderboardOpen={isLeaderboardOpen}
                toggleLeaderboard={toggleLeaderboard}
                isRulesOpen={isRulesOpen}
                toggleRules={toggleRules}
                isMintOpen={isMintOpen}
                toggleMint={toggleMint}
                isDisclaimerOpen={isDisclaimerOpen}
                toggleDisclaimer={toggleDisclaimer}
                isUnofficialOpen={isUnofficialOpen}
                toggleUnofficial={toggleUnofficial}
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
