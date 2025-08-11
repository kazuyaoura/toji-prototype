// components/NoticeScreen.tsx
'use client';

import Image from 'next/image';

type Props = {
  onNext: () => void;
};

export default function NoticeScreen({ onNext }: Props) {
  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      {/* 背景画像 */}
      <Image
        src="/images/ui_notice_game_disclaimer_mobile.png"
        alt="ご注意"
        fill
        priority
        sizes="100vw"
        className="object-contain pointer-events-none select-none z-0"
      />

      {/* ▶ 次へボタン */}
      <div
        className="absolute z-10 left-1/2"
        style={{
          bottom: '5%', // 下から5%
          transform: 'translateX(-50%)',
          width: 'min(60vw, 240px)',
        }}
      >
        <button
          onClick={onNext}
          className="w-full py-3 rounded-lg font-bold text-white shadow"
          style={{
            backgroundColor: '#007bff',
            fontSize: '1.2rem',
          }}
        >
          ▶ 次へ
        </button>
      </div>
    </div>
  );
}
