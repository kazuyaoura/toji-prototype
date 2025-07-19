"use client";

import { useState } from "react";
import TitleScreen from "@/components/TitleScreen";
import CommentBox from "@/components/CommentBox";
import DialogueBox from "@/components/DialogueBox";
import IntroNarration from "@/components/IntroNarration";
import KichizaemonIntro from "@/components/KichizaemonIntro";

export default function ProloguePage() {
  const [step, setStep] = useState(0);

  return (
    <main className="p-4">
      {/* ステップ0：タイトル画面 */}
      {step === 0 && <TitleScreen onStart={() => setStep(1)} />}

      {/* ステップ1：ナレーション */}
      {step === 1 && (
        <>
          <IntroNarration text="これは杜氏としての第一歩である……" />
          <button onClick={() => setStep(2)}>▶️ 続ける</button>
        </>
      )}

      {/* ステップ2：キャラセリフ */}
      {step === 2 && (
        <>
          <DialogueBox speaker="鈴" text="ようこそ本蔵へ。これからの案内はわたしが担当しますね。" />
          <button onClick={() => setStep(3)}>▶️ 続ける</button>
        </>
      )}

      {/* ステップ3：吉左衛門の登場 */}
      {step === 3 && <KichizaemonIntro onNext={() => setStep(4)} />}

      {/* ステップ4：コメントボックス */}
      {step === 4 && (
        <CommentBox comment="まずはこの蔵の構造を頭に入れておくのじゃ！" />
      )}
    </main>
  );
}
