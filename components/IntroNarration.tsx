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

  // 下帯を思い切って 40vh に（＝枠をさらに大きく）
  const bandVh = 'use client';
import React from 'react';

type Props = { onNext: () => void; character: '隆介' | '鈴' };

// ===== 調整つまみ（数値だけ変えればOK） =====
const PANEL_VH = 33.333;    // 下の黒帯（パネル）高さ %: 33.333 = 画面下1/3
const FRAME_WIDTH_VW = 120;   // 枠の横幅（vw）。100 にすると画面幅いっぱい
const FRAME_MAX_W = 960;     // 枠の最大横幅（px）。タブレットでの上限
const FRAME_ASPECT = 10 / 4; // 枠の比率（横/縦）。値を小さくすると“縦に厚く”
const TEXT_SIZE = 18;        // 本文フォントサイズ（px）
const TEXT_TOP = 0.17;       // 枠内での本文の上マージン（0〜1の比率）
const BUTTON_SIZE = 14;      // ボタンのpadding基準（px）
// ===========================================

export default function IntroNarration({ onNext, character }: Props) {
  const message =
    character === '隆介'
      ? `いよいよ今日から、杜氏として本蔵に入ることになった。
西宮の老舗酒蔵「本蔵」で、日本一の酒を目指すんや。`
      : `いよいよ今日から、杜氏として本蔵に入ることになった。
西宮の老舗酒蔵「本蔵」で、日本一のお酒を造ってみせる……！`;

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', background: '#000' }}>
      {/* 上：背景（残り= 100 - PANEL_VH） */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 0, height: `${100 - PANEL_VH}vh` }}>
        <img
          src="/images/bg_narration_kichizaemon_intro.png"
          alt="本蔵"
          decoding="async"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>

      {/* 下：パネル（PANEL_VH %） */}
      <div
        style={{
          position: 'absolute',
          left: 0, right: 0, bottom: 0,
          height: `${PANEL_VH}vh`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          paddingBottom: 'env(safe-area-inset-bottom)',
          background: '#000',
        }}
      >
        {/* 枠：横幅と縦幅は FRAME_WIDTH_VW, FRAME_MAX_W, FRAME_ASPECT で決まる */}
        <div
          style={{
            position: 'relative',
            width: `${FRAME_WIDTH_VW}vw`,
            maxWidth: FRAME_MAX_W,
            // 高さ = 幅 / アスペクト だが、帯を超えないように上限も付ける
            aspectRatio: `${FRAME_ASPECT}`,
            height: 'min( calc(100% - 8px), auto )',
            backgroundImage: 'url(/images/ui_comment_window_base.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '100% 100%',
          }}
        >
          {/* テキスト */}
          <p
            style={{
              position: 'absolute',
              left: '7%', right: '7%',
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
              right: '6%', bottom: '10%',
              padding: `${BUTTON_SIZE - 2}px ${BUTTON_SIZE + 2}px`,
              fontWeight: 700,
              background: '#fff', color: '#000',
              border: 'none', borderRadius: 10,
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
40;         // ← ここを 42/45 に上げるとさらに大きくできます
  const bgVh = 100 - bandVh; // 上の背景の高さ

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
      {/* 上：背景（bgVh 分） */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: 0, height: `${bgVh}vh` }}>
        <img
          src="/images/bg_narration_kichizaemon_intro.png"
          alt="本蔵"
          decoding="async"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>

      {/* 下：帯（bandVh 分） */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: `${bandVh}vh`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 'env(safe-area-inset-bottom)',
          background: '#000',
        }}
      >
        {/* 枠：帯の高さをほぼ使い切る（横は画面いっぱい） */}
        <div
          style={{
            position: 'relative',
            height: 'calc(100% - 8px)',  // 帯の上下に薄く余白
            maxWidth: '100vw',
            width: '100vw',
            aspectRatio: '11 / 3',       // 10/3 だと少し背が低く見えるので 11/3 に増量
            backgroundImage: 'url(/images/ui_comment_window_base.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '100% 100%', // 余白を無視して全面に
          }}
        >
          {/* テキスト（枠上） */}
          <p
            style={{
              position: 'absolute',
              left: '7%',
              right: '7%',
              top: '18%',
              fontSize: 'clamp(15px, 2.6vw, 18px)', // 端末幅に応じて少しだけ伸縮
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
