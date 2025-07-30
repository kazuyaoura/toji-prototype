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

      {/* ▶ はじめるボタン：「日か」に重ねて表示 */}
      <button
        onClick={onStart}
        className="absolute z-50"
        style={{
          top: '17%',                      // 上から17%（タイトル部分に重ねる）
          left: '65%',                     // やや右寄り
          transform: 'translateX(-50%)',   // ボタンの中央を位置に揃える
          width: '28%',                    // タイトルに収まる程度の幅
          height: '42px',
          backgroundColor: '#007bff',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '0.5rem',
          fontSize: '0.95rem',
        }}
      >
        ▶ はじめる
      </button>
    </div>
  );
}
