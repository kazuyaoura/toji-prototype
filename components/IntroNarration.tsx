'use client';

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
    <div className="w-screen h-screen flex flex-col bg-black overflow-hidden">

      {/* 上：背景 */}
      <div className="relative flex-1">
        <img
          src="/images/bg_narration_kichizaemon_intro.png"
          alt="本蔵の外観"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* 下：DialogueBox */}
      <DialogueBox
        speaker={character}
        text={message}
        onNext={onNext}
      />

    </div>
  );
}
