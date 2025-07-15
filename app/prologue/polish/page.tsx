'use client';

import { useState } from 'react';

export default function PolishSelection() {
  const [selectedPolish, setSelectedPolish] = useState('');
  const [step, setStep] = useState(0);

  const polishOptions = [
    { label: '足踏み（昔ながら・低精白）', value: '足踏み' },
    { label: '水車（やや効率化）', value: '水車' },
    { label: '蒸気機関（近代化の始まり）', value: '蒸気機関' },
    { label: '機械精米（高効率・高精白）', value: '機械精米' },
  ];

  const dialogue = [
    { speaker: '三郎', text: 'さて、米を選んだら次は精米ですね！' },
    { speaker: '三郎', text: 'どんな方法で磨きますか？' },
  ];

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      {step < dialogue.length ? (
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', background: '#fff3e0' }}>
          <p><strong>{dialogue[step].speaker}：</strong></p>
          <p style={{ fontSize: '1.2rem' }}>{dialogue[step].text}</p>
          <button
            onClick={() => setStep(step + 1)}
            style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}
          >
            ▶ 次へ
          </button>
        </div>
      ) : (
        <div>
          <h2 style={{ marginBottom: '1rem' }}>🌀 精米方法を選んでください</h2>
          {polishOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setSelectedPolish(option.value)}
              style={{
                display: 'block',
                marginBottom: '1rem',
                padding: '1rem',
                borderRadius: '8px',
                background: selectedPolish === option.value ? '#ffecb3' : '#ffffff',
                border: '1px solid #ccc',
                width: '100%',
                textAlign: 'left',
              }}
            >
              {option.label}
            </button>
          ))}

          {selectedPolish && (
            <p style={{ marginTop: '1rem' }}>✅ 選んだ精米方法：<strong>{selectedPolish}</strong></p>
          )}
        </div>
      )}
    </main>
  );
}
