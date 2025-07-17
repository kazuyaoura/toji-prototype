'use client';

import { useState } from 'react';
import TitleScreen from './components/TitleScreen';
import IntroNarration from './components/IntroNarration';
import KichizaemonIntro from './components/KichizaemonIntro';

export default function Home() {
  const [step, setStep] = useState<'title' | 'intro' | 'kichizaemon'>('title');

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      {step === 'title' && (
        <TitleScreen onStart={() => setStep('intro')} />
      )}

      {step === 'intro' && (
        <IntroNarration onFinish={() => setStep('kichizaemon')} />
      )}

      {step === 'kichizaemon' && (
        <KichizaemonIntro onFinish={() => {
          // ここで次の画面（キャラ選択など）に進む準備をする
          console.log('吉左衛門パート終了！');
        }} />
      )}
    </main>
  );
}
