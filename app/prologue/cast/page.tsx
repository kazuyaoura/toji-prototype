// app/prologue/cast/page.tsx（例：頭の紹介を分岐）
'use client';

import NarrationScene from '@/components/NarrationScene';
import { useCharacter } from '@/contexts/CharacterContext';
import { headCharacterFor } from '@/lib/narrationHelpers';

export default function PrologueCast() {
  const { character } = useCharacter();
  const head = headCharacterFor(character);
  const img =
    head === '鈴'
      ? '/images/character_main_suzue_transparent.png'
      : '/images/character_main_ryusuke_transparent.png';

  const line =
    head === '鈴'
      ? 'わたしがこの蔵の頭を務めさせてもらいます、よろしくね。'
      : '俺がこの蔵の頭や。しっかり頼むで。';

  return (
    <NarrationScene
      sceneImg="/images/bg_narration_kichizaemon_intro.png"
      narratorImg={img}
      steps={[line]}
      onComplete={() => (window.location.href = '/prologue/cast-2')}
      title="キャラクター説明（頭）"
    />
  );
}
