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

  /** ====== 調整ノブ ======
   * BAND_VH          … 下帯の高さ（% of 画面高）。枠の大きさもここに依存
   * PANEL_VW         … 枠の幅（% of 画面幅）
   * PANEL_TRANSLATE  … 下帯の中央からさらに持ち上げる量（vh、マイナスで上へ）
   * FONT_PX          … 文字サイズ
   */
  const BAND_VH = 38;            // 下1/3ちょい（30〜42あたりで好みに）
  const PANEL_VW = 94;           // 枠の横幅（90〜100）
  const PANEL_TRANSLATE = -4;    // 下帯中央基準で-4vh 上へ
  const FONT_PX = 18;

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
      {/* 背景：画面高 - 下帯分 */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          height: `calc(100vh - ${BAND_VH}vh)`,
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

      {/* 下帯：中央寄せに変更（←ここがポイント） */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: `${BAND_VH}vh`,
          display: 'flex',
          alignItems: 'center',            // 以前の flex-end を修正
          justifyContent: 'center',
          padding: '12px 0 calc(env(safe-area-inset-bottom) + 8px)',
          zIndex: 5,
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,.85) 55%, rgba(0,0,0,.95) 100%)', // 文字可読性UP
        }}
      >
        {/* コメント枠本体 */}
        <div
          style={{
            position: 'relative',
            width: `${PANEL_VW}vw`,
            maxWidth: 860,
            aspectRatio: '10 / 3',          // 枠画像の比率に合わせる
            transform: `translateY(${PANEL_TRANSLATE}vh)`,
          }}
        >
          {/* 枠画像 */}
          <img
            src="/images/ui_comment_window_base.png"
            alt="コメントウィンドウ"
            decoding="async"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block',
              zIndex: 0,
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          />

          {/* テキスト（枠の上に） */}
          <p
            style={{
              position: 'absolute',
              zIndex: 10,
              left: '8%',
              right: '8%',
              top: '18%',
              fontSize: FONT_PX,
              lineHeight: 1.65,
              fontWeight: 700,
              color: '#111',
              whiteSpace: 'pre-line',
              textShadow:
                '0 1px 0 rgba(255,255,255,.6), 0 0 2px rgba(255,255,255,.6)',
            }}
          >
            {message}
          </p>

          {/* 次へボタン */}
          <button
            onClick={onNext}
            aria-label="次へ"
            style={{
              position: 'absolute',
              zIndex: 10,
              right: '6%',
              bottom: '10%',
              padding: '10px 14px',
              fontWeight: 700,
              background: '#fff',
              color: '#000',
              border: 'none',
              borderRadius: 12,
              boxShadow: '0 2px 10px rgba(0,0,0,.25)',
            }}
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
}
