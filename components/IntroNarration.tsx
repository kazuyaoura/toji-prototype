'use client';
import React from 'react';

type Props = { onNext: () => void; character: '隆介' | '鈴' };

// ===== 調整つまみ =====
const PANEL_VH = 33.333;       // 下帯の高さ（%）
const FRAME_WIDTH_VW = 98;      // 枠の横幅（vw）
const FRAME_MAX_W = 900;        // 枠の最大横幅（px）
const FRAME_ASPECT = 10 / 3.2;  // 枠の比率（横/縦）→ 分母↑で縦厚
const TEXT_SIZE = 18;           // 本文フォント（px）
const TEXT_TOP = 0.17;          // 本文の上マージン（枠内比率 0〜1）
const BUTTON_PAD = 14;          // 次へボタンのpadding基準（px）
// ======================

const RYUSUKE_MSG = [
  'いよいよ今日から、杜氏として本蔵に入ることになった。',
  '西宮の老舗酒蔵「本蔵」で、日本一の酒を目指すんや。',
].join('\n');

const SUZU_MSG = [
  'いよいよ今日から、杜氏として本蔵に入ることになった。',
  '西宮の老舗酒蔵「本蔵」で、日本一のお酒を造ってみせる……！',
].join('\n');

export default function IntroNarration({ onNext, c'use client';
import React from 'react';

type Props = { onNext: () => void; character: '隆介' | '鈴' };

/** ====== つまみ（ここだけ数値調整でOK） ====== */
const PANEL_VH = 40;        // 下帯の高さ（%）…大きくするなら 42〜45 も可
const FRAME_MAX_W = 980;    // 枠の最大横幅（px）
const FRAME_ASPECT = 10 / 2.6; // 枠の比率（横/縦）→ 分母を小さくすると縦が厚くなる
const TEXT_TOP = 0.20;      // テキストの上マージン（枠内比率 0〜1）
/** =========================================== */

const RYUSUKE_MSG =
  ['いよいよ今日から、杜氏として本蔵に入ることになった。', '西宮の老舗酒蔵「本蔵」で、日本一の酒を目指すんや。'].join('\n');
const SUZU_MSG =
  ['いよいよ今日から、杜氏として本蔵に入ることになった。', '西宮の老舗酒蔵「本蔵」で、日本一のお酒を造ってみせる……！'].join('\n');

export default function IntroNarration({ onNext, character }: Props) {
  const message = character === '隆介' ? RYUSUKE_MSG : SUZU_MSG;

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
      {/* 上：背景 */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
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

      {/* 下：帯（左右に8pxガター / 下にセーフエリア余白） */}
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
          paddingLeft: 8,
          paddingRight: 8,
          paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 6px)',
          background: '#000',
        }}
      >
        {/* コメント枠（横幅いっぱい、最大 980px、縦厚は FRAME_ASPECT） */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: FRAME_MAX_W,
            aspectRatio: `${FRAME_ASPECT}`,
            backgroundImage: 'url(/images/ui_comment_window_base.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '100% 100%',
          }}
        >
          {/* テキスト：必ず枠の上に */}
          <p
            style={{
              position: 'absolute',
              zIndex: 10,
              left: '8%',
              right: '8%',
              top: `${TEXT_TOP * 100}%`,
              // 端末幅に合わせて可変
              fontSize: 'clamp(16px, 3.6vw, 22px)',
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
haracter }: Props) {
  const message = character === '隆介' ? RYUSUKE_MSG : SUZU_MSG;

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
      {/* 上：背景（100 - PANEL_VH %） */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
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

      {/* 下：帯（PANEL_VH %） */}
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
          background: '#000',
        }}
      >
        {/* コメント枠（サイズはつまみで調整） */}
        <div
          style={{
            position: 'relative',
            width: `${FRAME_WIDTH_VW}vw`,
            maxWidth: FRAME_MAX_W,
            aspectRatio: `${FRAME_ASPECT}`,
            height: 'min(calc(100% - 8px), auto)',
            backgroundImage: 'url(/images/ui_comment_window_base.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '100% 100%',
          }}
        >
          {/* テキスト（枠の上に） */}
          <p
            style={{
              position: 'absolute',
              left: '7%',
              right: '7%',
              top: `${TEXT_TOP * 100}%`,
              fontSize: TEXT_SIZE,
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
              padding: `${BUTTON_PAD - 2}px ${BUTTON_PAD + 2}px`,
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
