'use client';

import { useState } from 'react';

const dialogue = [
  {
    speaker: '吉左衛門',
    text: 'よう来てくれたな。',
    image: '/images/kichizaemon_character.png',
  },
  {
    speaker: '吉左衛門',
    text: '杜氏としての腕、見せてもらおうか。',
    image: '/images/kichizaemon_character.png',
  },
  {
    speaker: '吉左衛門',
    text: 'まずは、この蔵の様子を見て回るがいい。',
    image: '/images/kichizaemon_character.png',
  },
];

export default function ProloguePage() {
  const [index, setIndex] = useState(0);
  const current = dialogue[index];

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', background: '#f9f9f9', minHeight: '100vh' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          border: '1px solid #ccc',
          padding: '1rem',
          borderRadius: '8px',
          background: '#fff',
        }}
      >
        <img
          src={current.image}
          alt={current.speaker}
          width={100}
          height={100}
          style={{ borderRadius: '8px' }}
        />
        <div>
          <p><strong>{current.speaker}</strong></p>
          <p style={{ fontSize: '1.2rem' }}>{current.text}</p>
        </div>
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
