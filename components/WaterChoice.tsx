'use client';

import React, { useState, useContext } from 'react';
import Image from 'next/image';
import DialogueBox from './DialogueBox';
import { MoneyContext } from '@/contexts/MoneyContext';

interface WaterChoiceProps {
  onSelect: (source: string) => void;
  character: '隆介' | '鈴';
}

const waterOptions = [
  {
    source: '宮水井戸',
    cost: 1500,
    description: '西宮自慢の仕込み水。発酵がしっかり進む。',
  },
  {
    source: '酒蔵の井戸',
    cost: 800,
    description: '敷地内で使いやすい。費用もほどほど。',
  },
  {
    source: '夙川の水',
    cost: 400,
    description: '安く手に入るが、運搬や処理に手間がかかる。',
  },
];

export default function WaterChoice({
  onSelect,
  character,
}: WaterChoiceProps) {
  const [step, setStep] = useState(0);
  const { money, spend } = useContext(MoneyContext);

  const dialogues = [
    '西宮の酒造りには、「宮水」みたいな名水が欠かせへん。',
    'でもな、水はどこから取るか、どうやって運ぶかで、味も経費もぜんぶ変わってまうんや。',
    'それを見極めるんが――水屋の役目。うちは澄江、ええ水、えらんでな。',
    'どの水を使うか、ここが腕の見せ所やで。よぉ考えてな！',
  ];

  const isChoiceStep = step === dialogues.length - 1;

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleSelect = (source: string, cost: number) => {
    if (money >= cost) {
      spend(cost);
      onSelect(source);
    } else {
      alert('お金が足りません！');
    }
  };

  return (
    <div className="w-screen h-screen bg-black flex flex-col overflow-hidden">
      {/* 上：背景＋キャラ */}
      <div className="relative flex-1">
        <Image
          src="/bg_miyamizu_well.png"
          alt="宮水井戸"
          fill
          className="object-cover pointer-events-none"
          priority
        />

        <div className="absolute bottom-0 left-0 w-1/3 max-w-[240px] z-10">
          <Image
            src="/character_water_sumie.png"
            alt="澄江"
            width={300}
            height={300}
          />
        </div>
      </div>

      {/* 下：UI */}
      {!isChoiceStep ? (
        <DialogueBox
          speaker="澄江"
          text={dialogues[step]}
          onNext={handleNext}
        />
      ) : (
        <div className="bg-[#1b1b1b] border-t-4 border-white px-4 py-4 text-white">
          <div className="text-center mb-4">
            水を選んでください
            <br />
            所持金：¥{money.toLocaleString()}
          </div>

          <div className="space-y-3">
            {waterOptions.map((option) => (
              <button
                key={option.source}
                onClick={() => handleSelect(option.source, option.cost)}
                className="
                  w-full
                  rounded-xl
                  bg-blue-600
                  border-2
                  border-white
                  px-4
                  py-3
                  text-left
                  shadow-lg
                  active:scale-95
                  transition
                "
              >
                <div className="font-bold text-lg">
                  {option.source}
                </div>

                <div className="text-sm mt-1">
                  ¥{option.cost.toLocaleString()}
                </div>

                <div className="text-sm mt-1 opacity-90">
                  {option.description}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
