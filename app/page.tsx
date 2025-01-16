import Hero from "@/components/client/hero";
import Navbar from "@/components/client/navbar";

const Home = () => {
  return (
    <>
      <div className="wrapper w-full h-full bg-white dark:bg-zinc-900 overflow-x-hidden">
        <Navbar />
        <Hero />
      </div>
    </>
  );
};

export default Home;
