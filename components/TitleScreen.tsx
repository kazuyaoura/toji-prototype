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
        className="object-cover z-0 pointer-events-none"
        priority
      />

      {/* ▶ はじめるボタン：画面右中段に強制表示 */}
      <button
        onClick={onStart}
        className="fixed z-10"
        style={{
          top: '50%',              // 中段
          left: '85%',             // 画面の右寄り（10〜15%余白あり）
          transform: 'translateY(-50%)', // 中央揃え（Y軸のみ）
          width: '120px',
          height: '48px',
          backgroundColor: '#007bff',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '0.5rem',
          fontSize: '1rem',
        }}
      >
        ▶ はじめる
      </button>
    </div>
  );
}
