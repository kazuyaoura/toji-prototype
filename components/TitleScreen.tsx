'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="w-screen h-screen bg-white flex flex-col items-center justify-start pt-4">
      {/* 縦長画像を画面の3分の2ぐらいで表示 */}
      <div className="w-full max-w-[430px] h-auto">
        <Image
          src="/images/title_main_with_start.png"
          alt="タイトル画面"
          width={691}
          height={1536}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* はじめるボタン：画像の下に表示 */}
      <div className="mt-6">
        <button
          onClick={onStart}
          className="px-7 py-3 text-xl font-semibold bg-white rounded-xl shadow-md hover:bg-gray-100 active:scale-95 transition-all duration-150"
        >
          ▶ はじめる
        </button>
      </div>
    </div>
  );
}
