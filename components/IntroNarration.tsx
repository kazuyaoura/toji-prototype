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
    // 上2/3 + 下1/3 を厳密に分割
    <div className="grid h-screen w-screen grid-rows-[2fr_1fr] bg-black">
      {/* 上：背景（2/3固定） */}
      <div className="relative w-full h-full">
        <Image
          src="/images/bg_narration_kichizaemon_intro.png"
          alt="本蔵"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* 下：コメント枠（1/3固定・下端吸着） */}
      <div className="relative w-full h-full pb-[env(safe-area-inset-bottom)] flex items-end justify-center">
        <div className="relative w-[92vw] max-w-2xl mb-2" style={{ aspectRatio: '10 / 3' }}>
          {/* フレーム */}
          <Image
            src="/images/ui_comment_window_base.png"
            alt="コメントウィンドウ"
            fill
            className="object-contain select-none pointer-events-none"
            priority
            sizes="(max-width: 768px) 92vw, 640px"
          />

          {/* テキスト（枠内%指定） */}
          <p className="absolute left-[8%] right-[8%] top-[18%] text-[15px] md:text-base leading-relaxed font-bold text-black whitespace-pre-line">
            {message}
          </p>

          {/* 次へボタン（枠内右下） */}
          <button
            onClick={onNext}
            className="absolute right-[6%] bottom-[10%] bg-white text-black font-bold px-4 py-2 rounded-md shadow active:scale-95"
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
