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
      {/* 背景：全画面 */}
      <Image
        src="/images/bg_narration_kichizaemon_intro.png"
        alt="本蔵"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* 下1/3 固定パネル */}
      <div className="fixed inset-x-0 bottom-0 h-[33.333vh] z-20 flex items-end justify-center pb-[env(safe-area-inset-bottom)]">
        <div className="relative w-[92vw] max-w-2xl mb-2" style={{ aspectRatio: '10 / 3' }}>
          {/* フレーム：必ず最背面に置く */}
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/ui_comment_window_base.png"
              alt="コメントウィンドウ"
              fill
              className="object-contain select-none pointer-events-none"
              priority
              sizes="(max-width: 768px) 92vw, 640px"
            />
          </div>

          {/* テキスト：フレームの上に重ねる */}
          <p
            className="
              absolute z-10
              left-[8%] right-[8%] top-[20%]
              text-[16px] leading-relaxed font-bold
              text-black whitespace-pre-line
            "
          >
            {message}
          </p>

          {/* 次へボタン：右下 */}
          <button
            onClick={onNext}
            className="absolute z-10 right-[6%] bottom-[10%] bg-white text-black font-bold px-4 py-2 rounded-md shadow active:scale-95"
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
