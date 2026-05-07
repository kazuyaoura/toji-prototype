'use client';

import Image from 'next/image';

type Props = {
  onNext: () => void;
  character: '隆介' | '鈴';
};

export default function IntroNarration({
  onNext,
  character,
}: Props) {
  const message =
    character === '隆介'
      ? `いよいよ今日から、杜氏として本蔵に入ることになった。
西宮の老舗酒蔵「本蔵」で、日本一の酒を目指すんや。`
      : `いよいよ今日から、杜氏として本蔵に入ることになった。
西宮の老舗酒蔵「本蔵」で、日本一のお酒を造ってみせる……！`;

  return (
    <div className="fixed inset-0 bg-black flex flex-col overflow-hidden">
      {/* 背景 */}
      <div className="relative flex-1">
        <Image
          src="/images/bg_narration_kichizaemon_intro.png"
          alt="背景"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* 仮UI */}
      <div className="bg-black text-white p-4 border-t-4 border-white">
        <div className="font-bold mb-2">
          {character}
        </div>

        <div className="mb-4 whitespace-pre-line">
          {message}
        </div>

        <button
          onClick={onNext}
          className="bg-blue-600 px-4 py-2 rounded border-2 border-white"
        >
          ▶ 次へ
        </button>
      </div>
    </div>
  );
}
