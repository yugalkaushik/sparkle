import React from "react";
import Mainimage from "../components/Mainimage";
import Discover from "../components/Discover";
import Trends from "../components/Trends";
import Popular from "../components/Popular";
import Exclusive from "../components/Exclusive";    
import Classic from "../components/Classic";
import FlipWords from "../components/Flipwords";
import Footer from "../components/Footer";

const Home = () => {
  
  const words = ["Modern", "Ethnic", "Western", "Classic"];

  return (
      <main className="relative pt-20">
            <div className="flex justify-center items-center px-4 ml-4 mr-4 mt-6 mb-6">
              <div className="mx-auto font-normal text-neutral-600 dark:text-neutral-400 text-2xl lg:text-4xl">
                Explore
                <FlipWords words={words} />
                Fashion Trends Now.
              </div>
            </div>
            <section>
              <Mainimage />
            </section>
            <section>
              <Trends />
            </section>
            <section>
              <Discover />
            </section>
            <section>
              <Popular />
            </section>
            <section>
              <Exclusive />
            </section>
            <section>
              <Classic />
            </section>
            <section>
              <Footer />
            </section>
      </main>
  );
};

export default Home;
