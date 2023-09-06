import "../styles/globals.css";
import React from "react";

import { AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Index from "./index";
import Footer from "../components/Footer";

const App = () => {
  return (
    <AnimatePresence>
      <div className="flex h-auto w-screen flex-col">
        <Header />
        <main className="mt-24 w-full p-8">
        <Index />
        </main>
        
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default App;
