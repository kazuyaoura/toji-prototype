'use client';

import { useState } from 'react';

const dialogue = [
  { speaker: '吉左衛門', text: 'よう来てくれたな。' },
  { speaker: '吉左衛門', text: '杜氏としての腕、見せてもらおうか。' },
  { speaker: '吉左衛門', text: 'まずは、この蔵の様子を見て回るがいい。' },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const current = dialogue[index];

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', background: '#fef9e7' }}>
        <p><strong>{current.speaker}：</strong></p>
        <p style={{ fontSize: '1.2rem' }}>{current.text}</p>
      </div>
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
