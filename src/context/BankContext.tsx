import { BankConfig, bankConfig } from '@/data/bankConfig';
import { BankName } from '@/data/types';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BankContextType {
  bank: BankName;
  setBank: React.Dispatch<React.SetStateAction<BankName>>;
  bankData: BankConfig;
}

const BankContext = createContext<BankContextType>({
  bank: BankName.USCCU,
  setBank: () => {},
  bankData: bankConfig[BankName.USCCU],
});

export const BankContextProvider = ({ children }: { children: ReactNode }) => {
  const [bank, setBank] = useState<BankName>(BankName.USCCU);

  const bankData = bankConfig[bank];

  return (
    <BankContext.Provider value={{ bank, setBank, bankData }}>
      {children}
    </BankContext.Provider>
  );
};

export const useBankContext = () => {
  const context = useContext(BankContext);
  if (context === undefined) {
    throw new Error('useBankContext must be used within a BankContextProvider');
  }
  return context;
};
