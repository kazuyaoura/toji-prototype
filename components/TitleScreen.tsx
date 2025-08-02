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

      {/* ▶ はじめるボタン：右に40%ずらす */}
      <button
        onClick={onStart}
        className="absolute z-50"
        style={{
          bottom: '5%',                    // 画面下からの位置（効いていれば）
          left: '50%',                     // 基準点を中央に
          transform: 'translateX(20%)',    // ← 中央からさらに右へ20%ずらす
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
