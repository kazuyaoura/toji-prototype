'use client';

import { useState } from 'react';

const narrationLines = [
  '丹波の冬。',
  '主人公は今年も西宮にやってきた。',
  '老杜氏のもとで十年、真面目に技を磨いてきた。',
  'だがその年、本蔵の杜氏が急病で倒れたという知らせが届く……。',
  'そして今、主人公は思いがけず本蔵を任されることになった――。'
];

//
type Props = {
  onFinish: () => void;
};

export default function IntroNarration({ onFinish }: Props) {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < narrationLines.length - 1) {
      setIndex(index + 1);
    } else {
      onFinish(); // 次の画面（吉左衛門など）へ遷移
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="text-xl sm:text-2xl md:text-3xl mb-6">
        {narrationLines[index]}
      </div>
      <button
        onClick={handleNext}
        className="bg-[#4a4a4a] text-white text-base px-6 py-2 rounded"
      >
        {index < narrationLines.length - 1 ? '続ける' : '次へ'}
      </button>
    </main>
  );
}
