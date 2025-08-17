'use client';
import React from 'react';

type Props = { onNext: () => void; character: '隆介' | '鈴' };

// ====== 調整ポイント（ここだけでOK） ==========================
const BAND_VH = 33.333;        // 下帯の高さ（固定のまま）
const SCALE = 1.45;            // ★ 枠の拡大倍率（1.0 → 等倍）← ここを上げるだけで一気に大きく
const BASE_W_VW = 92;          // 枠の基準幅（vw）※SCALEの前の“土台”幅
const MAX_W_PX = 1200;         // 枠の最大幅（px）
const ASPECT = '10 / 2.0';     // 枠の縦厚（分母を小さくすると縦が厚くなる）
const TEXT_TOP = 0.16;         // テキストの上マージン（枠内%）
// =============================================================

const MSG_R = `いよいよ今日から、杜氏として本蔵に入ることになった。
西宮の老舗酒蔵「本蔵」で、日本一の酒を目指すんや。`;
const MSG_S = `いよいよ今日から、杜氏として本蔵に入ることになった。
西宮の老舗酒蔵「本蔵」で、日本一のお酒を造ってみせる……！`;

export default function IntroNarration({ onNext, character }: Props) {
  const message = character === '隆介' ? MSG_R : MSG_S;

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', background: '#000' }}>
      {/* 背景（上 2/3） */}
      <div style={{ position: 'absolute', inset: '0 0 auto 0', height: `${100 - BAND_VH}vh` }}>
        <img
          src="/images/bg_narration_kichizaemon_intro.png"
          alt="本蔵"
          decoding="async"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>

      {/* 下帯（固定） */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: `${BAND_VH}vh`,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          padding: '0 2vw env(safe-area-inset-bottom)',
          background: 'linear-gradient(to top, rgba(0,0,0,.9) 0%, rgba(0,0,0,.6) 40%, rgba(0,0,0,0) 100%)',
          overflow: 'visible',
        }}
      >
        {/* コメント枠（SCALEで一括拡大） */}
        <div
          style={{
            position: 'relative',
            width: `${BASE_W_VW}vw`,
            maxWidth: MAX_W_PX,
            aspectRatio: ASPECT,
            backgroundImage: 'url(/images/ui_comment_window_base.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '100% 100%',
            filter: 'drop-shadow(0 4px 14px rgba(0,0,0,.3))',
            transformOrigin: 'center bottom',   // ← 下中央を基点に拡大
            transform: `scale(${SCALE})`,       // ★ ここだけ上げればデカくなる
          }}
        >
          {/* テキスト（枠上に） */}
          <p
            style={{
              position: 'absolute',
              left: '7%',
              right: '7%',
              top: `${TEXT_TOP * 100}%`,
              fontSize: 'clamp(18px, 3.8vw, 28px)',
              lineHeight: 1.7,
              fontWeight: 700,
              color: '#111',
              whiteSpace: 'pre-line',
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
