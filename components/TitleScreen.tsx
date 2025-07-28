'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden">
      {/* 背景画像：縦長比率を維持しつつ全体に表示 */}
      <Image
        src="/images/title_main_with_start.png"
        alt="タイトル画面"
        fill
        className="object-contain"
        style={{
          pointerEvents: 'none',
          zIndex: 0,
        }}
        priority
      />

      {/* STARTの絵と重ねる位置に「▶ はじめる」ボタン */}
      <div
        className="absolute z-10"
        style={{
          top: '84.6%',
          left: '50%',
          width: '73.8%',
          height: '6.5%',
          transform: 'translateX(-50%)',
        }}
      >
        <button
          onClick={() => {
            console.log('✅ STARTボタンが押されました');
            onStart();
          }}
          className="w-full h-full text-xl font-semibold bg-white rounded-xl shadow-md hover:bg-gray-100 active:scale-95 transition-all duration-150"
        >
          ▶ はじめる
        </button>
      </div>
    </div>
  );
}
