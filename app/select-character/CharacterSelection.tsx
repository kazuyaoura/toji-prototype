'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function CharacterSelection() {
  const router = useRouter();

  const handleSelect = (character: 'ryusuke' | 'suzu') => {
    // 将来的に選択状態をグローバルに保持（context や URL paramなど）も可能
    router.push(`/intro?character=${character}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-center p-4">
      <h1 className="text-2xl font-bold mb-4">キャラクターを選んでください</h1>
      <div className="flex gap-8">
        {/* 隆介 */}
        <div
          onClick={() => handleSelect('ryusuke')}
          className="cursor-pointer hover:scale-105 transition-transform"
        >
          <Image
            src="/images/ryusuke_character.png"
            alt="隆介"
            width={150}
            height={150}
          />
          <p className="mt-2 font-semibold">隆介</p>
        </div>

        {/* 鈴 */}
        <div
          onClick={() => handleSelect('suzu')}
          className="cursor-pointer hover:scale-105 transition-transform"
        >
          <Image
            src="/images/suzu_character.png"
            alt="鈴"
            width={150}
            height={150}
          />
          <p className="mt-2 font-semibold">鈴</p>
        </div>
      </div>
    </div>
  );
}
