import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BankContextType {
  bank: string;
  setBank: React.Dispatch<React.SetStateAction<string>>;
}

const BankContext = createContext<BankContextType>({
  bank: 'USCCU',
  setBank: () => {},
});

export const BankContextProvider = ({ children }: { children: ReactNode }) => {
  const [bank, setBank] = useState<string>('USCCU');

  return (
    <BankContext.Provider value={{ bank, setBank }}>
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
