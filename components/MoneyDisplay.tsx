'use client';

import Image from 'next/image';
import { useContext } from 'react';
import { MoneyContext } from '@/contexts/MoneyContext';

export default function MoneyDisplay() {
  const { money } = useContext(MoneyContext);

  return (
    <div style={{ position: 'absolute', top: 10, right: 10, width: 120 }}>
      <div style={{ position: 'relative', width: '100%' }}>
        <Image
          src="/ui_money_display_board.png"
          alt="所持金"
          width={120}
          height={100}
          style={{ width: '100%', height: 'auto' }}
        />
        <span
          style={{
            position: 'absolute',
            top: '58%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontWeight: 'bold',
            fontSize: '18px',
            color: '#000',
            textShadow: '1px 1px 1px #fff',
          }}
        >
          ¥{money.toLocaleString()}
        </span>
      </div>
    </div>
  );
}
