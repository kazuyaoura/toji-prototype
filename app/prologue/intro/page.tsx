// app/prologue/intro/page.tsx
'use client';

import NarrationScene from '@/components/NarrationScene';

export default function PrologueIntro() {
  return (
    <NarrationScene
      sceneImg="/images/bg_narration_kichizaemon_intro.png"
      narratorImg="/images/kichizaemon_character.png"
      steps={[
        '今年も寒い冬がやってきた。主人公は今年も西宮にやってきた。',
        '老杜氏のもとで十年、真面目に技を磨いてきた。',
        'だがその年、本蔵の杜氏が急病で倒れたという知らせが届く……',
        'そして今、主人公は思いがけず本蔵を任されることになった——。',
      ]}
      onComplete={() => (window.location.href = '/prologue/opening')}
      title="序章・導入"
    />
  );
}
