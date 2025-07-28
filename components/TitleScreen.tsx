'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden">
      {/* 穴あき背景画像（START部分だけ透過） */}
      <Image
        src="/images/title_with_start_hole.png" // ← 新しい背景画像
        alt="タイトル画面"
        fill
        className="object-contain"
        style={{
          pointerEvents: 'none',
          zIndex: 0,
        }}
        priority
      />

      {/* 背景の穴にピッタリはまる本物のボタン */}
      <div
        className="absolute z-10"
        style={{
          top: '82.5%',         // 微調整可：START絵の位置に応じて上下に ±0.5%
          left: '50%',
          width: '73.8%',
          height: '6.5%',
          transform: 'translateX(-50%)',
        }}
      >
        <button
          onClick={() => {
            console.log('✅ はじめるボタン押下');
            onStart();
          }}
          className="w-full h-full bg-orange-500 text-white text-xl font-bold rounded-xl shadow-md hover:opacity-90 active:scale-95 transition-all duration-150"
        >
          ▶ はじめる
        </button>
      </div>
    </div>
  );
}
