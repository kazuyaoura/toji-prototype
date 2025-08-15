// app/prologue/intro/page.tsx
'use client';

import NarrationScene from '@/components/NarrationScene';
import { useCharacter } from '@/contexts/CharacterContext';
import { narratorImageFor, protagonistLabel } from '@/lib/narrationHelpers';

export default function PrologueIntro() {
  const { character } = useCharacter();
  const name = protagonistLabel(character);

  return (
    <NarrationScene
      sceneImg="/images/bg_narration_kichizaemon_intro.png"
      narratorImg={narratorImageFor(character)}
      steps={[
        `今年も寒い冬がやってきた。${name}は西宮にやってきた。`,
        '老杜氏のもとで十年、真面目に技を磨いてきた。',
        'だがその年、本蔵の杜氏が急病で倒れたという知らせが届く……',
        'そして今、主人公は思いがけず本蔵を任されることになった——。',
      ]}
      onComplete={() => (window.location.href = '/prologue/opening')}
      title="序章・導入"
    />
  );
}
