import React from "react";
import Nav from "./components/Nav";
import TextSlideshow from "./components/TextSlideshow";
import Mainimage from "./components/Mainimage";
import Discover from "./components/Discover";
import { slides } from "./assets/constants";
import { discoverslides } from "./assets/constants";
import { classicslides } from "./assets/constants";
import Trends from "./components/Trends";
import Popular from "./components/Popular";
import Exclusive from "./components/Exclusive";
import Classic from "./components/Classic";
import FlipWords from "./components/Flipwords";
import Footer from "./components/Footer";

const App = () => {
  const words = ["Modern", "Ethenic", "Western", "Classic"];

  return (
    <main className="relative pt-20">
      <Nav />
      <section className="mt-4">
        <TextSlideshow />
      </section>
      <div className="flex justify-center items-center px-4 ml-4 mr-4 mt-6 mb-6">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
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
        <Discover discoverslides={discoverslides} />
      </section>
      <section>
        <Popular slides={slides} />
      </section>
      <section>
        <Exclusive />
      </section>
      <section>
        <Classic classicslides={classicslides} />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default App;
