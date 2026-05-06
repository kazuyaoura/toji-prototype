'use client';

import Image from 'next/image';

type Props = {
  onNext: () => void;
};

export default function FloorMap({ onNext }: Props) {
  const message = `これが本蔵の見取り図や。
工程ごとに場所も人もちゃうから、しっかり覚えておいてな！`;

  return (
    <div
      onClick={onNext}
      className="fixed inset-0 bg-black flex flex-col overflow-hidden cursor-pointer"
    >
      {/* 上：背景 */}
      <div className="relative flex-1 min-h-0">
        <Image
          src="/backgrounds/bg_floor_map.png"
          alt="フロアマップ"
          fill
          priority
          className="object-contain pointer-events-none bg-black"
        />
      </div>

      {/* 下：UI */}
      <div className="bg-[#1b1b1b] border-t-4 border-white px-4 py-4 shrink-0">

        {/* テキスト */}
        <div className="text-white text-center text-sm leading-relaxed whitespace-pre-line mb-3">
          {message}
        </div>

        {/* ガイド */}
        <div className="text-center text-blue-300 text-xs animate-pulse">
          ▼ TAP TO NEXT
        </div>

      </div>
    </div>
  );
}
