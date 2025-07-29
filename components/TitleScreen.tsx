'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden">
      {/* 背景画像（START付き） */}
      <Image
        src="/images/title_main_with_start.png"
        alt="タイトル画面"
        fill
        className="object-contain"
        style={{
          zIndex: 0,
          pointerEvents: 'none', // 背景画像はクリック遮らない
        }}
        priority
      />

      {/* 本物のCTAボタンを画像の前面に重ねる */}
      <div
        className="absolute z-50 left-1/2"
        style={{
          top: '82.5%',               // START絵の位置に合わせて調整
          transform: 'translateX(-50%)',
        }}
      >
        <button
          onClick={() => {
            console.log('▶ はじめる 押されました！');
            onStart();
          }}
          className="px-10 py-4 text-xl font-bold text-white bg-gradient-to-br from-red-700 to-yellow-500 rounded-xl shadow-lg hover:brightness-110 active:scale-95 transition"
        >
          ▶ はじめる
        </button>
      </div>
    </div>
  );
}
