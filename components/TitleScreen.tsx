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

      {/* はじめるボタン：反転環境に対応した位置指定 */}
      <button
        onClick={onStart}
        className="fixed z-50"
        style={{
          top: '85%',                      // ← 足元付近に配置
          right: '50%',                    // ← 反転対応で中央基準
          transform: 'translateX(50%)',    // ← 左ではなく右にずらす
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
