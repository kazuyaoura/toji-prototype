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
      {/* 上：背景（画面の上2/3） */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: '66.666vh',
        }}
      >
        <img
          src="/images/bg_narration_kichizaemon_intro.png"
          alt="本蔵"
          decoding="async"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>

      {/* 下：コメントパネル（画面の下1/3） */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '33.333vh',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          paddingBottom: 'env(safe-area-inset-bottom)',
          background: '#000', // 黒帯のまま
        }}
      >
        {/* ▼ 枠は background-image で“容器いっぱい”に貼る */}
        <div
          style={{
            position: 'relative',
            width: '92vw',
            maxWidth: 720,
            aspectRatio: '10 / 3', // だいたいの比率。必要なら微調整可
            marginBottom: 12,
            backgroundImage: 'url(/images/ui_comment_window_base.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '100% 100%', // ← ここがポイント（余白を無視して全面に）
            borderRadius: 8,
          }}
        >
          {/* テキスト（枠の上に重ねる） */}
          <p
            style={{
              position: 'absolute',
              left: '8%',
              right: '8%',
              top: '18%',         // 文字位置はここで調整
              fontSize: 16,
              lineHeight: 1.6,
              fontWeight: 700,
              color: '#111',
              whiteSpace: 'pre-line',
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
              right: '6%',
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
