'use client';
import { useState } from 'react';
import TitleScreen from './components/TitleScreen';
import KichizaemonIntro from './components/KichizaemonIntro'; // 次の画面（仮）

export default function HomePage() {
  const [step, setStep] = useState<'title' | 'intro'>('title');

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      {step === 'title' && <TitleScreen onStart={() => setStep('intro')} />}
      {step === 'intro' && <KichizaemonIntro onFinish={() => {}} />}
    </main>
  );
}
