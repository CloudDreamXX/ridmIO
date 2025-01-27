import React, { useEffect, useRef } from "react";

interface VideoProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  controls?: boolean;
  loop?: boolean;
  playsinline?: boolean;
  muted?: boolean;
}

export const Video: React.FC<VideoProps> = ({
  src,
  className,
  autoPlay,
  controls,
  loop,
  playsinline,
  muted,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && autoPlay) {
      videoRef.current
        .play()
        .catch((e) => console.error("Error playing video:", e));
    }
  }, [src, videoRef]);

  return (
    <video
      src={src}
      className={className}
      autoPlay={autoPlay}
      controls={controls}
      loop={loop}
      playsInline={playsinline}
      muted={muted}
      onError={(e) => console.error("Error loading video:", e)}
    >
      Your browser does not support the video tag.
    </video>
  );
};
