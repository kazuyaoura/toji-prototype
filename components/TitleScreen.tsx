'use client';

import Image from 'next/image';

type Props = { onStart: () => void };

export default function TitleScreen({ onStart }: Props) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: 'white',
      }}
    >
      {/* 背景画像 */}
      <Image
        src="/images/title_main_with_start.png"
        alt="タイトル画面"
        fill
        style={{
          objectFit: 'cover',
          pointerEvents: 'none',
          zIndex: 0,
        }}
        priority
      />

      {/* ボタン配置 */}
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '50%',
          transform: 'translateX(22%)',
          zIndex: 10,
          width: '75%',
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
