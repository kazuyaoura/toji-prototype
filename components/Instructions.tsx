'use client';

import Image from 'next/image';

type Props = {
  onNext: () => void;
};

export default function Instructions({ onNext }: Props) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 背景画像 */}
      <Image
        src="/backgrounds/bg_instructions.png"
        alt="注意事項背景"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />

      {/* コメントウィンドウ */}
      <div
        className="absolute bottom-0 w-full flex justify-center items-end z-20 cursor-pointer"
        onClick={onNext}
      >
        <div className="relative w-[80%] max-w-md">
          <Image
            src="/ui/ui_comment_window_base.png"
            alt="コメントウィンドウ"
            width={800}
            height={200}
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center px-6 text-base font-bold leading-relaxed text-black whitespace-pre-line text-shadow">
            これは試作版です。\n操作中に不具合が発生する可能性があります。\n\n画面をタップして次に進んでください。
          </div>
        </div>
      </div>
    </div>
  );
}
