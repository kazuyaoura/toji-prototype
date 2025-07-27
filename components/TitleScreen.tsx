'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden">
      {/* 背景画像（スマホ縦型用、比率そのまま） */}
      <Image
        src="/images/title_main_with_start_vertical.png" // 必要に応じてパス変更
        alt="タイトル画面"
        width={691}
        height={1536}
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{
          pointerEvents: 'none',
          zIndex: 0,
        }}
        priority
      />

      {/* STARTの位置に完全一致する透明ボタン */}
      <div
        className="absolute z-10"
        style={{
          top: '84.6%',
          left: '50%',
          width: '73.8%',
          height: '6.5%',
          transform: 'translateX(-50%)',
          pointerEvents: 'auto',
        }}
      >
        <button
          onClick={() => {
            console.log('▶ はじめるボタンが押されました');
            onStart();
          }}
          className="w-full h-full bg-transparent border-none"
          aria-label="はじめる"
        />
      </div>
    </div>
  );
}
