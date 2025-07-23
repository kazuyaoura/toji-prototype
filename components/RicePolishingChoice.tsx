'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface RicePolishingChoiceProps {
  playerName: '隆介' | '鈴';
  selectedRice: string;
  onSelect: (method: string) => void;
}

export default function RicePolishingChoice({ playerName, selectedRice, onSelect }: RicePolishingChoiceProps) {
  const [step, setStep] = useState(0);

  const playerImage = playerName === '隆介'
    ? '/characters/character_main_ryusuke_transparent.png'
    : '/characters/character_main_suzue_transparent.png';

  const getFirstDialogue = () => {
    if (selectedRice === '播磨産山田錦') {
      return playerName === '隆介'
        ? 'これが播磨の山田錦か……さすがええ粒や。期待が高まるな！'
        : '播磨の山田錦……きれいなお米。これは良いお酒になりそう……！';
    } else if (selectedRice === '西宮産米') {
      return playerName === '隆介'
        ? '地元・西宮の米や。農家さんの想い、ちゃんと形にせなな！'
        : '西宮のお米か……農家さんの気持ち、ちゃんとお酒に込めたいね。';
    } else {
      return playerName === '隆介'
        ? 'ふむ、飯米か……コストは抑えられたな。ここからが腕の見せ所や！'
        : '飯米ね。米代は安く抑えられたし……ここから工夫のしがいがあるわね。';
    }
  };

  const dialogues = [
    getFirstDialogue(),
    'さて、次は精米や！ お米の外側を削ることで、雑味を減らして、キレのある酒になるんやで。',
    '精米の方法もいろいろあるんや。ええか？よう考えて選んでな。',
    'どの方法で精米する？ 選んだら、すぐ精米に取りかかるで！',
  ];

  const handleNext = () => setStep((prev) => prev + 1);

  const renderDialogue = () => {
    let imageSrc = '';
    let speakerName = '';

    if (step === 0) {
      imageSrc = playerImage;
      speakerName = playerName;
    } else {
      imageSrc = '/characters/character_rice_saburo_transparent.png';
      speakerName = '三郎';
    }

    return (
      <div className="relative w-full h-full">
        <Image
          src="/backgrounds/bg_rice_storage_room.png"
          alt="背景"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />

        <div className="absolute bottom-1/4 w-full flex justify-center items-end">
          <Image
            src={imageSrc}
            alt={speakerName}
            width={220}
            height={220}
            className="z-10"
          />
        </div>

        <div className="absolute bottom-0 w-full flex justify-center items-end z-20">
          <div className="relative w-[80%] max-w-md">
            <Image
              src="/ui/ui_comment_window_base.png"
              alt="コメント枠"
              width={800}
              height={200}
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center px-6 text-base font-bold leading-relaxed text-black">
              {dialogues[step]}
            </div>
          </div>
        </div>

        {step < dialogues.length - 1 && (
          <div className="absolute bottom-2 right-4 z-30">
            <Button onClick={handleNext}>▶</Button>
          </div>
        )}

        {step === dialogues.length - 1 && (
          <div className="absolute bottom-8 w-full flex flex-col items-center space-y-4 z-30">
            <Image
              src="/ui/ui_choices_panel_3options.png"
              alt="選択肢パネル"
              width={500}
              height={200}
            />
            <div className="absolute flex flex-col space-y-2">
              <Button onClick={() => onSelect('足踏み')}>足踏み（伝統の人力）</Button>
              <Button onClick={() => onSelect('水車')}>水車（自然の力）</Button>
              <Button onClick={() => onSelect('蒸気機関')}>蒸気機関（近代の力）</Button>
              <Button onClick={() => onSelect('機械精米')}>機械精米（高精度・高コスト）</Button>
            </div>
          </div>
        )}
      </div>
    );
  };

  return <div className="relative w-full h-screen overflow-hidden">{renderDialogue()}</div>;
}
