'use client';

import { useState } from 'react';
import IntroNarration from './components/IntroNarration';
import CharacterSelect from './components/CharacterSelect'; // ※まだ未実装なら一旦コメントアウトでOK

export default function Home() {
  const [scene, setScene] = useState<'intro' | 'select'>('intro');

  return (
    <>
      {scene === 'intro' && <IntroNarration onFinish={() => setScene('select')} />}
      {scene === 'select' && <CharacterSelect />} {/* 仮で入れています */}
    </>
  );
}
