// app/components/KichizaemonIntro.tsx

import React, { useState } from 'react';
import DialogueBox from './DialogueBox';
import Image from 'next/image';

const KichizaemonIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [showDialogue, setShowDialogue] = useState(true);

  const dialogues = [
    '隆介（鈴）くん、よう来てくれた。',
    '今津の杜氏が倒れてな、本蔵の造りを任せたいのだ。',
    'うちの蔵のことは鈴（隆介）が支えてくれるで安心してええ。',
    'まずは蔵の構造を頭に入れておいてくれ。',
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gray-100">
      <Image
        src="/images/kichizaemon_character.png"
        alt="吉左衛門"
        width={200}
        height={200}
        className="absolute bottom-32 left-4"
      />

      {showDialogue && (
        <DialogueBox
          dialogues={dialogues}
          onComplete={() => {
            setShowDialogue(false);
            onComplete(); // 次のコンポーネントへ進める処理（例：IntroNarrationへ）
          }}
        />
      )}
    </div>
  );
};

export default KichizaemonIntro;
