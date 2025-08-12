'use client';

import Image from 'next/image';

type CharacterName = '隆介' | '鈴';

type Props = {
  onSelect: (character: CharacterName) => void;
};

export default function CharacterSelect({ onSelect }: Props) {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#FFFDF6]">
      <div className="absolute inset-0 flex flex-col items-center">
        <h1 className="mt-6 text-2xl sm:text-3xl font-extrabold tracking-wider">
          主人公を選んでください
        </h1>

        <div className="mt-6 grid grid-cols-2 gap-5 w-full max-w-[760px] px-4">
          {/* 隆介 */}
          <button
            onClick={() => onSelect('隆介')}
            className="rounded-2xl bg-white/95 shadow-md p-3 active:scale-[0.98] transition outline-none focus:ring-4 focus:ring-blue-300"
            aria-label="隆介を選ぶ"
          >
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[240px]">
              <Image
                src="/images/ryusuke_character.png"
                alt="隆介"
                fill
                sizes="(max-width: 640px) 42vw, 240px"
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-2 text-center font-bold text-black">隆介を選ぶ</div>
          </button>

          {/* 鈴 */}
          <button
            onClick={() => onSelect('鈴')}
            className="rounded-2xl bg-white/95 shadow-md p-3 active:scale-[0.98] transition outline-none focus:ring-4 focus:ring-blue-300"
            aria-label="鈴を選ぶ"
          >
            <div className="relative mx-auto aspect-[3/4] w-full max-w-[240px]">
              <Image
                src="/images/suzu_character.png"
                alt="鈴"
                fill
                sizes="(max-width: 640px) 42vw, 240px"
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-2 text-center font-bold text-black">鈴を選ぶ</div>
          </button>
        </div>
      </div>
    </div>
  );
}
