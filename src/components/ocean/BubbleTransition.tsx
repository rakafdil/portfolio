import { useEffect, useState } from "react";

export function BubbleTransition() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleTransition = () => {
      setActive(true);

      window.setTimeout(() => {
        setActive(false);
      }, 1500);
    };

    window.addEventListener(
      "bubble-transition",
      handleTransition,
    );

    return () => {
      window.removeEventListener(
        "bubble-transition",
        handleTransition,
      );
    };
  }, []);

  if (!active) return null;

  return (
    <div className="bubble-transition" aria-hidden>
      {Array.from({ length: 55 }).map((_, i) => (
        <span
          key={i}
          className="fullscreen-bubble"
          style={
            {
              "--bubble-left": `${(i * 37.7) % 100}%`,
              "--bubble-size": `${12 + ((i * 17) % 42)}px`,
              "--bubble-delay": `${(i % 12) * 0.035}s`,
              "--bubble-duration": `${1.15 + (i % 7) * 0.08}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
