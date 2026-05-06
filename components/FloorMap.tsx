'use client';

import Image from 'next/image';
import DialogueBox from './DialogueBox';

type Props = {
  onNext: () => void;
};

export default function FloorMap({ onNext }: Props) {
  const message = `これが本蔵の見取り図や。
工程ごとに場所も人もちゃうから、しっかり覚えておいてな！`;

  return (
    <div className="w-screen h-screen bg-black flex flex-col overflow-hidden">
      {/* 上：フロアマップ */}
      <div className="relative flex-1">
        <Image
          src="/backgrounds/bg_floor_map.png"
          alt="フロアマップ"
          fill
          className="object-cover pointer-events-none"
          priority
        />
      </div>

      {/* 下：共通DialogueBox */}
      <DialogueBox
        speaker="頭"
        text={message}
        onNext={onNext}
      />
    </div>
  );
}
