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

      {/* はじめるボタン：画面下部中央に固定配置 */}
      <button
        onClick={onStart}
        className="fixed z-50"
        style={{
          bottom: '4%',                    // ✅ 下から4%に配置
          left: '50%',                     // ← 中央揃え
          transform: 'translateX(-50%)',   // ← 左にずらして中央表示
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
