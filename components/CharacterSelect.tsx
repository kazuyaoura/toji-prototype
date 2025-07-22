"use client";

type Props = {
  onSelect: (name: string) => void;
};

export default function CharacterSelect({ onSelect }: Props) {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#fef6e4",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <h1 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>
        主人公を選んでください
      </h1>
      <div
        style={{
          display: "flex",
          gap: "2rem",
        }}
      >
        <div
          onClick={() => onSelect("隆介")}
          style={{ textAlign: "center", cursor: "pointer" }}
        >
          <img
            src="/images/ryusuke_character.png"
            alt="隆介"
            style={{ width: "140px", height: "auto" }}
          />
          <p style={{ marginTop: "0.5rem", fontSize: "1.2rem" }}>隆介</p>
        </div>
        <div
          onClick={() => onSelect("鈴")}
          style={{ textAlign: "center", cursor: "pointer" }}
        >
          <img
            src="/images/suzu_character.png"
            alt="鈴"
            style={{ width: "140px", height: "auto" }}
          />
          <p style={{ marginTop: "0.5rem", fontSize: "1.2rem" }}>鈴</p>
        </div>
      </div>
    </div>
  );
}
