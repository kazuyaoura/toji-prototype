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
      <h1 className="text-xl font-bold mb-4">主人公を選んでください</h1>

      {/* キャラ画像：横並び */}
      <div className="flex flex-row justify-center gap-6 mb-4">
        <img
          src="/characters/character_main_ryusuke.png"
          alt="隆介"
          className="w-[40vw] max-w-[160px] h-auto object-contain"
        />
        <img
          src="/characters/character_main_suzu.png"
          alt="鈴"
          className="w-[40vw] max-w-[160px] h-auto object-contain"
        />
      </div>

      {/* ボタン：横並び */}
      <div className="flex flex-row justify-center gap-6">
        <Button onClick={() => onSelect('隆介')}>隆介を選ぶ</Button>
        <Button onClick={() => onSelect('鈴')}>鈴を選ぶ</Button>
      </div>
    </div>
  );
}
