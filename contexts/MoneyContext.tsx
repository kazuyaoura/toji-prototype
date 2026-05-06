'use client';

import {
  createContext,
  useState,
  ReactNode,
} from 'react';

type MoneyContextType = {
  money: number;
  setMoney: (amount: number) => void;
  spend: (amount: number) => boolean;
  earn: (amount: number) => void;
  resetMoney: () => void;
};

const INITIAL_MONEY = 10000;

export const MoneyContext =
  createContext<MoneyContextType>({
    money: INITIAL_MONEY,
    setMoney: () => {},
    spend: () => false,
    earn: () => {},
    resetMoney: () => {},
  });

export function MoneyProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [money, setMoney] =
    useState(INITIAL_MONEY);

  const spend = (amount: number) => {
    if (money < amount) {
      return false;
    }

    setMoney((prev) => prev - amount);
    return true;
  };

  const earn = (amount: number) => {
    setMoney((prev) => prev + amount);
  };

  const resetMoney = () => {
    setMoney(INITIAL_MONEY);
  };

  return (
    <MoneyContext.Provider
      value={{
        money,
        setMoney,
        spend,
        earn,
        resetMoney,
      }}
    >
      {children}
    </MoneyContext.Provider>
  );
}
