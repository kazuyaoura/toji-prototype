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

      {/* ボタンの位置：中央から6vw右にずらす → ほぼ中央 */}
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '50%',
          transform: 'translateX(calc(-50% + 6vw))',
          width: 'min(75vw, 520px)',
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
