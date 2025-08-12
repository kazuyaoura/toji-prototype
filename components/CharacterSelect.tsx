// components/CharacterSelect.tsx
'use client';

import { Button } from '@/components/ui/button';

type CharacterName = '隆介' | '鈴';

type Props = { onSelect: (character: CharacterName) => void };

export default function CharacterSelect({ onSelect }: Props) {
  return (
    <div className="min-h-screen w-screen bg-white flex flex-col items-center">
      {/* タイトル */}
      <h1 className="text-xl font-bold mt-4 mb-4">主人公を選んでください</h1>

      {/* 横並び 2カラム */}
      <div className="w-full max-w-[680px] px-4 grid grid-cols-2 gap-4 place-items-center">
        {/* 隆介 */}
        <div className="w-full flex flex-col items-center">
          <img
            src="/images/ryusuke_character.png"
            alt="隆介"
            className="w-full max-w-[240px] h-auto object-contain"
            decoding="async"
          />
          <div className="mt-3 w-full max-w-[240px]">
            <Button className="w-full" onClick={() => onSelect('隆介')}>
              ▶ 隆介を選ぶ
            </Button>
          </div>
        </div>

        {/* 鈴 */}
        <div className="w-full flex flex-col items-center">
          <img
            src="/images/suzu_character.png"
            alt="鈴"
            className="w-full max-w-[240px] h-auto object-contain"
            decoding="async"
          />
          <div className="mt-3 w-full max-w-[240px]">
            <Button className="w-full" onClick={() => onSelect('鈴')}>
              ▶ 鈴を選ぶ
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
