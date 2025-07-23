'use client';

import React, { useState, useContext } from 'react';
import Image from 'next/image';
import { MoneyContext } from '@/contexts/MoneyContext';

import '@/styles/globals.css'; // ここでカスタムCSSを読み込む（必要であれば）

type Props = {
  onSelect: (choice: string) => void;
};

const riceOptions = [
  {
    name: '播磨産 山田錦',
    cost: 5000,
    description: '値は張るが最高の酒ができるぞ。評判重視ならこれやな。',
  },
  {
    name: '西宮の米',
    cost: 3000,
    description: '地元産でコスパ良し！バランスの取れた選択や。',
  },
  {
    name: '飯米',
    cost: 1000,
    description: '安さが魅力やけど、クセが出るかもな…。腕の見せどころや。',
  },
];

export default function RiceSelection({ onSelect }: Props) {
  const [messageIndex, setMessageIndex] = useState(0);
  const { money, spend } = useContext(MoneyContext);

  const messages = [
    'ようこそ米蔵へ！',
    'ここでは酒造りに使うお米を選んでもらうぞ。',
    '味の違いは売れ行きや評判にも関わるから、悩みどころだな…。',
    'さて、どのお米にする？',
  ];

  const handleClick = () => {
    if (messageIndex < messages.length - 1) {
      setMessageIndex(messageIndex + 1);
    }
  };

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
    <div className="relative w-full h-screen overflow-hidden font-sans">
      {/* 背景画像 */}
      <Image
        src="/bg_rice_storage_room.png"
        alt="米蔵"
        layout="fill"
        objectFit="cover"
        priority
      />

      {/* キャラクター */}
      <div className="absolute bottom-0 left-0 w-1/3 max-w-[240px]">
        <Image
          src="/character_rice_saburo_transparent.png"
          alt="三郎"
          width={300}
          height={300}
        />
      </div>

      {/* コメントボックス */}
      {!isChoiceStep && (
        <div className="absolute bottom-0 w-full px-4 pb-4" onClick={handleClick}>
          <div className="relative mx-auto max-w-2xl">
            <Image
              src="/ui_comment_window_base.png"
              alt="コメントボックス"
              width={768}
              height={200}
            />
            <p className="absolute top-6 left-6 right-6 text-lg whitespace-pre-line leading-relaxed font-bold text-black drop-shadow-sm">
              {messages[messageIndex]}
            </p>
          </div>
        </div>
      )}

      {/* 三択ボタン */}
      {isChoiceStep && (
        <div className="absolute bottom-0 w-full px-4 pb-4">
          <div className="relative mx-auto max-w-2xl text-center space-y-4">
            <Image
              src="/ui_choices_panel_3options.png"
              alt="選択肢パネル"
              width={768}
              height={300}
            />
            <div className="absolute top-6 left-0 right-0 space-y-2 px-6">
              <p className="text-lg font-bold mb-2 text-black drop-shadow-sm">
                お米を選んでください（所持金：{money.toLocaleString()}円）
              </p>
              {riceOptions.map((option) => (
                <button
                  key={option.name}
                  onClick={() => handleSelect(option.name, option.cost)}
                  className="w-full bg-blue-400 text-white py-2 rounded-lg shadow"
                >
                  {option.name}（{option.cost.toLocaleString()}円） - {option.description}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
