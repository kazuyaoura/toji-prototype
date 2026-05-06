'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="w-screen h-screen bg-black flex flex-col">

      {/* 上：タイトル画像エリア */}
      <div className="relative flex-1 min-h-0 bg-black">

        <Image
          src="/images/title_main_with_start.png"
          alt="今日から杜氏！ タイトル画面"
          fill
          priority
          className="object-contain"
        />

      </div>

      {/* 下：固定UI */}
      <div
        className="
          w-full
          bg-[#1b1b1b]
          border-t-4
          border-white
          px-4
          py-4
          shrink-0
          relative
          z-50
        "
      >

        {/* メッセージ */}
        <div className="text-white text-center text-sm mb-3">
          酒造りの一年が、今はじまる…
        </div>

        {/* ボタン */}
        <div className="flex justify-center">
          <button
            onClick={onStart}
            className="
              w-full
              max-w-sm
              h-14
              rounded-lg
              bg-blue-600
              text-white
              text-xl
              font-bold
              shadow-lg
              border-2
              border-white
              active:scale-95
              transition
              relative
              z-50
            "
          >
            ▶ はじめる
          </button>
        </div>

      </div>

    </div>
  );
}
