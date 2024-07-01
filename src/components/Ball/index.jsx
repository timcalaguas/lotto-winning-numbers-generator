import { useEffect, useState } from "react";

const Ball = ({ number, maxNumber, delay }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = number; // Final number to show
    const duration = delay; // Duration in milliseconds for the animation
    const range = end - start;
    let current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));

    const timer = setInterval(() => {
      current += increment;
      setCurrentNumber(current);
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);

    // Clean up interval on component unmount
    return () => clearInterval(timer);
  }, [number, delay]);

  return (
    <div className="w-28 aspect-square grid place-items-center rounded-full font-bold text-6xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
      {currentNumber}
    </div>
  );
};

export default Ball;
