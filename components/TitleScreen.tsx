'use client';

import Image from 'next/image';

type Props = {
  onNext: () => void;
};

export default function NoticeScreen({ onNext }: Props) {
  return (
    <div
      onClick={onNext}
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

      {/* 注意画像 */}
      <Image
        src="/images/ui_notice_game_disclaimer.png"
        alt="ご注意"
        width={900}
        height={1400}
        priority
        className="
          max-w-full
          max-h-full
          object-contain
          select-none
          pointer-events-none
        "
      />

      {/* TAP TO NEXT */}
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
        ▶ TAP TO NEXT
      </div>

    </div>
  );
}
