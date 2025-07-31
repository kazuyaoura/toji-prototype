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

      {/* はじめるボタン：上下左右をすべて逆方向に振って配置 */}
      <button
        onClick={onStart}
        className="fixed z-50"
        style={{
          top: '4%',                  // ← 本来は bottom: '4%'
          right: '50%',               // ← 本来は left: '50%'
          transform: 'translateX(50%)', // ← 本来は -50%
          width: '75%',
          height: '48px',
          backgroundColor: '#007bff',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '8px',
          fontSize: '1rem',
        }}
      >
        ▶ はじめる（検証用）
      </button>
    </div>
  );
}
