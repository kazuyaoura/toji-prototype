'use client';

import { useState } from 'react';
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

  switch (step) {
    case 0:
      return <TitleScreen onStart={() => setStep(1)} />;

    case 1:
      return <NoticeScreen onNext={() => setStep(2)} />;

    case 2:
      return (
        <CharacterSelect
          onSelect={(name) => {
            setCharacter(name);
            setStep(3);
          }}
        />
      );

    case 3:
      if (character === '') return null;
      return (
        <IntroNarration
          character={character}
          onNext={() => setStep(4)}
        />
      );

    case 4:
      return <FloorMap onNext={() => setStep(5)} />;

    case 5:
      return (
        <RiceSelection
          onSelect={(rice) => {
            setSelectedRice(rice);
            setStep(6);
          }}
        />
      );

    case 6:
      if (character === '') return null;
      return (
        <RicePolishingChoice
          character={character}
          selectedRice={selectedRice}
          onSelect={(method) => {
            setSelectedPolishing(method);
            setStep(7);
          }}
          isFirstPlay={true} // 初回プレイ中の判定（後に状態管理に置き換えてOK）
        />
      );

    case 7:
      if (character === '') return null;
      return (
        <WaterChoice
          character={character}
          onSelect={(water) => {
            setSelectedWater(water);
            setStep(8);
          }}
        />
      );

    case 8:
      if (character === '') return null;
      return (
        <ChapterIntroScene
          character={character}
          onNext={() => setStep(9)}
        />
      );

    default:
      return <div className="p-8 text-center text-xl">第一章へ続く...</div>;
  }
}
