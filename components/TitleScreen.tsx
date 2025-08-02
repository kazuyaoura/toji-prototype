'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="w-screen h-screen relative overflow-hidden">
      {/* 背景画像 */}
      <Image
        src="/images/title_main_with_start.png"
        alt="タイトル画面"
        fill
        className="object-cover z-0 pointer-events-none"
        priority
      />

      {/* はじめるボタン：最前面に出すための z-index 強化 */}
      <button
        onClick={onStart}
        className="absolute"
        style={{
          top: '80%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '75%',
          height: '48px',
          backgroundColor: '#007bff',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '8px',
          fontSize: '1rem',
          zIndex: 9999, // ← 最前面に確実に出す
        }}
      >
        ▶ はじめる
      </button>
    </div>
  );
}
