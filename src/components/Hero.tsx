import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-[url('/hero-banner.jpg')] bg-cover bg-center text-center font-bold z-10">
      <Navbar />
      <h1
        className="text-3xl md:text-7xl lg:text-8xl text-transparent bg-clip-text mt-60 font-mono"
        style={{
          WebkitTextStroke: "6px black",
          WebkitTextStrokeWidth: window.innerWidth >= 768 ? "6px" : "3px",
        }}
      >
        Shop Your Lifestyle.
      </h1>
    </div>
  );
};

export default Hero;