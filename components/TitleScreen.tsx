'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="w-screen h-screen bg-white flex justify-center items-start pt-4">
      {/* 画像とボタンをまとめる枠（画像の高さは80%くらい） */}
      <div className="relative w-full max-w-[430px] h-[80vh]">
        {/* 背景画像 */}
        <Image
          src="/images/title_main_with_start.png"
          alt="タイトル画面"
          fill
          className="object-contain pointer-events-none"
        />

        {/* ボタン（DEBUG赤枠付き） */}
        <div className="absolute top-[58%] left-[52%] w-[73.8%] h-[6.5%] -translate-x-1/2 border-2 border-dashed border-red-500 bg-red-200 z-10">
          <button
            onClick={onStart}
            className="w-full h-full text-xl font-bold bg-red-500 text-white border-2 border-black rounded-xl"
          >
            ▶ はじめる（DEBUG）
          </button>
        </div>
      </div>
    </div>
  );
}
