'use client';
import React from 'react';

type Props = { message: string };

export default function NarrationScreen({ message }: Props) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* 背景 */}
      <img
        src="/images/bg_narration_kichizaemon_intro.png"
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* コメント枠＋文字（下1/3固定） */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '33%', // 下1/3
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* 枠 */}
        <div style={{ position: 'relative', width: '90%', maxWidth: 680, aspectRatio: '10/3' }}>
          <img
            src="/images/ui_comment_window_base.png"
            alt=""
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
          {/* テキストを枠の上に重ねる */}
          <p
            style={{
              position: 'absolute',
              top: '18%',
              left: '8%',
              right: '8%',
              fontSize: 16,
              lineHeight: 1.6,
              fontWeight: 700,
              color: '#222',
              whiteSpace: 'pre-line',
              zIndex: 10,
            }}
          >
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}
