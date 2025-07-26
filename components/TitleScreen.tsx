'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      {/* next/image を width + height に変更 */}
      <Image
        src="/images/title_main_with_start.png"
        alt="タイトル画面"
        width={1920}
        height={1080}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          pointerEvents: 'none',
          zIndex: 0,
        }}
        priority
      />

      {/* スタートボタン */}
      <button
        onClick={() => {
          console.log('✅ スタートボタン押された（width版）');
          onStart();
        }}
        className="absolute z-10 bottom-[8%] left-1/2 transform -translate-x-1/2 px-7 py-3 text-xl font-semibold bg-white rounded-xl shadow-md hover:bg-gray-100 active:scale-95 transition-all duration-150"
      >
        ▶ はじめる
      </button>
    </div>
  );
}
