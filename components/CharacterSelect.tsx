'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type Props = {
  onSelect: (name: string) => void;
};

export default function CharacterSelect({ onSelect }: Props) {
  const [step, setStep] = useState(0);
  const isChoiceStep = step === 2;

  const messages = [
    '今日からこの本蔵を任せる杜氏を決めねばならん。',
    '隆介さんか鈴さんか…。どちらも期待の人材じゃ。',
    '君が杜氏を選んでくれ。',
  ];

  const handleClick = () => {
    if (step < messages.length - 1) setStep(step + 1);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 背景（蔵） */}
      <Image
        src="/bg_kura_exterior.png"
        alt="蔵の背景"
        layout="fill"
        objectFit="cover"
        priority
      />

      {/* キャラ（吉左衛門） */}
      <div className="absolute bottom-0 left-0 w-1/3 max-w-[240px] z-10">
        <Image
          src="/character_kichizaemon_transparent.png"
          alt="吉左衛門"
          width={300}
          height={300}
        />
      </div>

      {/* コメントボックス */}
      {!isChoiceStep && (
        <div className="absolute bottom-0 w-full px-4 pb-4 z-20" onClick={handleClick}>
          <div className="relative mx-auto max-w-2xl">
            <Image
              src="/ui_comment_window_base.png"
              alt="コメントボックス"
              width={768}
              height={200}
            />
            <p className="absolute top-6 left-6 right-6 text-lg whitespace-pre-line leading-relaxed font-bold">
              {messages[step]}
            </p>
          </div>
        </div>
      )}

      {/* キャラ選択 */}
      {isChoiceStep && (
        <div className="absolute bottom-0 w-full px-4 pb-4 z-30">
          <div className="relative mx-auto max-w-2xl text-center space-y-4">
            <Image
              src="/ui_choices_panel_3options.png"
              alt="選択肢パネル"
              width={768}
              height={300}
            />
            <div className="absolute top-6 left-0 right-0 space-y-2 px-6">
              <button
                onClick={() => onSelect('隆介')}
                className="w-full bg-blue-500 text-white py-2 rounded-lg shadow font-semibold"
              >
                隆介さんを選ぶ（温厚篤実）
              </button>
              <button
                onClick={() => onSelect('鈴')}
                className="w-full bg-pink-500 text-white py-2 rounded-lg shadow font-semibold"
              >
                鈴さんを選ぶ（芯が強い）
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
