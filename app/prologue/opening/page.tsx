// app/prologue/opening/page.tsx
'use client';

import NarrationScene from '@/components/NarrationScene';
import { useCharacter } from '@/contexts/CharacterContext';
import { protagonistLabel } from '@/lib/narrationHelpers';

export default function PrologueOpening() {
  const { character } = useCharacter();
  const name = protagonistLabel(character);

  return (
    <NarrationScene
      sceneImg="/images/bg_narration_kichizaemon_intro.png"
      narratorImg="/images/kichizaemon_character.png"
      steps={[
        `${name}よ、今年の冬はひとつ、お前に本蔵を任せたいと思うてな。`,
        '今津の杜氏が倒れてしもうてな……。本蔵のことはお前に託す。',
        '鈴も補佐につけておる。しっかり支えてくれるじゃろう。',
      ]}
      onComplete={() => (window.location.href = '/prologue/cast')}
      title="オープニング"
    />
  );
}
