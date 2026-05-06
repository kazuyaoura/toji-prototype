'use client';

import Image from 'next/image';

type Props = {
  onNext: () => void;
};

export default function NoticeScreen({ onNext }: Props) {
  return (
    <div className="w-screen h-screen bg-black flex flex-col overflow-hidden">

      {/* 上：説明画像 */}
      <div className="relative flex-1 bg-black">
        <Image
          src="/images/ui_notice_game_disclaimer.png"
          alt="ご注意"
          fill
          className="object-contain pointer-events-none"
          priority
        />
      </div>

      {/* 下：パワプロ風UI */}
      <div className="bg-[#1b1b1b] border-t-4 border-white px-4 py-4">

        {/* メッセージ */}
        <div className="text-white text-center text-sm mb-3">
          内容をご確認のうえ、次へ進んでください。
        </div>

        {/* ボタン */}
        <div className="flex justify-center">
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
              active:scale-95
              transition
            "
          >
            ▶ 次へ
          </button>
        </div>

      </div>

    </div>
  );
}
