'use client';

import { useState } from 'react';

export default function RiceSelection() {
  const [selectedRice, setSelectedRice] = useState('');
  const [step, setStep] = useState(0);

  const riceOptions = [
    { label: '播磨産・山田錦（最上級）', value: '山田錦' },
    { label: '西宮周辺の米（中程度）', value: '西宮米' },
    { label: '飯米（入手しやすく安価）', value: '飯米' },
  ];

  const dialogue = [
    { speaker: '三郎', text: 'おはようございます！米はもう届いてますよ！' },
    { speaker: '三郎', text: 'どのお米を使うか、決めてくださいね！' },
  ];

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      {step < dialogue.length ? (
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', background: '#f0f8ff' }}>
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
          <h2 style={{ marginBottom: '1rem' }}>🌾 お米を選んでください</h2>
          {riceOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setSelectedRice(option.value)}
              style={{
                display: 'block',
                marginBottom: '1rem',
                padding: '1rem',
                borderRadius: '8px',
                background: selectedRice === option.value ? '#b3e5fc' : '#ffffff',
                border: '1px solid #ccc',
                width: '100%',
                textAlign: 'left',
              }}
            >
              {option.label}
            </button>
          ))}

          {selectedRice && (
            <p style={{ marginTop: '1rem' }}>✅ 選んだ米：<strong>{selectedRice}</strong></p>
          )}
        </div>
      )}
    </main>
  );
}
