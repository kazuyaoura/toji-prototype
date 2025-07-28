'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="w-screen h-screen bg-white flex items-center justify-center">
      <div className="relative w-full max-w-[430px] h-[90vh] bg-yellow-100">
        {/* 背景画像 */}
        <Image
          src="/images/title_main_with_start.png"
          alt="タイトル画面"
          fill
          className="object-contain pointer-events-none z-0"
        />

        {/* ✅ テスト用ボタン（赤色・中央） */}
        <div className="absolute top-[50%] left-[50%] w-[50%] h-[8%] -translate-x-1/2 -translate-y-1/2 z-10 border-4 border-red-500 bg-red-300">
          <button
            onClick={() => {
              console.log('✅ テストボタン押された');
              onStart();
            }}
            className="w-full h-full text-xl font-bold bg-red-600 text-white border-2 border-black rounded-xl"
          >
            ▶ テスト
          </button>
        </div>
      </div>
    </div>
  );
}
