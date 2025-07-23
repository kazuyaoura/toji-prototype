'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type MoneyContextType = {
  money: number;
  setMoney: (amount: number) => void;
};

export const MoneyContext = createContext<MoneyContextType>({
  money: 0,
  setMoney: () => {},
});

export function MoneyProvider({ children }: { children: ReactNode }) {
  const [money, setMoney] = useState(0);

  return (
    <MoneyContext.Provider value={{ money, setMoney }}>
      {children}
    </MoneyContext.Provider>
  );
}
