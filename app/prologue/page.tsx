"use client";

import { useState } from "react";
import { CommentBox } from "@/components/CommentBox";

export default function ProloguePage() {
  const [step, setStep] = useState(0);

  const dialogue = [
    {
      character: "吉左衛門",
      text: "よう来てくれたのう、今日からあんたが杜氏じゃ。",
      imageSrc: "/images/kichizaemon.png",
    },
    {
      character: "鈴",
      text: "わたしがしっかり支えますから、安心してください！",
      imageSrc: "/images/suzu.png",
    },
    {
      character: "吉左衛門",
      text: "本蔵の未来はあんたにかかっとるんじゃ。",
      imageSrc: "/images/kichizaemon.png",
    },
  ];

  const handleClick = () => {
    if (step < dialogue.length - 1) {
      setStep(step + 1);
    } else {
      // 次の画面へ遷移など（必要に応じて）
      console.log("プロローグ終了 → 次のステップへ");
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9]" onClick={handleClick}>
      {/* 背景画像などがある場合ここに表示 */}
      <div className="pt-32 text-center text-xl font-bold">プロローグ</div>

      {/* コメントボックス（タップで進行） */}
      <CommentBox
        character={dialogue[step].character}
        text={dialogue[step].text}
        imageSrc={dialogue[step].imageSrc}
      />
    </div>
  );
}
