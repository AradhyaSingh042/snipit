import Hero from "@/components/client/hero";
import Navbar from "@/components/client/navbar";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="wrapper w-full h-full bg-white overflow-x-hidden">
        <Navbar />
        <Hero />
      </div>
    </>
  );
};

export default Home;
