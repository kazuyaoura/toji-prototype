'use client';

import Image from 'next/image';
import { useContext } from 'react';
import { MoneyContext } from '@/contexts/MoneyContext';

export default function MoneyDisplay() {
  const { money } = useContext(MoneyContext);

  return (
    <div className="absolute top-2 right-2 w-[120px] z-50">
      <div className="relative w-full">
        <Image
          src="/ui_money_display_board.png"
          alt="所持金"
          width={120}
          height={100}
          className="w-full h-auto"
        />
        <span className="absolute top-[58%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-[18px] text-black drop-shadow-text">
          ¥{money.toLocaleString()}
        </span>
      </div>
    </div>
  );
}
