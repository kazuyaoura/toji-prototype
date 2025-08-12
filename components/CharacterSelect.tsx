'use client';

import { Button } from '@/components/ui/button'; // ←この import 経路を必ず確認

type CharacterName = '隆介' | '鈴';

type Props = { onSelect: (character: CharacterName) => void };

export default function CharacterSelect({ onSelect }: Props) {
  return (
    <div className="min-h-screen w-screen bg-white flex flex-col items-center">
      {/* 反映確認用に (v2) を付与 */}
      <h1 className="text-lg font-bold mt-3 mb-3">主人公を選んでください（v2）</h1>

      {/* 2カラム固定 */}
      <div className="w-full max-w-[640px] px-3 grid grid-cols-2 gap-3">
        {/* 隆介 */}
        <div className="flex flex-col items-center">
          {/* 画像枠：幅は45vw上限、縦は34vh上限で絶対に収める */}
          <div className="flex items-center justify-center"
               style={{ maxWidth: '45vw', height: '34vh' }}>
            <img
              src="/images/ryusuke_character.png"
              alt="隆介"
              className="h-full w-auto object-contain"
              decoding="async"
            />
          </div>
          <Button className="w-full mt-2" onClick={() => onSelect('隆介')}>
            ▶ 隆介を選ぶ
          </Button>
        </div>

        {/* 鈴 */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center"
               style={{ maxWidth: '45vw', height: '34vh' }}>
            <img
              src="/images/suzu_character.png"
              alt="鈴"
              className="h-full w-auto object-contain"
              decoding="async"
            />
          </div>
          <Button className="w-full mt-2" onClick={() => onSelect('鈴')}>
            ▶ 鈴を選ぶ
          </Button>
        </div>
      </div>

      <div className="h-4" />
    </div>
  );
}
