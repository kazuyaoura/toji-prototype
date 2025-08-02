'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="w-screen h-screen bg-white relative overflow-hidden">
      {/* 背景画像 */}
      <Image
        src="/images/title_main_with_start.png"
        alt="タイトル画面"
        fill
        className="object-cover pointer-events-none z-0"
        priority
      />

      {/* ▶ はじめるボタン：中央から右に30%ずらす */}
      <button
        onClick={onStart}
        className="absolute z-50"
        style={{
          bottom: '5%',
          left: '50%',
          transform: 'translateX(30%)',
          width: '75%',
          height: '48px',
          backgroundColor: '#007bff',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '8px',
          fontSize: '1rem',
        }}
      >
        ▶ はじめる
      </button>
    </div>
  );
}
