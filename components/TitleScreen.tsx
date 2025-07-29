'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden">
      {/* 背景画像（STARTなしバージョン） */}
      <Image
        src="/images/title_main_no_start.png" // ← STARTなしの背景画像を使う
        alt="タイトル背景"
        fill
        className="object-contain"
        style={{ pointerEvents: 'none', zIndex: 0 }}
        priority
      />

      {/* テスト用「はじめる」ボタン（白黒枠） */}
      <div
        className="absolute z-50 left-1/2"
        style={{
          top: '83%', // 必要に応じて位置調整
          transform: 'translateX(-50%)',
        }}
      >
        <button
          onClick={() => {
            console.log('✅ ▶ はじめる 押されました');
            onStart();
          }}
          className="px-6 py-2 border border-black bg-white text-black rounded"
        >
          ▶ はじめる
        </button>
      </div>
    </div>
  );
}
