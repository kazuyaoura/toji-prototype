// components/CharacterSelect.tsx
'use client';

import Image from 'next/image';

export type CharacterName = '隆介' | '鈴';

type Props = {
  onSelect: (character: CharacterName) => void;
};

export default function CharacterSelect({ onSelect }: Props) {
  return (
    <div className="w-screen h-screen bg-black flex flex-col overflow-hidden">
      {/* 上：キャラクター選択エリア */}
      <div className="flex-1 bg-[#f7efe3] flex flex-col items-center justify-center px-4">
        <h1 className="text-2xl font-bold mb-6 text-[#2b1d12]">
          主人公を選んでください
        </h1>

        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          <CharacterCard
            name="隆介"
            imgSrc="/images/ryusuke_character.png"
            description="元気で明るく、誰からも好かれる人気者。"
            onClick={() => onSelect('隆介')}
          />

          <CharacterCard
            name="鈴"
            imgSrc="/images/suzu_character.png"
            description="冷静で頭脳明晰、みんなが頼りにする理論派。"
            onClick={() => onSelect('鈴')}
          />
        </div>
      </div>

      {/* 下：パワプロ風UI */}
      <div className="bg-[#1b1b1b] border-t-4 border-white px-4 py-4">
        <div className="text-white text-center text-sm">
          選んだ主人公で、物語が少し変わります。
        </div>
      </div>
    </div>
  );
}

function CharacterCard({
  name,
  imgSrc,
  description,
  onClick,
}: {
  name: CharacterName;
  imgSrc: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-white rounded-xl border-4 border-[#2b1d12] p-3 flex flex-col items-center shadow-lg active:scale-95 transition"
    >
      <div className="relative w-28 h-36 mb-2">
        <Image
          src={imgSrc}
          alt={name}
          fill
          className="object-contain"
        />
      </div>

      <div className="text-xl font-bold text-[#2b1d12] mb-1">
        {name}
      </div>

      <div className="text-xs text-[#4b3a2a] leading-relaxed">
        {description}
      </div>

      <div className="mt-3 w-full rounded-lg bg-blue-600 text-white font-bold py-2 border-2 border-white shadow">
        ▶ 選ぶ
      </div>
    </button>
  );
}
