// app/page.tsx
'use client';

import GameContainer from '@/components/GameContainer';
import { MoneyProvider } from '@/contexts/MoneyContext';

export default function Home() {
  return (
    <MoneyProvider>
      <GameContainer />
    </MoneyProvider>
  );
}
