'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface ChapterIntroProps {
  character: '隆介' | '鈴';
  onNext: () => void;
}

export default function ChapterIntro({ character, onNext }: ChapterIntroProps) {
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

  const speakerName = step < 2 ? '吉左衛門' : character;

  const handleNext = () => setStep((prev) => prev + 1);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src="/backgrounds/bg_narration_kichizaemon_intro.png"
        alt="背景"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      <div className="absolute bottom-1/4 w-full flex justify-center items-end">
        <Image
          src={characterImage}
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

      {step < dialogues.length - 1 ? (
        <div className="absolute bottom-2 right-4 z-30">
          <Button onClick={handleNext}>▶</Button>
        </div>
      ) : (
        <div className="absolute bottom-8 w-full flex justify-center z-30">
          <Button onClick={onNext}>第一章へ進む</Button>
        </div>
      )}
    </div>
  );
}
