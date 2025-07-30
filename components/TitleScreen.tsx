'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="w-screen h-screen bg-white overflow-hidden relative">
      {/* 背景画像 */}
      <Image
        src="/images/title_main_with_start.png"
        alt="タイトル画面"
        fill
        className="object-cover z-0 pointer-events-none"
        priority
      />

      {/* ▶ はじめるボタン：fixedで画面全体に対して配置 */}
      <button
        onClick={onStart}
        className="fixed z-10"
        style={{
          bottom: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '73.8%',
          height: '6.5%',
        }}
      >
        ▶ はじめる
      </button>
    </div>
  );
}
