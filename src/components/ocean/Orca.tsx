import { ChromaKeyVideo } from "chromakey-video-react";
import { useEffect, useRef } from "react";

export function OrcaVideo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const setSpeed = () => {
      const video = container.querySelector("video");
      if (video) {
        video.playbackRate = 0.1;
        video.defaultPlaybackRate = 0.1;
      }
    };

    setSpeed();

    const observer = new MutationObserver(setSpeed);
    observer.observe(container, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="absolute top-30 inset-0">
      <ChromaKeyVideo src="/Orca-slow.mp4" color="#00ff00" className="absolute inset-0" />
    </div>
  );
}
