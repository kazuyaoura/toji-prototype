'use client';

import Image from 'next/image';
import DialogueBox from './DialogueBox';

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
      {/* 上：背景 */}
      <div className="relative flex-1 min-h-0">
        <Image
          src="/images/bg_narration_kichizaemon_intro.png"
          alt="本蔵の外観"
          fill
          priority
          className="object-cover pointer-events-none"
        />
      </div>

      {/* 下：会話UI */}
      <DialogueBox
        speaker={character}
        text={message}
        onNext={onNext}
      />
    </div>
  );
}
