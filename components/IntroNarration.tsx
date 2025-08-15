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
    <div className="w-screen min-h-screen bg-black flex flex-col">
      {/* 上：背景（明示高さ） */}
      <div className="relative w-full h-[64vh] min-h-[320px]">
        <Image
          src="/images/bg_narration_kichizaemon_intro.png"
          alt="本蔵"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* 下：コメント枠（比率固定） */}
      <div className="relative w-full flex justify-center items-start h-[36vh] pb-[env(safe-area-inset-bottom)]">
        {/* 92vw、最大 2xl。フレームの元画像が 1200x360 ≒ 比率 10:3 */}
        <div
          className="relative w-[92vw] max-w-2xl"
          style={{ aspectRatio: '10 / 3' }}
        >
          {/* フレーム画像：枠に完全フィット */}
          <Image
            src="/images/ui_comment_window_base.png"
            alt="コメントウィンドウ"
            fill
            className="object-contain select-none pointer-events-none"
            priority
            sizes="(max-width: 768px) 92vw, 640px"
          />

          {/* テキスト：枠内に％指定で配置 */}
          <p
            className="
              absolute left-[8%] right-[8%] top-[20%]
              text-[15px] md:text-base leading-relaxed font-bold
              text-black whitespace-pre-line
            "
          >
            {message}
          </p>

          {/* 次へボタン：右下寄せ */}
          <button
            onClick={onNext}
            className="
              absolute right-[6%] bottom-[12%]
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
