'use client';

import { useState } from 'react';
import { dialogue } from './dialogueData';

export default function Home() {
  const [index, setIndex] = useState(0);
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);
  const current = dialogue[index];

  const handleChoice = (value: string) => {
    setSelectedCharacter(value);
    setIndex(index + 1);
  };

  const handleNext = () => setIndex(index + 1);

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <div style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', background: '#fef9e7' }}>
        {current.choices ? (
          <>
            <p><strong>吉左衛門：</strong>さて、どちらを選ぶ？</p>
            {current.choices.map((choice: any, i: number) => (
              <button key={i} onClick={() => handleChoice(choice.value)} style={{ margin: '0.5rem' }}>
                {choice.label}
              </button>
            ))}
          </>
        ) : (
          <>
            <p><strong>{current.speaker}：</strong></p>
            <p style={{ fontSize: '1.2rem' }}>{current.text}</p>
            {index < dialogue.length - 1 ? (
              <button onClick={handleNext} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>▶ 次へ</button>
            ) : (
              <p style={{ marginTop: '1rem' }}>（つづく）</p>
            )}
          </>
        )}
      </div>
      {selectedCharacter && (
        <p style={{ marginTop: '1rem' }}>あなたは <strong>{selectedCharacter}</strong> として選ばれました。</p>
      )}
    </main>
  );
}
