'use client';

import { useState } from 'react';
import TitleScreen from '@/components/TitleScreen';
import GameContainer from '@/components/GameContainer';
import MoneyDisplay from '@/components/MoneyDisplay';
import { MoneyProvider } from '@/contexts/MoneyContext';

export default function Home() {
  const [step, setStep] = useState(0);

  return (
    <MoneyProvider>
      <>
        <MoneyDisplay />
        {step === 0 ? (
          <TitleScreen onStart={() => setStep(1)} />
        ) : (
          <GameContainer />
        )}
      </>
    </MoneyProvider>
  );
}
