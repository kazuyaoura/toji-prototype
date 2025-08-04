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

      {/* ボタン配置：画面下部中央から右に22%ずらす */}
      <button
        onClick={onStart}
        className="absolute z-50 w-[75%] h-12 bg-blue-600 text-white font-bold rounded-lg text-lg"
        style={{
          bottom: '5%',             // 下から5%
          left: '50%',              // 画面中央
          transform: 'translateX(22%)',  // そこから右へ22%
        }}
      >
        ▶ はじめる
      </button>
    </div>
  );
}
