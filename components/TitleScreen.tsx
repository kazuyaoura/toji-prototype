'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden">
      {/* 背景画像（next/image, fillではなくwidth+height） */}
      <Image
        src="/images/title_main_with_start.png"
        alt="タイトル画面"
        width={1920}
        height={1080}
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{
          pointerEvents: 'none',
          zIndex: 0,
        }}
        priority
      />

      {/* ボタンを画面の中央下に配置 */}
      <div className="absolute bottom-[8%] left-1/2 z-10 transform -translate-x-1/2">
        <button
          onClick={() => {
            console.log('✅ スタートボタン押された（中央下）');
            onStart();
          }}
          className="px-7 py-3 text-xl font-semibold bg-white rounded-xl shadow-md hover:bg-gray-100 active:scale-95 transition-all duration-150"
        >
          ▶ はじめる
        </button>
      </div>
    </div>
  );
}
