'use client';
import React from 'react';

type Props = { onNext: () => void; character: '隆介' | '鈴' };

// === ここだけ触ればサイズ調整できます ===
const PANEL_VH = 33.333;      // 下帯の高さ（＝画面の1/3）→ 2:1をキープ
const FRAME_WIDTH_VW = 94;    // 枠の横幅（画面に対して何％か）
const FRAME_MAX_W = 1100;     // 枠の最大横幅（デスクトップ用の上限）
const FRAME_ASPECT = 10 / 2;  // 枠の比率（横/縦）← “2”にして縦を厚く
const TEXT_TOP = 0.16;        // テキストの上マージン（枠内比）
const FONT_CLAMP = 'clamp(18px, 3.2vw, 24px)'; // 端末で自動拡縮
// =========================================

const MSG_R = `いよいよ今日から、杜氏として本蔵に入ることになった。
西宮の老舗酒蔵「本蔵」で、日本一の酒を目指すんや。`;

const MSG_S = `いよいよ今日から、杜氏として本蔵に入ることになった。
西宮の老舗酒蔵「本蔵」で、日本一のお酒を造ってみせる……！`;

export default function IntroNarration({ onNext, character }: Props) {
  const message = character === '隆介' ? MSG_R : MSG_S;

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', background: '#000' }}>
      {/* 上：背景（2/3） */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 0, height: `${100 - PANEL_VH}vh` }}>
        <img
          src="/images/bg_narration_kichizaemon_intro.png"
          alt="本蔵"
          decoding="async"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>

      {/* 下：帯（1/3） */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: `${PANEL_VH}vh`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 'env(safe-area-inset-bottom)',
          background: 'linear-gradient(to top, rgba(0,0,0,.85), rgba(0,0,0,.55) 40%, rgba(0,0,0,0))',
        }}
      >
        {/* コメント枠（縦厚く） */}
        <div
          style={{
            position: 'relative',
            width: `${FRAME_WIDTH_VW}vw`,
            maxWidth: FRAME_MAX_W,
            aspectRatio: `${FRAME_ASPECT}`, // ← ここが“高さ”を決めます
            backgroundImage: 'url(/images/ui_comment_window_base.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '100% 100%',
            filter: 'drop-shadow(0 3px 10px rgba(0,0,0,.25))',
          }}
        >
          {/* テキスト（枠の上に） */}
          <p
            style={{
              position: 'absolute',
              left: '7%',
              right: '7%',
              top: `${TEXT_TOP * 100}%`,
              fontSize: FONT_CLAMP,
              lineHeight: 1.7,
              fontWeight: 700,
              color: '#111',
              whiteSpace: 'pre-line',
              zIndex: 10,
            }}
          >
            {message}
          </p>

          {/* 次へ */}
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
              zIndex: 10,
            }}
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
}
