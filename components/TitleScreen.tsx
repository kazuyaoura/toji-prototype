'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-end bg-white relative overflow-hidden">
      {/* 背景画像：fill は使わず通常のレイアウト */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Image
          src="/images/title_main_with_start.png"
          alt="タイトル画面"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* はじめるボタン */}
      <div className="w-full flex justify-center pb-8">
        <button
          onClick={onStart}
          className="w-[75%] h-12 bg-blue-600 text-white font-bold rounded-lg text-lg shadow"
        >
          ▶ はじめる
        </button>
      </div>
    </div>
  );
}
