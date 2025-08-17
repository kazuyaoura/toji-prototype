'use client';
import React from 'react';

type Props = {
  onNext: () => void;
  character: '隆介' | '鈴';
};

// ===== 調整つまみ（まずはここだけ触ればOK） =====
const PANEL_H = 'min(45dvh, 480px)';      // 下帯の高さ: 動的vh + px上限
const FRAME_W = 'min(96vw, 1100px)';      // 枠の横幅: 画面に対して大きめ
const FRAME_ASPECT = 10 / 2.4;            // 枠の比率（横/縦）。縦を厚くするほど分母を小さく
// ===============================================

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
        height: '100dvh', // ← ここも dvh
        overflow: 'hidden',
        background: '#000',
        // パネル高さを CSS 変数に入れて使い回し
        // @ts-ignore
        ['--panel-h' as any]: PANEL_H,
      }}
    >
      {/* 上：背景（= 100dvh - PANEL_H） */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 'calc(100dvh - var(--panel-h))',
        }}
      >
        <img
          src="/images/bg_narration_kichizaemon_intro.png"
          alt="本蔵"
          decoding="async"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>

      {/* 下：コメント帯（高さは dvh+上限で安定） */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 'var(--panel-h)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 'env(safe-area-inset-bottom)',
          // 透け対策やグラデは後で入れる想定なので今は透明のまま
          background: 'transparent',
        }}
      >
        {/* 枠（大きめ） */}
        <div
          style={{
            position: 'relative',
            width: FRAME_W,
            aspectRatio: `${FRAME_ASPECT}`, // 例: 10/2.4
            background: 'center / 100% 100% no-repeat url(/images/ui_comment_window_base.png)',
          }}
        >
          {/* テキスト（とりあえずオフセット最小限） */}
          <p
            style={{
              position: 'absolute',
              left: '8%',
              right: '8%',
              top: '16%',
              // 端末に応じて拡縮（デカめに）
              fontSize: 'clamp(18px, 3.2vw, 26px)',
              lineHeight: 1.7,
              fontWeight: 700,
              color: '#111',
              whiteSpace: 'pre-line',
            }}
          >
            {message}
          </p>

          {/* 次へボタン（右下） */}
          <button
            onClick={onNext}
            aria-label="次へ"
            style={{
              position: 'absolute',
              right: '6%',
              bottom: '10%',
              padding: '12px 16px',
              fontWeight: 700,
              background: '#fff',
              color: '#000',
              border: 'none',
              borderRadius: 12,
              boxShadow: '0 2px 8px rgba(0,0,0,.25)',
            }}
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
}
