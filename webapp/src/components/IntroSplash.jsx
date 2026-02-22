import { useEffect, useMemo, useState } from "react";

export default function IntroSplash({ onDone }) {
  const [fade, setFade] = useState(false);

  // ВАЖНО: файл будет лежать тут:
  // src/assets/video/intro.mp4
  const videoSrc = useMemo(() => {
    return new URL(`../assets/video/intro.mp4`, import.meta.url).href;
  }, []);

  useEffect(() => {
    // Фоллбек: даже если onEnded не сработает, через 1300мс начнём fade
    const t1 = setTimeout(() => setFade(true), 1300);
    const t2 = setTimeout(() => onDone?.(), 1700); // чуть позже, чтобы fade успел
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onDone]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#000",
        opacity: fade ? 0 : 1,
        transition: "opacity 380ms ease",
      }}
    >
      <video
        src={videoSrc}
        autoPlay
        muted
        playsInline
        // на всякий случай — если видео короткое и заканчивается:
        onEnded={() => setFade(true)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  );
}
