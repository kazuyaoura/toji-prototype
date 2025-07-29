'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden">
      {/* 背景画像（START絵あり） */}
      <Image
        src="/images/title_main_with_start.png"
        alt="タイトル画面"
        fill
        className="object-contain"
        style={{
          zIndex: 0,
          pointerEvents: 'none', // 背景がクリックを邪魔しないように
        }}
        priority
      />

      {/* 上に重ねる本物のボタン */}
      <div
        className="absolute z-50 left-1/2"
        style={{
          top: '82.8%',              // ← STARTボタン絵の位置（微調整可）
          width: '74%',              // ← ボタン絵の横幅に合わせる
          height: '6.5%',            // ← ボタン絵の高さに合わせる
          transform: 'translateX(-50%)',
        }}
      >
        <button
          onClick={() => {
            console.log('▶ はじめる 押されました！');
            onStart();
          }}
          className="w-full h-full text-xl font-bold bg-transparent text-transparent"
        >
          ▶ はじめる
        </button>
      </div>
    </div>
  );
}
