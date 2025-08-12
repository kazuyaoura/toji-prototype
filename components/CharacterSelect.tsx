// components/CharacterSelect.tsx
'use client';

import { Button } from '@/components/ui/button';

type CharacterName = '隆介' | '鈴';

type Props = { onSelect: (character: CharacterName) => void };

export default function CharacterSelect({ onSelect }: Props) {
  return (
    <div className="min-h-screen w-screen bg-white flex flex-col items-center">
      {/* タイトル（少し小さめ） */}
      <h1 className="text-lg font-bold mt-3 mb-3">主人公を選んでください</h1>

      {/* 2カラム：スマホでも横並び固定 */}
      <div className="w-full max-w-[640px] px-3 grid grid-cols-2 gap-3">
        {/* 隆介 */}
        <div className="flex flex-col items-center">
          {/* 画像の枠を固定してオーバーしないようにする */}
          <div className="w-full max-w-[44vw] sm:max-w-[240px] aspect-[3/4] max-h-[38vh] flex items-center justify-center">
            <img
              src="/images/ryusuke_character.png"
              alt="隆介"
              className="max-h-full max-w-full object-contain"
              decoding="async"
            />
          </div>
          <Button className="w-full max-w-[44vw] sm:max-w-[240px] mt-2">
            ▶ 隆介を選ぶ
          </Button>
        </div>

        {/* 鈴 */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-[44vw] sm:max-w-[240px] aspect-[3/4] max-h-[38vh] flex items-center justify-center">
            <img
              src="/images/suzu_character.png"
              alt="鈴"
              className="max-h-full max-w-full object-contain"
              decoding="async"
            />
          </div>
          <Button className="w-full max-w-[44vw] sm:max-w-[240px] mt-2">
            ▶ 鈴を選ぶ
          </Button>
        </div>
      </div>

      {/* 予備の下余白（誤タップ防止） */}
      <div className="h-4" />
    </div>
  );
}
