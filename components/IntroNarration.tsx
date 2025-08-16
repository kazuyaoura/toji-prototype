'use client';

import React from 'react';
import CommentLayout from './CommentLayout';

type Props = {
  onNext: () => void;
  character: '隆介' | '鈴';
};

export default function IntroNarration({ onNext, character }: Props) {
  const message =
    character === '隆介'
      ? `いよいよ今日から、杜氏として本蔵に入ることになった。
西宮の老舗酒蔵「本蔵」で、日本一の酒を目指すんや。`
      : `いよいよ今日から、杜氏として本蔵に入ることになった。
西宮の老舗酒蔵「本蔵」で、日本一のお酒を造ってみせる……！`;

  return (
    <CommentLayout
      backgroundSrc="/images/bg_narration_kichizaemon_intro.png"
      text={message}
      onNext={onNext}
    />
  );
}
