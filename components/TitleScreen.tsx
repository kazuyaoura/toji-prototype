'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden">
      {/* スマホ縦長背景画像 */}
      <Image
        src="/images/title_main_with_start_vertical.png"
        alt="タイトル画面"
        width={720}
        height={1280}
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{
          pointerEvents: 'none',
          zIndex: 0,
        }}
        priority
      />

      {/* START ボタン（背景画像のSTARTにぴったり合わせる） */}
      <div className="absolute z-10 left-1/2 bottom-[12%] transform -translate-x-1/2">
        <button
          onClick={onStart}
          className="px-7 py-3 text-xl font-semibold bg-white/90 rounded-xl shadow-md hover:bg-gray-100 active:scale-95 transition-all duration-150"
        >
          ▶ はじめる
        </button>
      </div>
    </div>
  );
}
