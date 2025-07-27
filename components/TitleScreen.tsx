'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="w-screen h-screen bg-white flex flex-col items-center justify-start pt-6">
      {/* タイトル画像：最大高さを画面の50%に制限 */}
      <div className="w-full max-w-[430px] h-[50vh] relative">
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
      </div>

      {/* ボタンを画像の下に表示 */}
      <div className="mt-8">
        <button
          onClick={() => {
            console.log('✅ スタートボタン押された（画像下）');
            onStart();
          }}
          className="px-7 py-3 text-xl font-semibold bg-white rounded-xl shadow-md hover:bg-gray-100 active:scale-95 transition-all duration-150"
        >
          ▶ はじめる
        </button>
      </div>
    </div>
  );
}
