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
          alt="本蔵の外観"
          fill
          priority
          style={{
            objectFit: 'cover',
          }}
        />
      </div>

      {/* 下：会話UI */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          flexShrink: 0,
          background: '#1b1b1b',
          color: 'white',
          padding: '14px 16px',
          borderTop: '4px solid white',
        }}
      >
        <div
          style={{
            display: 'inline-block',
            background: '#1d4ed8',
            color: 'white',
            fontWeight: 700,
            fontSize: 14,
            padding: '4px 12px',
            borderRadius: 6,
            border: '2px solid white',
            marginBottom: 8,
          }}
        >
          {character}
        </div>

        <div
          style={{
            background: '#f8f1df',
            color: '#2b1d12',
            border: '4px solid white',
            borderRadius: 12,
            padding: 14,
            fontSize: 15,
            fontWeight: 700,
            lineHeight: 1.6,
            whiteSpace: 'pre-line',
            boxShadow: '0 3px 10px rgba(0,0,0,.25)',
          }}
        >
          {message}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: 10,
          }}
        >
          <button
            onClick={onNext}
            style={{
              background: '#2563eb',
              color: 'white',
              padding: '10px 18px',
              border: '2px solid white',
              borderRadius: 10,
              fontWeight: 700,
              fontSize: 15,
              boxShadow: '0 3px 8px rgba(0,0,0,.25)',
              cursor: 'pointer',
            }}
          >
            ▶ 次へ
          </button>
        </div>
      </div>
    </div>
  );
}
