import { useEffect, useRef } from "react";
import "./ScrollReveal.css";

const ScrollReveal = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();

      const viewportHeight = window.innerHeight;

      const viewportCenter = viewportHeight / 2;

      const top = rect.top;

      const start = viewportHeight * 0.9;

      const end = viewportCenter;

      let progress = (start - top) / (start - end);

      progress = Math.max(0, Math.min(1, progress));

      const opacity = progress;

      const translateX = (1 - progress) * 120;

      ref.current.style.opacity = opacity;

      ref.current.style.transform = `translateX(${translateX}px)`;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} className="scroll-reveal">
      {children}
    </div>
  );
};

export default ScrollReveal;
