'use client';
import React from 'react';

type Props = { onNext: () => void; character: '隆介' | '鈴' };

/** ---- 調整用つまみ ---- */
const PANEL_VH = 33.333;        // 下帯の高さ（vh）。そのままでOK
const FRAME_ASPECT = 10 / 2.6;   // 枠の比率（横/縦）。分母を小さく → 縦が厚くなる
const TEXT_TOP = 0.20;           // テキストの上マージン（枠内比率 0〜1）
/** ---------------------- */

const MSG_R = [
  'いよいよ今日から、杜氏として本蔵に入ることになった。',
  '西宮の老舗酒蔵「本蔵」で、日本一の酒を目指すんや。',
].join('\n');

const MSG_S = [
  'いよいよ今日から、杜氏として本蔵に入ることになった。',
  '西宮の老舗酒蔵「本蔵」で、日本一のお酒を造ってみせる……！',
].join('\n');

export default function IntroNarration({ onNext, character }: Props) {
  const message = character === '隆介' ? MSG_R : MSG_S;

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
      {/* 上：背景（残り全部 = 100 - PANEL_VH） */}
      <div
        style={{
          position: 'absolute',
          inset: '0 0 auto 0',
          height: `${100 - PANEL_VH}vh`,
        }}
      >
        <img
          src="/images/bg_narration_kichizaemon_intro.png"
          alt="本蔵"
          decoding="async"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>

      {/* 下：帯（高さ固定） */}
      <div
        style={{
          position: 'absolute',
          inset: 'auto 0 0 0',
          height: `${PANEL_VH}vh`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 8px calc(env(safe-area-inset-bottom, 0px) + 6px)',
          background: '#000',
        }}
      >
        {/* ★ 枠：高さ基準で大きく。帯の高さをほぼフルで使う */}
        <div
          style={{
            position: 'relative',
            height: 'calc(100% - 8px)', // 帯の上下にわずかな余白
            aspectRatio: `${FRAME_ASPECT}`, // 高さから幅が決まる
            width: 'auto',
            maxWidth: '100%',
            margin: '0 auto',
            backgroundImage: 'url(/images/ui_comment_window_base.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '100% 100%',
          }}
        >
          {/* テキスト（枠の上に重ねる） */}
          <p
            style={{
              position: 'absolute',
              zIndex: 10,
              left: '8%',
              right: '8%',
              top: `${TEXT_TOP * 100}%`,
              fontSize: 'clamp(16px, 3.8vw, 22px)',
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
              zIndex: 10,
              right: '6%',
              bottom: '12%',
              padding: '12px 16px',
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
