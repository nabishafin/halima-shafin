import React from "react";

const HeroBanner = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/main-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay with gradient for "ondoca" feel */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-semibold mb-6 drop-shadow-lg leading-snug">
          In a world drowning with <span className="font-bold">.Content</span>,
          <br />
          <span className="text-[#686868]">visibility beats ability.</span>
        </h1>
        <p className="text-lg md:text-2xl max-w-xl mb-8 drop-shadow-md">
          Now is the time to get seen.
        </p>
      </div>
    </section>
  );
};

export default HeroBanner;
