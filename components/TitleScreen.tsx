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

      {/* はじめるボタン */}
      <button
        onClick={onStart}
        className="absolute z-50 px-6 py-3 bg-blue-600 text-white rounded shadow text-base font-semibold"
        style={{
          bottom: '5%',
          left: '50%',
          transform: 'translateX(calc(-50% + 4vw))',
        }}
      >
        ▶ はじめる
      </button>
    </div>
  );
}
