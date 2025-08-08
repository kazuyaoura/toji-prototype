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
        className="object-cover pointer-events-none"
        priority
      />

      {/* ▶ はじめるボタン */}
      <div
        style={{
          position: 'absolute',
          bottom: '5%',                 // 下からの位置（必要に応じて微調整）
          left: '50%',                  // 中央起点
          transform: 'translateX(calc(-50% + 3vw))', // ← 中央よりやや左にずらす
          width: 'min(75vw, 520px)',    // スマホ＆PC両対応の幅制限
          zIndex: 10,
        }}
      >
        <button
          onClick={onStart}
          style={{
            width: '100%',
            height: '48px',
            backgroundColor: '#007bff',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1rem',
            borderRadius: '8px',
            boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
          }}
        >
          ▶ はじめる
        </button>
      </div>
    </div>
  );
}
