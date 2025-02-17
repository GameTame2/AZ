import React from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { useEffect, useRef, useState } from "react";
import Header from "../components/website/Header";
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
    const slides = container.querySelectorAll(".story-slide");
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

    <div className="story-wrapper">

      <div className="story-upper">
        <h1>Иван</h1>
        <p>fhafhafpapjijpipiajpfj</p>
      </div>
      <div className="overflow-hidden h-screen w-screen">
        <div ref={containerRef} className="story-flex h-screen">
          <div className="story-slide">
            <p>
            Slide 1
            </p>
          </div>
          <div className="story-slide">
          <p>
            Slide 2
            </p>
          </div>
          <div className="story-slide">
          <p>
            Slide 3
            </p>
          </div>
          <div className="story-slide">
            <div className="story-slide-text">
              <p>Slide 4</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default HorizontalScroll;