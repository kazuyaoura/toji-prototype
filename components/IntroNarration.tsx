// components/IntroNarration.tsx
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

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        background: '#000',
      }}
    >
      {/* 背景（上 2/3） */}
      <div
        style={{
          position: 'absolute',
          inset: '0 0 33.333vh 0', // 下1/3分を残して敷く
        }}
      >
        <img
          src="/images/bg_narration_kichizaemon_intro.png"
          alt="本蔵"
          decoding="async"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>

      {/* コメント帯（下 1/3） */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '33.333vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'max(env(safe-area-inset-bottom), 8px) 0 8px', // 下端の安全余白
          background: '#000',
        }}
      >
        {/* ▼ 枠：横幅いっぱい＆帯の高さぎりぎり */}
        <div
          style={{
            position: 'relative',
            width: '100vw',                 // 全幅
            height: '100%',                 // 帯の高さをフルで
            backgroundImage: 'url(/images/ui_comment_window_base.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '100% 100%',    // 容器にピッタリ貼る（余白無視）
          }}
        >
          {/* テキスト */}
          <p
            style={{
              position: 'absolute',
              left: '7.5%',
              right: '7.5%',
              top: '18%',
              fontSize: 'clamp(14px, 2.6vw, 18px)', // 端末幅で少し可変
              lineHeight: 1.6,
              fontWeight: 700,
              color: '#111',
              whiteSpace: 'pre-line',
              textShadow: '0 1px 0 rgba(255,255,255,.35)', // 薄く読みやすく
            }}
          >
            {message}
          </p>

          {/* 次へボタン（枠内右下） */}
          <button
            onClick={onNext}
            aria-label="次へ"
            style={{
              position: 'absolute',
              right: '5%',
              bottom: '10%',
              padding: '10px 14px',
              fontWeight: 700,
              background: '#fff',
              color: '#000',
              border: 'none',
              borderRadius: 10,
              boxShadow: '0 2px 8px rgba(0,0,0,.18)',
            }}
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
}
