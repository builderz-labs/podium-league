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

  const toggleLeaderboard = () => {
    setIsLeaderboardOpen(!isLeaderboardOpen);
  };

  const toggleRules = () => {
    setIsRulesOpen(!isRulesOpen);
  };

  const toggleMint = () => {
    setIsMintOpen(!isMintOpen);
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
            <main className="mt-24 w-full p-8">
              <Index
                isLeaderboardOpen={isLeaderboardOpen}
                toggleLeaderboard={toggleLeaderboard}
                isRulesOpen={isRulesOpen}
                toggleRules={toggleRules}
                isMintOpen={isMintOpen}
                toggleMint={toggleMint}
              />
            </main>

            <Footer />
          </div>
        </AnimatePresence>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default App;
