'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="relative w-full h-screen bg-white overflow-hidden flex flex-col items-center justify-start">
      {/* 背景画像：比率保持、画面幅に合わせて縮小 */}
      <Image
        src="/images/title_main_with_start.png"
        alt="タイトル画面"
        width={691}
        height={1536}
        className="w-full h-auto"
        style={{
          pointerEvents: 'none',
          zIndex: 0,
        }}
        priority
      />

      {/* STARTボタンの位置に透明ボタン（画像の高さ比率で調整） */}
      <div
        className="absolute z-10"
        style={{
          top: '84.6%',
          left: '50%',
          width: '73.8%',
          height: '6.5%',
          transform: 'translateX(-50%)',
          pointerEvents: 'auto',
        }}
      >
        <button
          onClick={onStart}
          className="w-full h-full bg-transparent border-none"
          aria-label="はじめる"
        />
      </div>
    </div>
  );
}
