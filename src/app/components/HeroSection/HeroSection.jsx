"use client"
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  return (
    <section className="md:pt-36 md:py-5 bg-neutral-100 lg:py-10">
      <div className="gap-5">
        <div className="order-1 lg:order-2">
          <video
            style={{ maxWidth: "100%", width: "1200px", margin: "0 auto" }}
            loop
            muted
            controls            
            preload="auto"
            alt="All the devices"
            src="./ProfileVideo.mp4"
            ref={videoEl}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
