'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="relative w-screen h-screen bg-white flex flex-col items-center justify-end overflow-hidden">
      {/* 背景画像：absolute + z-0 で奥に配置 */}
      <Image
        src="/images/title_main_with_start.png"
        alt="タイトル画面"
        fill
        className="object-cover pointer-events-none absolute z-0"
        priority
      />

      {/* はじめるボタン：下寄せ（flex）+ 反転環境に対応した左右位置 */}
      <div className="relative z-10 w-full">
        <button
          onClick={onStart}
          className="absolute right-1/2 translate-x-1/2 w-[75%] h-12 bg-blue-600 text-white font-bold rounded-lg text-lg shadow"
        >
          ▶ はじめる
        </button>
      </div>
    </div>
  );
}
