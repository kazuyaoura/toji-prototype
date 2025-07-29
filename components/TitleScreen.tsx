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
        src="/images/title_main_with_start.png" // ← この画像の上に載せる
        alt="タイトル画面"
        fill
        className="object-contain"
        style={{
          zIndex: 0,
          pointerEvents: 'none',
        }}
        priority
      />

      {/* 画像の上に強制表示される本物のボタン */}
      <div
        className="absolute z-50 left-1/2 top-1/2"
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      >
        <button
          onClick={() => {
            console.log('▶ はじめる 押されました！');
            onStart();
          }}
          className="px-8 py-4 text-xl font-bold bg-red-600 text-white rounded-xl shadow-lg"
        >
          ▶ はじめる
        </button>
      </div>
    </div>
  );
}
