'use client';

import Image from 'next/image';

type Props = {
  onNext: () => void;
};

export default function FloorMap({ onNext }: Props) {
  const message = `これが本蔵の見取り図や。
工程ごとに場所も人もちゃうから、しっかり覚えておいてな！`;

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* 背景：フロアマップ */}
      <Image
        src="/backgrounds/bg_floor_map.png"
        alt="フロアマップ"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />

      {/* コメントボックス */}
      <div className="absolute bottom-0 w-full flex justify-center items-end z-20">
        <div className="relative w-[90%] max-w-2xl">
          <Image
            src="/ui/ui_comment_window_base.png"
            alt="コメントウィンドウ"
            width={800}
            height={200}
          />
          <p className="absolute top-6 left-6 right-6 text-lg font-bold leading-relaxed text-black whitespace-pre-line drop-shadow">
            {message}
          </p>
        </div>
      </div>

      {/* ▶ボタン */}
      <div className="absolute bottom-4 right-4 z-30">
        <button
          onClick={onNext}
          className="bg-white text-black text-lg font-bold px-4 py-2 rounded shadow hover:bg-gray-200"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
