'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

type CharacterSelectProps = {
  onSelect: (character: '隆介' | '鈴') => void;
};

export default function CharacterSelect({ onSelect }: CharacterSelectProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FAF7F2]">
      <h1 className="text-xl font-bold mb-6">主人公を選んでください</h1>

      <div className="flex gap-6">
        {/* 隆介 */}
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md w-40">
          <Image
            src="/images/ryusuke_character.png"
            alt="隆介"
            width={150}
            height={150}
            className="mb-2"
          />
          <p className="text-center text-sm mb-3">
            元気で明るく、誰からも好かれる <span className="font-bold">人気者</span>。
          </p>
          <Button onClick={() => onSelect('隆介')} className="w-full">
            ▶ 隆介を選ぶ
          </Button>
        </div>

        {/* 鈴 */}
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md w-40">
          <Image
            src="/images/suzu_character.png"
            alt="鈴"
            width={150}
            height={150}
            className="mb-2"
          />
          <p className="text-center text-sm mb-3">
            冷静で頭脳明晰、みんなが頼りにする <span className="font-bold">理論派</span>。
          </p>
          <Button onClick={() => onSelect('鈴')} className="w-full">
            ▶ 鈴を選ぶ
          </Button>
        </div>
      </div>
    </div>
  );
}
