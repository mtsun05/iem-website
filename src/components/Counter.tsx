import { useState, useEffect, useRef } from "react";

interface CountUpProps {
  end: number;
  duration?: number;
  label: string;
}

const CountUp = ({ end, duration = 2000, label }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      const easeOutQuad = 1 - Math.pow(1 - percentage, 3);
      setCount(Math.floor(easeOutQuad * end));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return (
    <div ref={countRef} className="flex flex-col items-start">
      <span
        className={`transition-all duration-1000 text-2xl lg:text-4xl flex flex-col items-center`}
      >
        {count}
        {count == end ? "+" : ""}
      </span>
      <span className="text-base font-light text-neutral-300">{label}</span>
    </div>
  );
};

export default CountUp;
