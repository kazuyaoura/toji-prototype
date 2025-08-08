'use client';

import Image from 'next/image';

type Props = { onStart: () => void };

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="w-screen h-screen relative overflow-hidden bg-white">
      {/* 背景：fill のまま */}
      <Image
        src="/images/title_main_with_start.png"
        alt="タイトル画面"
        fill
        className="object-cover pointer-events-none z-0"
        priority
      />

      {/* コンテンツ層：列レイアウトで「下に押し下げる」 */}
      <div className="absolute inset-0 z-10 flex flex-col">
        <div className="flex-1" /> {/* ← これが押し下げ役のスペーサー */}

        {/* ボタン行：下に余白（safe-area対応） */}
        <div className="w-full flex justify-center pb-[calc(env(safe-area-inset-bottom,0px)+5%)]">
          <button
            onClick={onStart}
            className="h-12 w-[75%] bg-blue-600 text-white font-bold rounded-lg text-lg shadow"
            style={{ transform: 'translateX(22%)' }} // 中央から右に22%
          >
            ▶ はじめる
          </button>
        </div>
      </div>
    </div>
  );
}
