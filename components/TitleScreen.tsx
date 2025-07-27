'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden">
      {/* 背景画像：うまく表示されていた構成 */}
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

      {/* ボタン：スマホ画面のかなり下の方に表示 */}
      <div className="absolute bottom-[3%] left-1/2 z-10 transform -translate-x-1/2">
        <button
          onClick={onStart}
          className="px-7 py-3 text-xl font-semibold bg-white rounded-xl shadow-md hover:bg-gray-100 active:scale-95 transition-all duration-150"
        >
          ▶ はじめる
        </button>
      </div>
    </div>
  );
}
