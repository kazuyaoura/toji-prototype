'use client';

import { useState } from 'react';

export default function WaterSelection() {
  const [selectedWater, setSelectedWater] = useState('');
  const [step, setStep] = useState(0);

  const waterOptions = [
    { label: '石材町の宮水（最高品質・やや高価）', value: '石材町の宮水' },
    { label: '久保町の宮水（高品質）', value: '久保町の宮水' },
    { label: '井戸水（蔵の裏手）', value: '井戸水' },
    { label: '夙川の川の水（個性あり）', value: '夙川の水' },
  ];

  const dialogue = [
    { speaker: '仁左衛門（水屋）', text: '水の手配はワシに任せとけ。' },
    { speaker: '仁左衛門（水屋）', text: 'さて、どこの水にするんじゃ？' },
  ];

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      {step < dialogue.length ? (
        <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', background: '#e0f7fa' }}>
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
          <h2 style={{ marginBottom: '1rem' }}>💧 使用する水を選んでください</h2>
          {waterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setSelectedWater(option.value)}
              style={{
                display: 'block',
                marginBottom: '1rem',
                padding: '1rem',
                borderRadius: '8px',
                background: selectedWater === option.value ? '#b2ebf2' : '#ffffff',
                border: '1px solid #ccc',
                width: '100%',
                textAlign: 'left',
              }}
            >
              {option.label}
            </button>
          ))}
          {selectedWater && (
            <p style={{ marginTop: '1rem' }}>✅ 選んだ水：<strong>{selectedWater}</strong></p>
          )}
        </div>
      )}
    </main>
  );
}
