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
    // 過去画面と同じ：縦積み（上=背景, 下=コメント）
    <div className="flex flex-col h-screen bg-black">
      {/* 上段：背景（常に余白をすべて使う） */}
      <div className="relative flex-1 min-h-0 w-full">
        <Image
          src="/images/bg_narration_kichizaemon_intro.png"
          alt="本蔵"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* 下段：コメントウィンドウ（横幅フィット） */}
      <div className="relative w-full flex justify-center pb-[env(safe-area-inset-bottom)] py-3">
        <div className="relative w-[92vw] max-w-2xl">
          {/* フレームは幅基準でリサイズ（blockでレイアウト安定） */}
          <img
            src="/images/ui_comment_window_base.png"
            alt="コメントウィンドウ"
            className="block w-full h-auto select-none pointer-events-none"
          />

          {/* テキストはフレーム内に絶対配置（%指定で端末差に強く） */}
          <p className="absolute left-[7%] right-[7%] top-[18%] text-[15px] md:text-base leading-relaxed font-bold text-black whitespace-pre-line">
            {message}
          </p>

          {/* 次へボタン（右下） */}
          <button
            onClick={onNext}
            className="absolute right-[6%] bottom-[12%] bg-white text-black font-bold px-4 py-2 rounded-md shadow active:scale-95"
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
