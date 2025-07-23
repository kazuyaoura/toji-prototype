// components/GameContainer.tsx
'use client';

import React, { useState } from 'react';
import TitleScreen from './scenes/TitleScreen';
import NoticeScreen from './scenes/NoticeScreen';
import CharacterSelect from './scenes/CharacterSelect';
import RiceSelect from './scenes/RiceSelect';
import RicePolishingChoice from './scenes/RicePolishingChoice';
import WaterSelect from './scenes/WaterSelect';
import ChapterIntroScene from './scenes/ChapterIntroScene';

export default function GameContainer() {
  const [step, setStep] = useState('title');
  const [playerName, setPlayerName] = useState<'隆介' | '鈴'>('隆介');
  const [selectedRice, setSelectedRice] = useState('');
  const [selectedPolishing, setSelectedPolishing] = useState('');
  const [selectedWater, setSelectedWater] = useState('');

  switch (step) {
    case 'title':
      return <TitleScreen onNext={() => setStep('notice')} />;
    case 'notice':
      return <NoticeScreen onNext={() => setStep('character')} />;
    case 'character':
      return (
        <CharacterSelect
          onSelect={(name) => {
            setPlayerName(name);
            setStep('rice');
          }}
        />
      );
    case 'rice':
      return (
        <RiceSelect
          playerName={playerName}
          onSelect={(rice) => {
            setSelectedRice(rice);
            setStep('polishing');
          }}
        />
      );
    case 'polishing':
      return (
        <RicePolishingChoice
          playerName={playerName}
          selectedRice={selectedRice}
          onSelect={(method) => {
            setSelectedPolishing(method);
            setStep('water');
          }}
        />
      );
    case 'water':
      return (
        <WaterSelect
          playerName={playerName}
          onSelect={(water) => {
            setSelectedWater(water);
            setStep('chapterIntro');
          }}
        />
      );
    case 'chapterIntro':
      return (
        <ChapterIntroScene
          playerName={playerName}
          onNext={() => setStep('chapter1')}
        />
      );
    case 'chapter1':
      return <div>第一章スタート！（未実装）</div>;

    default:
      return <div>不明なステップです</div>;
  }
}
