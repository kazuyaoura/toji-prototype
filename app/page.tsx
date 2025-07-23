'use client';

import GameContainer from '@/components/GameContainer';
import MoneyDisplay from "@/components/MoneyDisplay";
import { useContext } from "react";
import { MoneyContext } from "@/contexts/MoneyContext";

export default function Home() {
  return <GameContainer />;
}
