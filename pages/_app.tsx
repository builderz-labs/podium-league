import "../styles/globals.css";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import { Toaster } from "sonner";
import Footer from "../components/Footer";
import { QueryClient, QueryClientProvider } from "react-query";
import Head from "next/head";

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
        <Head>
          <title>Podium League</title>
          <link rel="icon" href="/images/helmet.png" />
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:site" content="@sportinglabs"></meta>
          <meta name="twitter:title" content="Podium League"></meta>
          <meta
            name="twitter:description"
            content="On-chain Fantasy Leagues powered by Sporting. Making Fantasy Leagues fun again."
          ></meta>
          <meta
            name="twitter:image"
            content="https://podium-league.vercel.app/images/podium-twitter-preview.png?utm_source=recache"
          ></meta>
        </Head>
        <Toaster />
        <AnimatePresence>
          <div className="flex w-full md:h-screen flex-col items-center justify-start md:justify-between">
            <Header
              toggleLeaderboard={toggleLeaderboard}
              toggleRules={toggleRules}
            />
            <main className="h-full w-full">
              <Component
                {...pageProps}
                isLeaderboardOpen={isLeaderboardOpen}
                toggleLeaderboard={toggleLeaderboard}
                isRulesOpen={isRulesOpen}
                toggleRules={toggleRules}
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
