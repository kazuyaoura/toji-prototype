// components/CharacterSelect.tsx
'use client';

import { Button } from '@/components/ui/button';

type CharacterName = '隆介' | '鈴';

type Props = {
  onSelect: (character: CharacterName) => void;
};

export default function CharacterSelect({ onSelect }: Props) {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-white p-4">
      {/* タイトル */}
      <h1 className="text-xl font-bold mb-6">主人公を選んでください</h1>

      {/* 2カラム（画像の下にボタン） */}
      <div className="grid grid-cols-2 gap-6">
        {/* 隆介 */}
        <div className="flex flex-col items-center">
          <img
            src="/images/ryusuke_character.png"
            alt="隆介"
            className="w-[40vw] max-w-[160px] h-auto object-contain"
            decoding="async"
          />
          <div className="mt-3">
            <Button onClick={() => onSelect('隆介')}>隆介を選ぶ</Button>
          </div>
        </div>

        {/* 鈴 */}
        <div className="flex flex-col items-center">
          <img
            src="/images/suzu_character.png"
            alt="鈴"
            className="w-[40vw] max-w-[160px] h-auto object-contain"
            decoding="async"
          />
          <div className="mt-3">
            <Button onClick={() => onSelect('鈴')}>鈴を選ぶ</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
