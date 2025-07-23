'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type Props = {
  onSelect: (choice: string) => void;
};

const messages = [
  'ようこそ米蔵へ！',
  'ここでは酒造りに使うお米を選んでもらうぞ。',
  '値は張るが最高の酒ができる“播磨産 山田錦”。\n西宮の米はバランス型でコスパ良し。\n飯米は安いがクセが出るぞ。',
  '味の違いは売れ行きや評判にも関わるから、悩みどころだな…。',
  'さて、どのお米にする？',
];

export default function RiceSelection({ onSelect }: Props) {
  const [messageIndex, setMessageIndex] = useState(0);

  const handleClick = () => {
    if (messageIndex < messages.length - 1) {
      setMessageIndex(messageIndex + 1);
    }
  };

  const isChoiceStep = messageIndex === messages.length - 1;

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      style={{ fontFamily: 'sans-serif' }}
    >
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
        <div
          className="absolute bottom-0 w-full px-4 pb-4"
          onClick={handleClick}
        >
          <div className="relative mx-auto max-w-2xl">
            <Image
              src="/ui_comment_window_base.png"
              alt="コメントボックス"
              width={768}
              height={200}
            />
            <p className="absolute top-6 left-6 right-6 text-lg whitespace-pre-line leading-relaxed">
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
              <p className="text-lg font-bold mb-2">お米を選んでください</p>
              <button
                onClick={() => onSelect('播磨産 山田錦')}
                className="w-full bg-blue-400 text-white py-2 rounded-lg shadow"
              >
                播磨産 山田錦
              </button>
              <button
                onClick={() => onSelect('西宮の米')}
                className="w-full bg-blue-400 text-white py-2 rounded-lg shadow"
              >
                西宮の米
              </button>
              <button
                onClick={() => onSelect('飯米')}
                className="w-full bg-blue-400 text-white py-2 rounded-lg shadow"
              >
                飯米
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
