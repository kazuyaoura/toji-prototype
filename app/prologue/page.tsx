'use client';

import { useState } from 'react';
import dialogue from './dialogueData';

// ✅ ① キャラ名と画像を紐づけるマッピングを追加
const characterImages: Record<string, string> = {
  吉左衛門: '/images/kichizaemon_character.png',
  隆介: '/images/ryusuke_character.png',
  鈴: '/images/suzu_character.png',
};

export default function ProloguePage() {
  const [index, setIndex] = useState(0);
  const current = dialogue[index];

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', background: '#f9f9f9', minHeight: '100vh' }}>
      <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', background: '#fff' }}>
        {/* ✅ ② キャラクター画像を表示 */}
        <img
          src={characterImages[current.speaker]}
          alt={current.speaker}
          style={{ width: '150px', height: 'auto', marginBottom: '1rem' }}
        />

        {/* ✅ ③ セリフの表示 */}
        <p><strong>{current.speaker}</strong></p>
        <p style={{ fontSize: '1.2rem' }}>{current.text}</p>
      </div>

      {/* ✅ ④ ボタン or つづく */}
      {index < dialogue.length - 1 ? (
        <button
          onClick={() => setIndex(index + 1)}
          style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}
        >
          ▶ 次へ
        </button>
      ) : (
        <p style={{ marginTop: '1rem' }}>（つづく）</p>
      )}
    </main>
  );
}
