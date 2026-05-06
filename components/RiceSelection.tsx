'use client';

import React, { useState, useContext } from 'react';
import Image from 'next/image';
import DialogueBox from './DialogueBox';
import { MoneyContext } from '@/contexts/MoneyContext';

type Props = {
  onSelect: (choice: string) => void;
};

const riceOptions = [
  {
    name: '播磨産 山田錦',
    cost: 5000,
    description: '値は張るが最高の酒ができるぞ。',
  },
  {
    name: '西宮の米',
    cost: 3000,
    description: '地元産でコスパ良し！',
  },
  {
    name: '飯米',
    cost: 1000,
    description: '安さが魅力や。',
  },
];

export default function RiceSelection({ onSelect }: Props) {
  const [messageIndex, setMessageIndex] = useState(0);
  const { money, spend } = useContext(MoneyContext);

  const messages = [
    'ようこそ米蔵へ！',
    'ここでは酒造りに使うお米を選んでもらうぞ。',
    '味の違いは売れ行きや評判にも関わるから、悩みどころやな…',
    'さて、どのお米にする？',
  ];

  const isChoiceStep = messageIndex === messages.length - 1;

  const handleSelect = (rice: string, cost: number) => {
    if (money >= cost) {
      spend(cost);
      onSelect(rice);
    } else {
      alert('所持金が足りません！');
    }
  };

  return (
    <div className="fixed inset-0 bg-black flex flex-col overflow-hidden">
      {/* 上：背景＋キャラ */}
      <div className="relative flex-1 min-h-0">
        <Image
          src="/bg_rice_storage_room.png"
          alt="米蔵"
          fill
          className="object-cover pointer-events-none"
          priority
        />

        <div className="absolute bottom-0 left-0 z-10">
          <Image
            src="/character_rice_saburo_transparent.png"
            alt="三郎"
            width={260}
            height={260}
            className="object-contain"
          />
        </div>
      </div>

      {/* 下：UI */}
      {!isChoiceStep ? (
        <DialogueBox
          speaker="三郎"
          text={messages[messageIndex]}
          portrait="/character_rice_saburo_transparent.png"
          onNext={() => setMessageIndex(messageIndex + 1)}
        />
      ) : (
        <div className="bg-[#1b1b1b] border-t-4 border-white px-4 py-4 text-white shrink-0">
          <div className="text-center mb-4">
            お米を選んでください
            <br />
            所持金：{money.toLocaleString()}円
          </div>

          <div className="space-y-3">
            {riceOptions.map((option) => (
              <button
                key={option.name}
                onClick={() => handleSelect(option.name, option.cost)}
                className="w-full rounded-xl bg-blue-600 border-2 border-white px-4 py-3 text-left shadow-lg active:scale-95 transition"
              >
                <div className="font-bold text-lg">{option.name}</div>
                <div className="text-sm opacity-90">
                  {option.cost.toLocaleString()}円
                </div>
                <div className="text-sm mt-1">{option.description}</div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
