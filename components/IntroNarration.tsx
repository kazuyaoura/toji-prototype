"use client";

type Props = {
  text: string;
  onNext: () => void;
};

export default function IntroNarration({ text, onNext }: Props) {
  return (
    <div
      onClick={onNext}
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 背景画像 */}
      <img
        src="/images/bg_narration_kichizaemon_intro.png"
        alt="ナレーション背景"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
        }}
      />

      {/* コメントウィンドウ */}
      <img
        src="/images/ui_comment_window_base.png"
        alt="コメントボックス"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "25vh",
          objectFit: "cover",
        }}
      />

      {/* テキスト表示 */}
      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          left: "5vw",
          right: "5vw",
          color: "#222",
          fontSize: "1.2rem",
          lineHeight: "1.8",
          fontWeight: "bold",
          textShadow: "1px 1px 2px rgba(255,255,255,0.8)",
        }}
      >
        {text}
      </div>
    </div>
  );
}
