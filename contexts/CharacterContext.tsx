// contexts/CharacterContext.tsx
'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type CharacterName = '隆介' | '鈴';
type Ctx = {
  character: CharacterName | null;
  setCharacter: (c: CharacterName) => void;
  clear: () => void;
};

const CharacterContext = createContext<Ctx | undefined>(undefined);

export function CharacterProvider({ children }: { children: React.ReactNode }) {
  const [character, setCharacterState] = useState<CharacterName | null>(null);

  useEffect(() => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('toji.character') : null;
    if (saved === '隆介' || saved === '鈴') setCharacterState(saved);
  }, []);

  const setCharacter = (c: CharacterName) => {
    setCharacterState(c);
    try { window.localStorage.setItem('toji.character', c); } catch {}
  };

  const clear = () => {
    setCharacterState(null);
    try { window.localStorage.removeItem('toji.character'); } catch {}
  };

  const value = useMemo(() => ({ character, setCharacter, clear }), [character]);
  return <CharacterContext.Provider value={value}>{children}</CharacterContext.Provider>;
}

export function useCharacter() {
  const ctx = useContext(CharacterContext);
  if (!ctx) throw new Error('useCharacter must be used within CharacterProvider');
  return ctx;
}
