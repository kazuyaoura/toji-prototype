"use client";

type Props = {
  onSelect: (name: string) => void;
};

export default function CharacterSelect({ onSelect }: Props) {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#fef6e4",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "90%",
          maxWidth: "400px",
          aspectRatio: "1 / 1",
        }}
      >
        {/* 背景画像 */}
        <img
          src="/images/ui_choices_panel_2options.png"
          alt="キャラ選択パネル"
          style={{ position: "absolute", width: "100%", height: "100%" }}
        />

        {/* テキスト部分 */}
        <div
          style={{
            position: "absolute",
            top: "12%",
            width: "100%",
            textAlign: "center",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          主人公を選んでください
        </div>

        {/* ボタン1：隆介 */}
        <button
          onClick={() => onSelect("隆介")}
          style={{
            position: "absolute",
            top: "42%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "60%",
            padding: "10px 0",
            background: "transparent",
            border: "none",
            fontSize: "1.1rem",
            fontWeight: "bold",
            color: "#004080",
          }}
        >
          隆介
        </button>

        {/* ボタン2：鈴 */}
        <button
          onClick={() => onSelect("鈴")}
          style={{
            position: "absolute",
            top: "66%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "60%",
            padding: "10px 0",
            background: "transparent",
            border: "none",
            fontSize: "1.1rem",
            fontWeight: "bold",
            color: "#004080",
          }}
        >
          鈴
        </button>
      </div>
    </div>
  );
}
