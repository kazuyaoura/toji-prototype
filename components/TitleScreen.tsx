'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="w-screen h-screen bg-white relative overflow-hidden">
      {/* 背景画像 */}
      <Image
        src="/images/title_main_with_start.png"
        alt="タイトル画面"
        fill
        className="object-cover pointer-events-none z-0"
        priority
      />

      {/* ボタン用フレックスラッパー */}
      <div className="absolute w-full h-full z-10 flex items-end justify-center pb-[8%]">
        <button
          onClick={onStart}
          className="w-[75%] h-12 bg-blue-600 text-white font-bold rounded-lg text-lg"
          style={{
            transform: 'translateX(22%)', // 中央より22%右へ
          }}
        >
          ▶ はじめる
        </button>
      </div>
    </div>
  );
}
