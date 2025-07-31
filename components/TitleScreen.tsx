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

      {/* はじめるボタン（反転環境対応） */}
      <button
        onClick={onStart}
        className="fixed z-50"
        style={{
          top: '84%',                     // ✅ 通常の bottom: '4%' に相当（反転環境）
          right: '50%',                   // ✅ 通常の left: '50%' に相当
          transform: 'translateX(50%)',   // ✅ -50% → +50%（反転補正）
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
