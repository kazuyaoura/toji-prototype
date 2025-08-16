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
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      {/* 上：背景（2/3固定） */}
      <div className="relative h-[66.666vh] w-full">
        <Image
          src="/images/bg_narration_kichizaemon_intro.png"
          alt="本蔵"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* 下：コメント枠（1/3固定・下端） */}
      <div className="fixed inset-x-0 bottom-0 h-[33.333vh] z-20 flex items-end justify-center pb-[env(safe-area-inset-bottom)]">
        {/* フレームを background-image にすることで、テキストが確実に上に載る */}
        <div
          className="
            relative w-[92vw] max-w-2xl mb-2
            bg-no-repeat bg-contain bg-center
          "
          style={{
            aspectRatio: '10 / 3', // だいたい 1200x360
            backgroundImage: "url('/images/ui_comment_window_base.png')",
          }}
        >
          {/* テキスト（完全に上に重なる） */}
          <p
            className="
              absolute left-[8%] right-[8%] top-[20%]
              text-[16px] leading-relaxed font-bold text-black
              whitespace-pre-line z-10
            "
          >
            {message}
          </p>

          {/* 次へボタン（右下） */}
          <button
            onClick={onNext}
            className="
              absolute right-[6%] bottom-[10%] z-10
              bg-white text-black font-bold px-4 py-2 rounded-md shadow
              active:scale-95
            "
            aria-label="次へ"
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroNarration;
