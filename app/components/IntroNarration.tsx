'use client';

import { useState } from 'react';

const narrationLines = [
  '丹波の冬。',
  '主人公は今年も西宮にやってきた。',
  '老杜氏のもとで十年、真面目に技を磨いてきた。',
  'だがその年、本蔵の杜氏が急病で倒れたという知らせが届く……',
  'そして今、主人公は思いがけず本蔵を任されることになった――。'
];

export default function IntroNarration({ onFinish }: { onFinish: () => void }) {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < narrationLines.length - 1) {
      setIndex(index + 1);
    } else {
      onFinish(); // 次の画面（吉左衛門など）へ遷移
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-[#fef9f5] text-center px-6">
      <div className="text-xl sm:text-2xl md:text-3xl text-gray-800 mb-12 leading-relaxed">
        {narrationLines[index]}
      </div>
      <button
        onClick={handleNext}
        className="bg-[#4a4a4a] text-white text-base px-5 py-2 rounded hover:bg-[#333]"
      >
        {index < narrationLines.length - 1 ? '▶ 続ける' : '▶ はじめる'}
      </button>
    </main>
  );
}
