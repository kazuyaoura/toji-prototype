'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* 親を relative にして fill と button をまとめる */}
      <div className="relative w-full h-full">
        {/* 背景画像：object-cover に変更して画面サイズにフィット */}
        <Image
          src="/images/title_main_with_start.png"
          alt="タイトル画面"
          fill
          className="object-cover z-0 pointer-events-none"
          priority
        />

        {/* ▶ はじめるボタン：画面の最下部付近へしっかり配置 */}
        <button
          onClick={onStart}
          className="absolute z-10"
          style={{
            bottom: '5%', // 👈 キャラの足元より確実に下
            left: '50%',
            transform: 'translateX(-50%)',
            width: '73.8%',
            height: '6.5%',
          }}
        >
          ▶ はじめる
        </button>
      </div>
    </div>
  );
}
