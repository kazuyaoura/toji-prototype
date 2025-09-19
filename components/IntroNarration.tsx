'use client';

import React from 'react';

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

  const frameWidthPct = 92;
  const textWidthPct = 84;

  return (
    <div
      style={{
        width: '100vw',
        height: '100dvh', // 安定
        display: 'grid',
        gridTemplateRows: '2fr 1fr', // 上2/3 : 下1/3
        background: '#000',
        overflow: 'hidden',
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      {/* 上：背景 */}
      <div style={{ position: 'relative' }}>
        <img
          src="/images/bg_narration_kichizaemon_intro.png"
          alt="本蔵の外観"
          decoding="async"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* 下：帯 */}
      <div
        style={{
          position: 'relative',
          background: '#000',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          paddingBottom: `calc(12px + env(safe-area-inset-bottom))`,
        }}
        onClick={onNext} // どこでもタップで次へ（任意）
      >
        {/* コメント枠 */}
        <img
          src="/images/ui_comment_window_base.png"
          alt=""
          aria-hidden
          style={{
            position: 'absolute',
            left: '50%',
            bottom: 8,
            transform: 'translateX(-50%)',
            width: `${frameWidthPct}%`,
            height: 'auto',
            display: 'block',
            userSelect: 'none',
            pointerEvents: 'none',
            zIndex: 5,
          }}
        />

        {/* テキスト */}
        <p
          style={{
            position: 'absolute',
            left: '50%',
            bottom: 28,
            transform: 'translateX(-50%)',
            width: `${textWidthPct}%`,
            margin: 0,
            fontSize: 'clamp(14px, 2.4vw, 18px)',
            lineHeight: 1.6,
            fontWeight: 700,
            color: '#111',
            textShadow: '0 1px 0 rgba(255,255,255,.35)',
            whiteSpace: 'pre-line',
            zIndex: 10,
          }}
        >
          {message}
        </p>

        {/* ▶ボタン（タップ優先） */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="次へ"
          style={{
            position: 'absolute',
            right: '6%',
            bottom: 20,
            zIndex: 12,
            padding: '10px 14px',
            fontSize: 18,
            fontWeight: 800,
            background: '#fff',
            color: '#000',
            border: 'none',
            borderRadius: 12,
            boxShadow: '0 2px 8px rgba(0,0,0,.2)',
          }}
        >
          ▶
        </button>
      </div>
    </div>
  );
}
