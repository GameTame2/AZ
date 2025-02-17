import React from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { useEffect, useRef, useState } from "react";
import '../styles/horizontal.css';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      direction: "horizontal",
    });

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    const container = containerRef.current;
    const slides = container.querySelectorAll(".slide");
    const containerWidth = slides.length * windowWidth;

    gsap.set(container, { width: containerWidth });
    gsap.set(slides, { width: windowWidth });

    const horizontalScroll = gsap.to(container, {
      x: () => -(containerWidth - windowWidth),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => "+=" + containerWidth,
        scrub: true,
        pin: true,
      },
    });

    lenis.on("scroll", ScrollTrigger.update);

    const onAnimationFrame = (time) => {
      lenis.raf(time);
      requestAnimationFrame(onAnimationFrame);
    };

    requestAnimationFrame(onAnimationFrame);

    return () => {
      lenis.destroy();
      horizontalScroll.kill();
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  return (
    <div className="overflow-hidden h-screen w-screen">
      <div ref={containerRef} className="flex h-screen">
        <div className="slide">
          Slide 1
        </div>
        <div className="slide">
          Slide 2
        </div>
        <div className="slide">
          Slide 3
        </div>
        <div className="slide">
          Slide 4
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;