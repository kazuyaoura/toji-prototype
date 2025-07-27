'use client';

import Image from 'next/image';

type Props = {
  onNext: () => void;
};

export default function NoticeScreen({ onNext }: Props) {
  return (
    <div className="relative w-full h-screen bg-white overflow-hidden">
      {/* 背景画像 */}
      <Image
        src="/images/notice_screen_vertical.png"
        alt="ご注意"
        width={1080}
        height={1920}
        className="absolute top-0 left-0 w-full h-full object-contain pointer-events-none"
        priority
      />

      {/* ▶ 次へボタン（画面下中央） */}
      <div className="absolute bottom-[8%] left-1/2 z-10 transform -translate-x-1/2">
        <button
          onClick={onNext}
          className="px-7 py-3 text-xl font-semibold bg-white rounded-xl shadow-md hover:bg-gray-100 active:scale-95 transition-all duration-150"
        >
          ▶ 次へ
        </button>
      </div>
    </div>
  );
}
