'use client';
import { useState } from "react";
import TitleScreen from "@/components/TitleScreen";
import Instructions from "@/components/Instructions";
import CharacterSelect from "@/components/CharacterSelect"; // 次に作る
import IntroNarration from "@/components/IntroNarration"; // すでにある

export default function Home() {
  const [step, setStep] = useState(0);

  return (
    <>
      {step === 0 && <TitleScreen onStart={() => setStep(1)} />}
      {step === 1 && <Instructions onNext={() => setStep(2)} />}
      {step === 2 && <CharacterSelect onNext={() => setStep(3)} />}
      {step === 3 && <IntroNarration onNext={() => setStep(4)} />}
    </>
  );
}
