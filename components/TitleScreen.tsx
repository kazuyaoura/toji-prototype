'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/images/title_main_with_start.png"
        alt="タイトル画面"
        fill
        className="object-cover pointer-events-none"
        priority
      />
      <button
        onClick={onStart}
        className="absolute bottom-[8%] left-1/2 transform -translate-x-1/2 px-7 py-3 text-xl font-semibold bg-white rounded-xl shadow-md hover:bg-gray-100 active:scale-95 transition-all duration-150"
      >
        ▶ はじめる
      </button>
    </div>
  );
}
