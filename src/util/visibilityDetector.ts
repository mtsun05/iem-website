import { useEffect, useState, type RefObject } from "react";

export const useIsVisible = (
  ref: RefObject<Element | null>,
  threshold: number,
  once: boolean = true
) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: threshold,
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (once) {
        if (entry.isIntersecting && !isIntersecting) {
          setIntersecting(true);
        }
      } else {
        setIntersecting(entry.isIntersecting);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
};
