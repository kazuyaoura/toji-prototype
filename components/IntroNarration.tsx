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
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {/* 背景画像（public/images/bg_narration_kichizaemon_intro.png） */}
      <Image
        src="/images/bg_narration_kichizaemon_intro.png"
        alt="本蔵"
        fill
        className="object-cover pointer-events-none"
        priority
      />

      {/* コメントウィンドウ（public/images/ui_comment_window_base.png） */}
      <div className="absolute bottom-0 w-full flex justify-center items-end z-20 pb-6">
        <div className="relative w-[92%] max-w-2xl">
          <Image
            src="/images/ui_comment_window_base.png"
            alt="コメントウィンドウ"
            width={800}
            height={200}
            priority
          />
          <p className="absolute top-6 left-6 right-6 text-base md:text-lg font-bold leading-relaxed text-black whitespace-pre-line drop-shadow">
            {message}
          </p>
        </div>
      </div>

      {/* 次へボタン */}
      <div className="absolute bottom-4 right-4 z-30">
        <button
          onClick={onNext}
          className="px-4 py-2 rounded-md text-lg font-bold bg-white text-black shadow hover:bg-gray-200 active:scale-95"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default IntroNarration;
