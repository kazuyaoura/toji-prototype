'use client';

import { useState } from 'react';
import MoneyDisplay from '@/components/MoneyDisplay';
import TitleScreen from '@/components/TitleScreen';
import NoticeScreen from '@/components/NoticeScreen';
import CharacterSelect from '@/components/CharacterSelect';
import IntroNarration from '@/components/IntroNarration';
import FloorMap from '@/components/FloorMap';
import RiceSelection from '@/components/RiceSelection';
import RicePolishingChoice from '@/components/RicePolishingChoice';
import WaterChoice from '@/components/WaterChoice';
import ChapterIntroScene from '@/components/scenes/ChapterIntroScene';

export default function GameContainer() {
  const [step, setStep] = useState(0);
  const [character, setCharacter] = useState<'隆介' | '鈴' | ''>('');
  const [selectedRice, setSelectedRice] = useState('');
  const [selectedPolishing, setSelectedPolishing] = useState('');
  const [selectedWater, setSelectedWater] = useState('');

  // ★ 所持金は「マップ以降」で表示（= step >= 4）
  const showMoney = step >= 4;

  return (
    <>
      {showMoney && <MoneyDisplay />}

      {step === 0 && <TitleScreen onStart={() => setStep(1)} />}

      {step === 1 && <NoticeScreen onNext={() => setStep(2)} />}

      {step === 2 && (
        <CharacterSelect
          onSelect={(name) => {
            setCharacter(name);
            setStep(3);
          }}
        />
      )}

      {step === 3 && character !== '' && (
        <IntroNarration character={character} onNext={() => setStep(4)} />
      )}

      {step === 4 && <FloorMap onNext={() => setStep(5)} />}

      {step === 5 && (
        <RiceSelection
          onSelect={(rice) => {
            setSelectedRice(rice);
            setStep(6);
          }}
        />
      )}

      {step === 6 && character !== '' && (
        <RicePolishingChoice
          character={character}
          selectedRice={selectedRice}
          onSelect={(m) => {
            setSelectedPolishing(m);
            setStep(7);
          }}
          isFirstPlay={true}
        />
      )}

      {step === 7 && character !== '' && (
        <WaterChoice
          character={character}
          onSelect={(w) => {
            setSelectedWater(w);
            setStep(8);
          }}
        />
      )}

      {step === 8 && character !== '' && (
        <ChapterIntroScene character={character} onNext={() => setStep(9)} />
      )}

      {step > 8 && <div className="p-8 text-center text-xl">第一章へ続く...</div>}
    </>
  );
}
