'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import DialogueBox from '@/components/DialogueBox';

interface ChapterIntroProps {
  character: '隆介' | '鈴';
  onNext: () => void;
}

export default function ChapterIntroScene({
  character,
  onNext,
}: ChapterIntroProps) {
  const [step, setStep] = useState(0);

  const dialogues = [
    'よし、米も水も決まったな。\nこれで酒造りの準備は整った！',

    'あとはおぬしの腕にかかっておる。\n本蔵の名に恥じぬ酒、楽しみにしておるぞ。',

    character === '隆介'
      ? 'いよいよ始まるんやな……！\n覚悟を決めて、ええ酒造ったるで！'
      : 'いよいよ始まるんやな……！\n心をこめて、ええ酒造ったるで！',
  ];

  const characterImage =
    step < 2
      ? '/characters/character_kichizaemon_transparent.png'
      : character === '隆介'
      ? '/characters/character_main_ryusuke_transparent.png'
      : '/characters/character_main_suzue_transparent.png';

  const speakerName =
    step < 2 ? '吉左衛門' : character;

  const isLastStep = step === dialogues.length - 1;

  const handleNext = () => {
    if (!isLastStep) {
      setStep((prev) => prev + 1);
    } else {
      onNext();
    }
  };

  return (
    <div className="w-screen h-screen bg-black flex flex-col overflow-hidden">

      {/* 上：背景＋キャラ */}
      <div className="relative flex-1">

        {/* 背景 */}
        <Image
          src="/backgrounds/bg_narration_kichizaemon_intro.png"
          alt="背景"
          fill
          className="object-cover pointer-events-none"
          priority
        />

        {/* キャラ */}
        <div className="absolute bottom-0 left-0 w-1/3 max-w-[260px] z-10">
          <Image
            src={characterImage}
            alt={speakerName}
            width={320}
            height={320}
          />
        </div>

      </div>

      {/* 下：DialogueBox */}
      <DialogueBox
        speaker={speakerName}
        text={dialogues[step]}
        onNext={handleNext}
        buttonText={
          isLastStep ? '第一章へ進む' : '次へ'
        }
      />

    </div>
  );
}
