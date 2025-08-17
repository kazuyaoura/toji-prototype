'use client';
import React from 'react';

type Props = { onNext: () => void; character: '隆介' | '鈴' };

// ===== 調整つまみ =====
const PANEL_VH = 33.333;       // 下帯の高さ（%）
const FRAME_WIDTH_VW = 100;      // 枠の横幅（vw）
const FRAME_MAX_W = 900;        // 枠の最大横幅（px）
const FRAME_ASPECT = 10 / 4;  // 枠の比率（横/縦）→ 分母を大きくすると“縦厚”
const TEXT_SIZE = 18;           // 本文フォント（px）
const TEXT_TOP = 0.17;          // 本文の上マージン（枠内比率 0〜1）
const BUTTON_PAD = 14;          // 次へボタンのpadding基準（px）
// ======================

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
            // 帯をはみ出さないよう一応の上限
            height: 'min(calc(100% - 8px), auto)',
            backgroundImage: 'url(/images/ui_comment_window_base.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '100% 100%',
          }}
        >
          {/* テキスト（枠の上に） */}
