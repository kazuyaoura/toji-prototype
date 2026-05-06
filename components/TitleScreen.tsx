```tsx
'use client';

import Image from 'next/image';

type Props = {
  onStart: () => void;
};

export default function TitleScreen({ onStart }: Props) {
  return (
    <div className="w-screen h-screen bg-black flex flex-col overflow-hidden">

      {/* 上：ゴエモン風タイトル画像 */}
      <div className="relative flex-1">
        <Image
          src="/images/title_main_with_start.png"
          alt="今日から杜氏！ タイトル画面"
          fill
          className="object-cover pointer-events-none"
          priority
        />
      </div>

      {/* 下：パワプロ風UI */}
      <div className="bg-[#1b1b1b] border-t-4 border-white px-4 py-4">

        {/* メッセージ */}
        <div className="text-white text-center text-sm mb-3">
          酒造りの一年が、今はじまる…
        </div>

        {/* ボタン */}
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
```
