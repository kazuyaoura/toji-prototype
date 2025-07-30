'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden">
      {/* 背景画像を object-cover でしっかり全画面表示 */}
      <Image
        src="/images/title_main_with_start.png"
        alt="タイトル画面"
        fill
        className="object-cover z-0 pointer-events-none"
        priority
      />

      {/* ボタンを absolute ではなく fixed にして画面全体の bottom に固定 */}
      <button
        onClick={onStart}
        className="fixed z-10"
        style={{
          bottom: '5%',                // 👈 画面下5%にしっかり配置
          left: '50%',
          transform: 'translateX(-50%)',
          width: '73.8%',
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
