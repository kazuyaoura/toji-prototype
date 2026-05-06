'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="w-screen h-screen bg-black flex flex-col overflow-hidden">

      {/* タイトル画像 */}
      <div className="flex-1 flex items-center justify-center bg-black p-4">
        <Image
          src="/images/title_main_with_start.png"
          alt="今日から杜氏！"
          width={900}
          height={1200}
          priority
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* UI帯 */}
      <div className="bg-[#1b1b1b] border-t-4 border-white px-4 py-4 shrink-0">

        <div className="text-white text-center text-sm mb-3">
          酒造りの一年が、今はじまる…
        </div>

        <div className="flex justify-center">
          <button
            onClick={onStart}
            className="
              w-full
              max-w-sm
              h-14
              rounded-lg
              bg-blue-600
              text-white
              text-xl
              font-bold
              shadow-lg
              border-2
              border-white
              active:scale-95
              transition
            "
          >
            ▶ はじめる
          </button>
        </div>

      </div>

    </div>
  );
}
