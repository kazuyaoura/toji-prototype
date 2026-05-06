'use client';

import Image from 'next/image';

type Props = {
  onNext: () => void;
};

export default function NoticeScreen({ onNext }: Props) {
  return (
    <div className="w-screen h-screen bg-black flex flex-col overflow-hidden">

      {/* 上：画像 */}
      <div className="relative flex-1">
        <Image
          src="/images/ui_notice_game_disclaimer.png"
          alt="ご注意"
          fill
          className="object-contain pointer-events-none"
          priority
        />
      </div>

      {/* 下：UI */}
      <div className="h-28 bg-black flex items-center justify-center px-6">
        <button
          onClick={onNext}
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
          "
        >
          ▶ 次へ
        </button>
      </div>

    </div>
  );
}
