'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden">
      {/* 背景画像（以前の構成に戻す） */}
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

      {/* STARTボタン位置に透明ボタン（画面基準で調整） */}
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
