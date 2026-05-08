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
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'black',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
      }}
    >
      {/* 上：背景 */}
      <div
        style={{
          position: 'relative',
          flex: 1,
          minHeight: 0,
          zIndex: 1,
        }}
      >
        <Image
          src="/images/bg_narration_kichizaemon_intro.png"
          alt="背景"
          fill
          priority
          style={{
            objectFit: 'cover',
            zIndex: 1,
          }}
        />
      </div>

      {/* 下：仮UI */}
      <div
        style={{
          position: 'relative',
          zIndex: 9999,
          flexShrink: 0,
          background: 'black',
          color: 'white',
          padding: 16,
          borderTop: '4px solid white',
        }}
      >
        <div style={{ fontWeight: 'bold', marginBottom: 8 }}>
          {character}
        </div>

        <div style={{ whiteSpace: 'pre-line', marginBottom: 12 }}>
          {message}
        </div>

        <button
          onClick={onNext}
          style={{
            background: '#2563eb',
            color: 'white',
            padding: '10px 16px',
            border: '2px solid white',
            borderRadius: 8,
            fontWeight: 'bold',
          }}
        >
          ▶ 次へ
        </button>
      </div>
    </div>
  );
}
