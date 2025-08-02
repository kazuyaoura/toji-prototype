'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden">
      {/* fillで背景を絶対配置 */}
      <Image
        src="/images/title_main_with_start.png"
        alt="タイトル画面"
        fill
        className="object-contain pointer-events-none z-0"
        priority
      />

      {/* コンテンツ全体（z-index 10 以上） */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end items-center">
        {/* ボタンの下余白を指定（必要なら調整） */}
        <div className="mb-[7%] w-full flex justify-center">
          <button
            onClick={onStart}
            className="w-[75%] h-12 bg-blue-600 text-white font-bold rounded-lg text-lg shadow"
          >
            ▶ はじめる
          </button>
        </div>
      </div>
    </div>
  );
}
