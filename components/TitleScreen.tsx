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
        {/* 背景画像：fill はこの relative 親の中で機能する */}
        <Image
          src="/images/title_main_with_start.png"
          alt="タイトル画面"
          fill
          className="object-contain z-0 pointer-events-none"
          priority
        />

        {/* ▶ ボタン：キャラクターの足元あたりに配置 */}
        <button
          onClick={onStart}
          className="absolute z-10"
          style={{
            top: '90%', // 足元付近に調整
            left: '50%',
            width: '73.8%',
            height: '6.5%',
            transform: 'translateX(-50%)',
            backgroundColor: '#007bff',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '0.5rem',
            fontSize: '1rem',
          }}
        >
          ▶ はじめる
        </button>
      </div>
    </div>
  );
}
