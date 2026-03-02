import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up";
  delay?: number;
}

export const ScrollAnimation = ({ 
  children, 
  className = "", 
  animation = "fade-up",
  delay = 0 
}: ScrollAnimationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const animations = {
    "fade-up": "translate-y-8 opacity-0",
    "fade-in": "opacity-0",
    "slide-left": "-translate-x-8 opacity-0",
    "slide-right": "translate-x-8 opacity-0",
    "scale-up": "scale-95 opacity-0",
  };

  const visibleStates = {
    "fade-up": "translate-y-0 opacity-100",
    "fade-in": "opacity-100",
    "slide-left": "translate-x-0 opacity-100",
    "slide-right": "translate-x-0 opacity-100",
    "scale-up": "scale-100 opacity-100",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${
        isVisible ? visibleStates[animation] : animations[animation]
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const AnimatedSection = ({ 
  children, 
  className = "",
  animation = "fade-up"
}: { 
  children: ReactNode; 
  className?: string;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up";
}) => {
  return (
    <ScrollAnimation animation={animation} className={className}>
      {children}
    </ScrollAnimation>
  );
};
