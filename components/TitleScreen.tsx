'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-white">
      {/* 📦 画像とボタンをまとめる枠（高さ画面の90%） */}
      <div className="relative w-full max-w-[430px] h-[90vh] bg-gray-50">
        {/* 🖼️ 背景画像（画像の中にボタンを配置したい） */}
        <Image
          src="/images/title_main_with_start.png"
          alt="タイトル画面"
          fill
          className="object-contain pointer-events-none"
        />

        {/* 🔴 画像中央あたりに表示される目立つボタン（テスト） */}
        <div className="absolute top-[50%] left-[50%] w-[50%] h-[8%] -translate-x-1/2 -translate-y-1/2 z-10 border-4 border-red-500 bg-red-300">
          <button
            onClick={() => {
              console.log('✅ ボタン押された');
              onStart();
            }}
            className="w-full h-full text-xl font-bold text-white bg-red-600 border-2 border-black rounded-xl"
          >
            ▶ はじめる（テスト）
          </button>
        </div>
      </div>
    </div>
  );
}
