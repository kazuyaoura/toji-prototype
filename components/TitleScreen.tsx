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
        className="object-contain"
        style={{
          pointerEvents: 'none',
          zIndex: 0,
        }}
        priority
      />

      {/* ✅ デバッグ用の目印付きボタン */}
      <div
        className="absolute z-10"
        style={{
          top: '84.6%',
          left: '50%',
          width: '73.8%',
          height: '6.5%',
          transform: 'translateX(-50%)',
          border: '2px dashed red',       // ← ボタン枠の目印（枠線）
          backgroundColor: 'rgba(255,0,0,0.2)', // ← うっすら赤背景
        }}
      >
        <button
          onClick={() => {
            console.log('✅ STARTボタン押された');
            onStart();
          }}
          className="w-full h-full text-xl font-bold bg-red-500 text-white border-2 border-black rounded-xl"
        >
          ▶ はじめる（DEBUG）
        </button>
      </div>
    </div>
  );
}
