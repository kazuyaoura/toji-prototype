'use client';

import React, { useState, useContext } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MoneyContext } from '@/contexts/MoneyContext';

interface WaterChoiceProps {
  onSelect: (source: string) => void;
  character: '隆介' | '鈴';
}

export default function WaterChoice({ onSelect, character }: WaterChoiceProps) {
  const [step, setStep] = useState(0);
  const { money, spend } = useContext(MoneyContext);

  const dialogues = [
    '西宮の酒造りには、「宮水」みたいな名水が欠かせへん。',
    'でもな、水はどこから取るか、どうやって運ぶかで、味も経費もぜんぶ変わってまうんや。',
    'それを見極めるんが――水屋の役目。うちは澄江、ええ水、えらんでな。',
    'あんたが選べるのは、この三つや：',
    '・石材町の「宮水井戸」\n　└ 西宮自慢の仕込み水や。発酵がしっかり進むで。けど、くみ上げにも蔵までの輸送にも、どっちも費用がかかるんよ。',
    '・この蔵の「酒蔵の井戸」\n　└ 敷地内にあるから使いやすいわ。ただ、海が近い分、塩分が混ざることもあるんよ。それに、くみ上げには人手もかかるしな。',
    '・「夙川の水」\n　└ 簡単に手に入るけど、落ち葉なんかを取り除くのがちょっと手間やな。それに、水を運ぶのもひと仕事やで。',
    'どの水を使うか、ここが腕の見せ所やで。よぉ考えてな！',
  ];

  const handleNext = () => setStep((prev) => prev + 1);

  const handleSelect = (source: string, cost: number) => {
    if (money >= cost) {
      spend(cost);
      onSelect(source);
    } else {
      alert('お金が足りません！');
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden font-sans">
      {/* ✅ 背景画像に pointer-events-none を追加 */}
      <Image
        src="/bg_miyamizu_well.png"
        alt="背景"
        layout="fill"
        objectFit="cover"
        className="z-0 pointer-events-none"
      />

      {/* キャラクター表示 */}
      <div className="absolute bottom-1/4 w-full flex justify-center items-end">
        <Image
          src="/character_water_sumie.png"
          alt="澄江"
          width={220}
          height={220}
          className="z-10"
        />
      </div>

      {/* コメントボックス */}
      <div className="absolute bottom-0 w-full flex justify-center items-end z-20">
        <div className="relative w-[80%] max-w-md">
          <Image
            src="/ui_comment_window_base.png"
            alt="コメント枠"
            width={800}
            height={200}
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center px-6 text-base font-bold leading-relaxed text-black whitespace-pre-line drop-shadow-text">
            {dialogues[step]}
          </div>
        </div>
      </div>

      {/* 次へボタン */}
      {step < dialogues.length - 1 && (
        <div className="absolute bottom-2 right-4 z-30">
          <Button onClick={handleNext}>▶</Button>
        </div>
      )}

      {/* 選択肢表示 */}
      {step === dialogues.length - 1 && (
        <div className="absolute bottom-8 w-full flex flex-col items-center space-y-4 z-30">
          <Image
            src="/ui_choices_panel_3options.png"
            alt="選択肢パネル"
            width={500}
            height={200}
          />
          <div className="absolute flex flex-col space-y-2">
            <Button onClick={() => handleSelect('宮水井戸', 1500)}>
              宮水井戸（¥1500）
            </Button>
            <Button onClick={() => handleSelect('酒蔵の井戸', 800)}>
              酒蔵の井戸（¥800）
            </Button>
            <Button onClick={() => handleSelect('夙川の水', 400)}>
              夙川の水（¥400）
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
