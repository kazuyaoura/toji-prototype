// components/NoticeScreen.tsx
'use client';

import Image from 'next/image';

type Props = { onNext: () => void };

export default function NoticeScreen({ onNext }: Props) {
  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      {/* 背景：縦長の全文字を見せたいので contain、レイアウト理屈は Title と同じ fill */}
      <Image
        src="/images/ui_notice_game_disclaimer.png"
        alt="ご注意"
        fill
        priority
        className="object-contain pointer-events-none"
      />

      {/* ボタン：TitleScreen と同じ座標ロジック＆同じ横補正（-1vw） */}
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '50%',
          transform: 'translateX(calc(-50% - 1vw))',
          width: 'min(75vw, 520px)',
          zIndex: 10,
        }}
      >
        <button
          onClick={onNext}
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
          ▶ 次へ
        </button>
      </div>
    </div>
  );
}
