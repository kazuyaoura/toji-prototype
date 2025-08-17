'use client';

import React from 'react';

type Props = {
  onNext: () => void;
  character: '隆介' | '鈴';
};

export default function IntroNarration({ onNext, character }: Props) {
  // === 調整用パラメータ（ここを触ればサイズが変えられます） ===
  const topBandVh = 66.666; // 背景の高さ（vh）。66.666 = 画面の上2/3
  const bottomBandVh = 100 - topBandVh; // 下帯の高さ（vh）= 残り
  const frameWidthPct = 92; // コメント枠の横幅（%）
  const textWidthPct = 84;  // テキストの横幅（%）※枠より少し狭く
  // ============================================================

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
        WebkitTapHighlightColor: 'transparent',
      }}
    >
      {/* 上：背景（上2/3固定） */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          height: `${topBandVh}vh`,
        }}
      >
        <img
          src="/images/bg_narration_kichizaemon_intro.png"
          alt="本蔵の外観"
          decoding="async"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            userSelect: 'none',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* 下：帯（下1/3固定・黒） */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: `${bottomBandVh}vh`,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          paddingBottom: `calc(12px + env(safe-area-inset-bottom))`,
          background: '#000',
        }}
      >
        {/* ===== 枠と文字を重ねるコンテナ ===== */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        >
          {/* コメント枠（サイズはここで一発指定） */}
          <img
            src="/images/ui_comment_window_base.png"
            alt=""
            aria-hidden
            style={{
              position: 'absolute',
              left: '50%',
              bottom: 8,
              transform: 'translateX(-50%)',
              width: `${frameWidthPct}%`, // ← 枠の横幅
              height: 'auto',
              display: 'block',
              userSelect: 'none',
              pointerEvents: 'none',
              zIndex: 5,
            }}
          />

          {/* テキスト（枠より前面＆枠より少し狭く） */}
          <p
            style={{
              position: 'absolute',
              left: '50%',
              bottom: 28, // 枠の内側に収める感じで微調整
              transform: 'translateX(-50%)',
              width: `${textWidthPct}%`,
              margin: 0,
              fontSize: 18,
              lineHeight: 1.6,
              fontWeight: 700,
              color: '#111', // 枠の内側が明色なので黒字
              textShadow: '0 1px 0 rgba(255,255,255,.35)', // うっすら縁取り
              whiteSpace: 'pre-line',
              zIndex: 10,
            }}
          >
            {message}
          </p>

          {/* 次へボタン（枠の右下付近） */}
          <button
            onClick={onNext}
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
    </div>
  );
}
