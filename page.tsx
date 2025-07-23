'use client';

import { useState } from "react";
import TitleScreen from "@/components/TitleScreen";
import Instructions from "@/components/Instructions";
import CharacterSelect from "@/components/CharacterSelect";
import IntroNarration from "@/components/IntroNarration";
import FloorMap from '@/components/FloorMap';

export default function Home() {
  const [step, setStep] = useState(0);
  const [character, setCharacter] = useState("");

  return (
    <>
      {step === 0 && <TitleScreen onStart={() => setStep(1)} />}
      {step === 1 && <Instructions onNext={() => setStep(2)} />}
      {step === 2 && (
        <CharacterSelect
          onSelect={(name) => {
            setCharacter(name);
            setStep(3);
          }}
        />
      )}
      {step === 3 && (
        <IntroNarration
          text={`ようこそ本蔵へ、${character}さん。これからあなたの酒造りが始まります。`}
          onNext={() => setStep(4)}
        />
      )}
      {step === 4 && <FloorMap onNext={() => setStep(5)} />}
    </>
  );
}
