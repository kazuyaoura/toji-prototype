'use client';

import { useContext } from 'react';
import { MoneyContext } from '@/contexts/MoneyContext';

export default function MoneyDisplay() {
  const { money } = useContext(MoneyContext);

  return (
    <div className="absolute top-3 right-3 z-50">
      <div
        className="
          bg-[#1b1b1b]
          border-4
          border-white
          rounded-xl
          px-4
          py-2
          shadow-lg
          min-w-[140px]
          text-center
        "
      >
        <div className="text-xs text-gray-300 font-bold tracking-wide">
          所持金
        </div>

        <div className="text-yellow-300 text-xl font-extrabold">
          ¥{money.toLocaleString()}
        </div>
      </div>
    </div>
  );
}
