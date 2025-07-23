'use client';

import { createContext, useState, useContext, ReactNode } from 'react';

type MoneyContextType = {
  money: number;
  setMoney: (amount: number) => void;
  spend: (amount: number) => void;
};

export const MoneyContext = createContext<MoneyContextType>({
  money: 0,
  setMoney: () => {},
  spend: () => {},
});

export function MoneyProvider({ children }: { children: ReactNode }) {
  const [money, setMoney] = useState(0);

  const spend = (amount: number) => {
    setMoney((prev) => Math.max(0, prev - amount));
  };

  return (
    <MoneyContext.Provider value={{ money, setMoney, spend }}>
      {children}
    </MoneyContext.Provider>
  );
}
