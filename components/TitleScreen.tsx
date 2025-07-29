'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden">
      {/* 背景画像（ファイル名そのまま使用） */}
      <Image
        src="/images/title_main_with_start.png"
        alt="タイトル画面"
        fill
        className="object-contain"
        style={{
          zIndex: 0,
          pointerEvents: 'none',
        }}
        priority
      />

      {/* はじめるボタン（視認性重視：赤＋白文字） */}
      <div
        className="absolute z-50 left-1/2"
        style={{
          top: '82.8%',              // ← START文字の位置に合わせる
          width: '74%',              // ← 幅調整済み
          height: '6.5%',            // ← 高さも合わせ済み
          transform: 'translateX(-50%)',
        }}
      >
        <button
          onClick={() => {
            console.log('✅ ▶ はじめる 押されました！');
            onStart();
          }}
          className="w-full h-full text-xl font-bold bg-red-600 text-white rounded-xl shadow-md hover:brightness-110 active:scale-95 transition"
        >
          ▶ はじめる
        </button>
      </div>
    </div>
  );
}
