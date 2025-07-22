"use client";

import Image from "next/image";

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      <Image
        src="/images/title_main_with_start.png"
        alt="タイトル画面"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <button
        onClick={onStart}
        style={{
          position: "absolute",
          bottom: "8%",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "12px 28px",
          fontSize: "1.5rem",
          backgroundColor: "#fff",
          borderRadius: "12px",
          border: "none",
          boxShadow: "2px 2px 8px rgba(0,0,0,0.3)",
          cursor: "pointer",
        }}
      >
        ▶ はじめる
      </button>
    </div>
  );
}
