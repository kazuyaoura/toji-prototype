'use client';

import Image from 'next/image';
import React from 'react';

type Props = {
  onNext: () => void;
  character: '隆介' | '鈴';
};

const IntroNarration: React.FC<Props> = ({ onNext, character }) => {
  const message =
    character === '隆介'
      ? `いよいよ今日から、杜氏として本蔵に入ることになった。
西宮の老舗酒蔵「本蔵」で、日本一の酒を目指すんや。`
      : `いよいよ今日から、杜氏として本蔵に入ることになった。
西宮の老舗酒蔵「本蔵」で、日本一のお酒を造ってみせる……！`;

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* 背景画像 */}
      <Image
        src="/backgrounds/bg_narration_kichizaemon_intro.png"
        alt="本蔵"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />

      {/* コメントウィンドウ */}
      <div className="absolute bottom-0 w-full flex justify-center items-end z-20">
        <div className="relative w-[90%] max-w-2xl">
          <Image
            src="/ui/ui_comment_window_base.png"
            alt="コメントウィンドウ"
            width={800}
            height={200}
          />
          <p className="absolute top-6 left-6 right-6 text-lg font-bold leading-relaxed text-black whitespace-pre-line drop-shadow">
            {message}
          </p>
        </div>
      </div>

      {/* 次へボタン */}
      <div className="absolute bottom-4 right-4 z-30">
        <button
          onClick={onNext}
          className="bg-white text-black text-lg font-bold px-4 py-2 rounded shadow hover:bg-gray-200"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default IntroNarration;
