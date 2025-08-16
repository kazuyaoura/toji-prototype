'use client';

import Image from 'next/image';
import React from 'react';

type Props = {
  backgroundSrc: string;   // 上段の背景画像
  text: string;            // 下段の表示テキスト（ナレでも台詞でもOK）
  onNext: () => void;
};

export default function CommentLayout({ backgroundSrc, text, onNext }: Props) {
  return (
    // 上2/3 + 下1/3 を固定（分離レイアウト）
    <div className="grid h-screen w-screen grid-rows-[2fr_1fr] bg-black overflow-hidden">
      {/* 上段：背景 */}
      <div className="relative w-full h-full">
        <Image
          src={backgroundSrc}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* 下段：コメント枠（中央寄せ→下端少し余白） */}
      <div className="relative w-full h-full pb-[env(safe-area-inset-bottom)] flex items-end justify-center">
        <div className="relative w-[92vw] max-w-2xl mb-2" style={{ aspectRatio: '10 / 3' }}>
          {/* フレーム */}
          <Image
            src="/images/ui_comment_window_base.png"
            alt="コメントウィンドウ"
            fill
            className="object-contain select-none pointer-events-none z-0"
            priority
            sizes="(max-width: 768px) 92vw, 640px"
          />

          {/* テキスト（必ずフレームの上に重なる） */}
          <p
            className="
              absolute z-10
              left-[8%] right-[8%] top-[20%]
              text-[15px] md:text-base leading-relaxed font-bold
              text-black whitespace-pre-line
            "
          >
            {text}
          </p>

          {/* 次へボタン（枠内右下） */}
          <button
            onClick={onNext}
            className="absolute z-10 right-[6%] bottom-[10%] bg-white text-black font-bold px-4 py-2 rounded-md shadow active:scale-95"
            aria-label="次へ"
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
}
