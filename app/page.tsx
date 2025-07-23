'use client';

import GameContainer from '@/components/GameContainer';
import MoneyDisplay from "@/components/MoneyDisplay";
import { MoneyProvider } from "@/contexts/MoneyContext";

export default function Home() {
  return (
    <MoneyProvider>
      <>
        <MoneyDisplay />
        <GameContainer />
      </>
    </MoneyProvider>
  );
}
