// components/NoticeScreen.tsx
'use client';

import Image from 'next/image';

type Props = {
  onNext: () => void;
};

export default function NoticeScreen({ onNext }: Props) {
  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      {/* 背景画像（縦型） */}
      <Image
        src="/images/ui_notice_game_disclaimer_mobile.png"
        alt="ご注意"
        fill
        priority
        sizes="100vw"
        className="object-contain pointer-events-none select-none z-0"
      />

      {/* CATボタン（次へ） */}
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
          className="relative w-full"
          style={{
            aspectRatio: '3 / 1', // ボタンの比率
          }}
        >
          {/* ボタン背景画像 */}
          <Image
            src="/images/ui_cat_button.png"
            alt="次へボタン"
            fill
            className="object-contain"
          />
          {/* ボタンテキスト */}
          <span
            className="absolute inset-0 flex items-center justify-center text-white font-bold"
            style={{ fontSize: '1.4rem' }}
          >
            ▶ 次へ
          </span>
        </button>
      </div>
    </div>
  );
}
