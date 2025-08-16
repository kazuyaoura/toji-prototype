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
      {/* === 背景レイヤー（最背面） === */}
      <div className="absolute inset-0 z-[0]">
        <Image
          src="/images/bg_narration_kichizaemon_intro.png"
          alt="本蔵"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* === UIレイヤー（背景より前） === */}
      <div className="absolute inset-0 z-[10] flex flex-col">
        {/* 上 2/3 は空き（背景を見せるため）。必要なら比率は調整可 */}
        <div className="grow-[2]" />

        {/* 下 1/3：コメントエリア */}
        <div className="grow-[1] pb-[env(safe-area-inset-bottom)] flex items-end justify-center">
          {/* 枠の入れ物：幅フィット＋最小/最大幅、比率固定（10:3想定） */}
          <div
            className="
              relative
              w-[92vw] max-w-[680px] min-w-[280px] mb-2
            "
            style={{ aspectRatio: '10 / 3' }}
          >
            {/* 枠画像（背面） */}
            <Image
              src="/images/ui_comment_window_base.png"
              alt="コメントウィンドウ"
              fill
              className="object-contain pointer-events-none z-[5]"
              priority
              sizes="(max-width: 768px) 92vw, 680px"
            />

            {/* テキスト（前面へ） */}
            <p
              className="
                absolute left-[8%] right-[8%] top-[20%]
                text-[15px] md:text-base leading-relaxed font-bold
                text-black whitespace-pre-line
                z-[20]
              "
            >
              {message}
            </p>

            {/* 次へボタン（右下） */}
            <button
              onClick={onNext}
              className="
                absolute right-[6%] bottom-[10%]
                bg-white text-black font-bold px-4 py-2 rounded-md shadow
                active:scale-95 z-[20]
              "
              aria-label="次へ"
            >
              ▶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroNarration;
