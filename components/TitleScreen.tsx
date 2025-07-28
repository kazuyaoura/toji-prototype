'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden">
      {/* タイトル背景画像（START部分が透過された画像） */}
      <Image
        src="/images/title_main_with_start.png" // ← 正しいファイル名に修正済み！
        alt="タイトル画面"
        fill
        className="object-contain"
        style={{
          pointerEvents: 'none', // ← クリックをブロックしないために重要
          zIndex: 0,
        }}
        priority
      />

      {/* 背景のSTART部分に重ねるボタン */}
      <div
        className="absolute z-10"
        style={{
          top: '82.5%',             // 必要に応じて微調整
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
