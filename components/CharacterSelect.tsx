'use client';

import Image from 'next/image';

type Props = {
  onSelect: (character: string) => void;
};

export default function CharacterSelect({ onSelect }: Props) {
  return (
    <div className="relative w-screen h-screen bg-black text-white overflow-hidden flex flex-col items-center justify-center space-y-6 p-4">
      <h1 className="text-2xl font-bold">主人公を選んでください</h1>

      <div className="flex flex-row items-end justify-center space-x-8">
        {/* 隆介 */}
        <div className="flex flex-col items-center space-y-2">
          <Image
            src="/characters/character_main_ryusuke.png"
            alt="隆介"
            width={180}
            height={180}
          />
          <button
            onClick={() => onSelect('隆介')}
            className="bg-white text-black px-4 py-2 rounded-lg font-bold shadow hover:bg-gray-200"
          >
            隆介を選ぶ
          </button>
        </div>

        {/* 鈴 */}
        <div className="flex flex-col items-center space-y-2">
          <Image
            src="/characters/character_main_suzu.png"
            alt="鈴"
            width={180}
            height={180}
          />
          <button
            onClick={() => onSelect('鈴')}
            className="bg-white text-black px-4 py-2 rounded-lg font-bold shadow hover:bg-gray-200"
          >
            鈴を選ぶ
          </button>
        </div>
      </div>
    </div>
  );
}
