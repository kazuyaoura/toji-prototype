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
    // 画面を上下2段に分割：上=背景(1fr), 下=コメント枠(auto)
    <div className="grid h-screen grid-rows-[1fr_auto] bg-black">
      {/* 上段：背景（全幅・上段いっぱい） */}
      <div className="relative w-full h-full min-h-0">
        <Image
          src="/images/bg_narration_kichizaemon_intro.png"
          alt="本蔵"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* 下段：コメントウィンドウ */}
      <div className="relative w-full pb-[env(safe-area-inset-bottom)]">
        <div className="relative mx-auto w-[92vw] max-w-2xl">
          {/* コメントフレーム画像 */}
          <Image
            src="/images/ui_comment_window_base.png"
            alt="コメントウィンドウ"
            width={1200}
            height={360}
            className="w-full h-auto select-none pointer-events-none"
            priority
            sizes="(max-width: 768px) 92vw, 640px"
          />

          {/* テキスト */}
          <p
            className="
              absolute left-[7%] right-[7%] top-[18%]
              text-[15px] md:text-base leading-relaxed font-bold
              text-black whitespace-pre-line
            "
          >
            {message}
          </p>

          {/* 次へボタン */}
          <button
            onClick={onNext}
            className="
              absolute right-[6%] bottom-[10%]
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
