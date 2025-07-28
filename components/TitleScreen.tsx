'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden">
      {/* 背景画像：object-contain & pointer-events無効 */}
      <Image
        src="/images/title_main_with_start.png" // ← 背景画像のファイル名
        alt="タイトル画面"
        fill
        className="object-contain z-0 pointer-events-none" // ← Tailwindで確実に効かせる
        priority
      />

      {/* はめ込み式のボタン */}
      <div
        className="absolute z-10"
        style={{
          top: '82.5%',           // ボタンの位置（微調整OK）
          left: '50%',
          width: '73.8%',
          height: '6.5%',
          transform: 'translateX(-50%)',
        }}
      >
        <button
          onClick={() => {
            console.log('✅ ▶ はじめる 押されました！');
            onStart();
          }}
          className="w-full h-full bg-red-600 text-white text-xl font-bold rounded-xl shadow-md opacity-90 hover:opacity-100 active:scale-95 transition-all duration-150"
        >
          ▶ はじめる
        </button>
      </div>
    </div>
  );
}
