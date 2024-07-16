import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const SCROLL_THRESHOLD = 50;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onClickBtn = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      className={`fixed bottom-8 right-6 z-50 flex items-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 transition-all duration-300 ease-out hover:text-xl ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClickBtn}
      aria-label="Scroll to top"
      style={{padding:'8px'}}
    >
      <FaArrowUp className="text-white" />
    </button>
  );
};

export default ScrollToTop;
