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

      {/* はじめるボタン：反転環境対応、画面下部中央に表示 */}
      <button
        onClick={onStart}
        className="fixed z-50"
        style={{
          top: '5%',                      // ← 小さい値で「画面下部」に表示される反転環境対応
          right: '50%',                   // ← 中央揃え（左右も反転している想定）
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
