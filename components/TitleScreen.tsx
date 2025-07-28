'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-white">
      {/* 📦 画像とボタンをまとめる枠 */}
      <div className="relative w-full max-w-[430px] h-[90vh]">
        {/* 🖼️ 背景画像 */}
        <Image
          src="/images/title_main_with_start.png"
          alt="タイトル画面"
          fill
          className="object-contain pointer-events-none"
        />

        {/* ✅ 本番向け「はじめる」ボタン */}
        <div className="absolute top-[58%] left-[50%] w-[60%] h-[7%] -translate-x-1/2 z-10">
          <button
            onClick={() => {
              console.log('✅ はじめるボタン押された');
              onStart();
            }}
            className="w-full h-full text-xl font-semibold bg-white rounded-xl shadow-md hover:bg-gray-100 active:scale-95 transition-all duration-150"
          >
            ▶ はじめる
          </button>
        </div>
      </div>
    </div>
  );
}
