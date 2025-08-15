// app/prologue/opening/page.tsx
'use client';

import NarrationScene from '@/components/NarrationScene';

export default function PrologueOpening() {
  return (
    <NarrationScene
      sceneImg="/images/bg_narration_kichizaemon_intro.png"
      narratorImg="/images/kichizaemon_character.png"
      steps={[
        '隆介よ、今年の冬はひとつ、お前に本蔵を任せたいと思うてな。',
        '今津の杜氏が倒れてしもうてな……。本蔵のことはお前に託す。',
        '鈴も補佐につけておる。しっかり支えてくれるじゃろう。',
      ]}
      onComplete={() => (window.location.href = '/prologue/cast')}
      title="オープニング"
    />
  );
}
