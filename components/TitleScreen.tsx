'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden">
      {/* 背景画像（穴あき画像を使用している場合） */}
      <Image
        src="/images/title_main_with_start.png" // ← 透明でない画像でもOK
        alt="タイトル画面"
        fill
        className="object-contain"
        style={{
          pointerEvents: 'none',
          zIndex: 0,
        }}
        priority
      />

      {/* 検証用の赤いボタン */}
      <div
        className="absolute z-10"
        style={{
          top: '82.5%',
          left: '50%',
          width: '73.8%',
          height: '6.5%',
          transform: 'translateX(-50%)',
        }}
      >
        <button
          onClick={() => {
            console.log('✅ はじめるボタン押されました！');
            alert('ボタン押せました！');
            onStart();
          }}
          className="w-full h-full bg-red-600 text-white text-xl font-bold rounded-xl shadow-md opacity-80"
        >
          ▶ はじめる
        </button>
      </div>
    </div>
  );
}
