'use client';

import { useState } from 'react';
import TitleScreen from '@/components/scenes/TitleScreen';
import NoticeScreen from '@/components/scenes/NoticeScreen';
import CharacterSelect from '@/components/scenes/CharacterSelect';
import IntroNarration from '@/components/scenes/IntroNarration';
import FloorMap from '@/components/scenes/FloorMap';
import RiceSelect from '@/components/scenes/RiceSelect';
import RicePolishingChoice from '@/components/scenes/RicePolishingChoice';
import WaterSelect from '@/components/scenes/WaterSelect';
import ChapterIntroScene from '@/components/scenes/ChapterIntroScene';

export default function GameContainer() {
  const [step, setStep] = useState(0);
  const [character, setCharacter] = useState<'隆介' | '鈴' | ''>('');
  const [selectedRice, setSelectedRice] = useState('');
  const [selectedPolishing, setSelectedPolishing] = useState('');
  const [selectedWater, setSelectedWater] = useState('');

  switch (step) {
    // タイトル画面
    case 0:
      return <TitleScreen onStart={() => setStep(1)} />;

    // 注意事項
    case 1:
      return <NoticeScreen onNext={() => setStep(2)} />;

    // キャラクター選択（隆介 / 鈴）
    case 2:
      return (
        <CharacterSelect
          onSelect={(name) => {
            setCharacter(name);
            setStep(3);
          }}
        />
      );

    // ナレーション：蔵入りの決意
    case 3:
      return (
        <IntroNarration
          playerName={character}
          onNext={() => setStep(4)}
        />
      );

    // フロアマップ（本蔵の見取り図）
    case 4:
      return <FloorMap onNext={() => setStep(5)} />;

    // 米選択（山田錦など）
    case 5:
      return (
        <RiceSelect
          onSelect={(rice) => {
            setSelectedRice(rice);
            setStep(6);
          }}
        />
      );

    // 精米方法選択（足踏み・水車など）
    case 6:
      return (
        <RicePolishingChoice
          playerName={character}
          selectedRice={selectedRice}
          onSelect={(method) => {
            setSelectedPolishing(method);
            setStep(7);
          }}
        />
      );

    // 水選択（宮水・井戸水・夙川）
    case 7:
      return (
        <WaterSelect
          playerName={character}
          onSelect={(water) => {
            setSelectedWater(water);
            setStep(8);
          }}
        />
      );

    // 第一章導入（吉左衛門からの激励）
    case 8:
      return (
        <ChapterIntroScene
          playerName={character}
          onNext={() => setStep(9)}
        />
      );

    // 第一章開始の仮メッセージ
    default:
      return <div className="p-8 text-center text-xl">第一章へ続く...</div>;
  }
}
