'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden">
      {/* 背景画像 */}
      <Image
        src="/images/title_main_with_start.png"
        alt="タイトル画面"
        fill
        className="object-contain pointer-events-none z-0"
        priority
      />

      {/* 🔴 Tailwindベースの赤枠付き「はじめる」ボタン */}
      <div className="absolute z-10 top-[30%] left-[52%] w-[73.8%] h-[6.5%] transform -translate-x-1/2 border-2 border-dashed border-red-500 bg-red-200">
        <button
          onClick={() => {
            console.log('✅ STARTボタン押された');
            onStart();
          }}
          className="w-full h-full text-xl font-bold bg-red-500 text-white border-2 border-black rounded-xl"
        >
          ▶ はじめる（DEBUG v4）
        </button>
      </div>
    </div>
  );
}
