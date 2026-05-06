'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div
      onClick={onStart}
      className="
        fixed
        inset-0
        bg-black
        flex
        items-center
        justify-center
        overflow-hidden
        cursor-pointer
      "
    >

      {/* タイトル画像 */}
      <Image
        src="/images/title_main_with_start.png"
        alt="今日から杜氏！"
        width={900}
        height={1200}
        priority
        className="
          max-w-full
          max-h-full
          object-contain
          select-none
          pointer-events-none
        "
      />

      {/* TAP TO START */}
      <div
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          text-white
          text-lg
          font-bold
          tracking-widest
          animate-pulse
          drop-shadow-lg
          pointer-events-none
        "
      >
        ▶ TAP TO START
      </div>

    </div>
  );
}
