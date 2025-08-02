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

      {/* はじめるボタン：topを80%にして下部寄りに表示 */}
      <button
        onClick={onStart}
        className="fixed z-50"
        style={{
          top: '80%',                     // ✅ 画面下寄りに配置
          right: '50%',                   // ← 中央揃え（反転対応）
          transform: 'translateX(50%)',   // ← 右にずらす（反転環境対応）
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
