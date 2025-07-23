'use client';

import React, { useState, useContext } from 'react';
import Image from 'next/image';
import { MoneyContext } from '@/contexts/MoneyContext';

type Props = {
  onSelect: (character: string) => void;
};

export default function CharacterSelect({ onSelect }: Props) {
  const [step, setStep] = useState(0);
  const { setMoney } = useContext(MoneyContext);

  const handleSelect = (character: string) => {
    setMoney(10000); // 初期資金1万円
    onSelect(character);
  };

  const messages = [
    'いよいよ杜氏としての一歩を踏み出す時が来た！',
    'どちらの人物で始めるか、選んでくれ。',
  ];

  const characters = [
    {
      name: '隆介',
      image: '/characters/character_ryusuke_transparent.png',
    },
    {
      name: '鈴',
      image: '/characters/character_suzu_transparent.png',
    },
  ];

  const nextStep = () => {
    if (step < messages.length - 1) {
      setStep(step + 1);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 背景画像 */}
      <Image
        src="/backgrounds/bg_character_select.png"
        alt="背景"
        layout="fill"
        objectFit="cover"
        priority
      />

      {/* コメントウィンドウ */}
      {step < messages.length && (
        <div className="absolute bottom-0 w-full px-4 pb-4" onClick={nextStep}>
          <div className="relative mx-auto max-w-2xl">
            <Image
              src="/ui/ui_comment_window_base.png"
              alt="コメントボックス"
              width={768}
              height={200}
            />
            <p className="absolute top-6 left-6 right-6 text-lg leading-relaxed whitespace-pre-line drop-shadow-text">
              {messages[step]}
            </p>
          </div>
        </div>
      )}

      {/* キャラクター選択 */}
      {step === messages.length && (
        <div className="absolute bottom-0 w-full px-4 pb-8">
          <div className="relative mx-auto max-w-2xl">
            <Image
              src="/ui/ui_choices_panel_2options.png"
              alt="選択肢パネル"
              width={768}
              height={220}
            />
            <div className="absolute top-6 left-0 right-0 flex justify-around items-center px-8">
              {characters.map((char) => (
                <div key={char.name} className="flex flex-col items-center space-y-2">
                  <Image
                    src={char.image}
                    alt={char.name}
                    width={120}
                    height={120}
                  />
                  <button
                    onClick={() => handleSelect(char.name)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    {char.name}で始める
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
