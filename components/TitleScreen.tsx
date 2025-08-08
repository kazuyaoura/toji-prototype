'use client';

import Image from 'next/image';

type Props = { onStart: () => void };

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="w-screen h-screen relative overflow-hidden bg-white">
      <Image
        src="/images/title_main_with_start.png"
        alt="タイトル画面"
        fill
        className="object-cover pointer-events-none z-0"
        priority
      />

      {/* 中央基準 → 右へ安全にシフト */}
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '50%',
          // 中央(-50%) から 10vw 右へ。端末幅に応じて安全にずれる
          transform: 'translateX(calc(-50% + 10vw))',
          width: 'min(75vw, 520px)', // はみ出し防止の上限
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
