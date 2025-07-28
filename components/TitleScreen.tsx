'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden">
      {/* 背景画像（STARTボタン部分が透明） */}
      <Image
        src="/images/title_main_with_start.png"
        alt="タイトル画面"
        fill
        className="object-cover z-0 pointer-events-none" // ← classNameにまとめてz-0
        priority
      />

      {/* ボタン（STARTの透明部分に重ねる） */}
      <div
        className="absolute z-10"
        style={{
          top: '82.5%',         // 微調整OK
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
