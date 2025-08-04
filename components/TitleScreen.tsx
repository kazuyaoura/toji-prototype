'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="w-screen h-screen relative bg-white overflow-hidden">
      {/* 背景画像を absolute にして独立レイヤーへ */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/title_main_with_start.png"
          alt="タイトル画面"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* ボタンを上位レイヤーにして位置固定 */}
      <div className="absolute bottom-[5%] left-1/2 z-10">
        <button
          onClick={onStart}
          className="w-[75vw] h-12 bg-blue-600 text-white font-bold rounded-lg text-lg"
          style={{ transform: 'translateX(22%)' }}
        >
          ▶ はじめる
        </button>
      </div>
    </div>
  );
}
