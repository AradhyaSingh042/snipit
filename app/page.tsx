import Hero from "@/components/client/hero";
import Navbar from "@/components/client/navbar";

const Landing = () => {
  return (
    <>
      <div className="home-page w-full h-full bg-white dark:bg-zinc-900 overflow-x-hidden">
        <Navbar />
        <Hero />
      </div>
    </>
  );
};

export default Landing;
