'use client';

import { useState } from 'react';

const dialogue = [
  { speaker: '吉左衛門', text: 'よう来てくれたな。' },
  { speaker: '吉左衛門', text: '杜氏としての腕、見せてもらおうか。' },
  { speaker: '吉左衛門', text: 'まずは、この蔵の様子を見て回るがいい。' }
];

// キャラ名に対応する画像ファイル（public/images 以下に配置済み）
const characterImages: Record<string, string> = {
  '吉左衛門': '/images/kichizaemon_character.png',
  '隆介': '/images/ryusuke_character.png',
  '鈴': '/images/suzu_character.png'
};

export default function ProloguePage() {
  const [index, setIndex] = useState(0);
  const current = dialogue[index];

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', background: '#f9f9f9', minHeight: '100vh' }}>
      <div style={{
        border: '1px solid #ccc',
        padding: '1rem',
        borderRadius: '8px',
        background: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <img
          src={characterImages[current.speaker]}
          alt={current.speaker}
          style={{ width: '120px', height: 'auto' }}
        />
        <div>
          <p><strong>{current.speaker}</strong></p>
          <p style={{ fontSize: '1.2rem' }}>{current.text}</p>
        </div>
      </div>

      {index < dialogue.length - 1 ? (
        <button
          onClick={() => setIndex(index + 1)}
          style={{ marginTop: '1.5rem', padding: '0.6rem 1.2rem' }}
        >
          ▶ 次へ
        </button>
      ) : (
        <p style={{ marginTop: '1.5rem' }}>（つづく）</p>
      )}
    </main>
  );
}
