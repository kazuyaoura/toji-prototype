'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white">
      {/* fill で背景画像を画面いっぱいに */}
      <Image
        src="/images/title_main_with_start.png"
        alt="タイトル画面"
        fill
        className="object-cover z-0 pointer-events-none"
        priority
      />

      {/* テスト用：明るい青ボタンを乗せる */}
      <button
        onClick={onStart}
        className="absolute z-10 top-[82.5%] left-1/2 transform -translate-x-1/2 w-[74%] h-[6%] bg-blue-600 text-white rounded-md shadow text-lg font-bold"
      >
        ▶ はじめる
      </button>
    </div>
  );
}
