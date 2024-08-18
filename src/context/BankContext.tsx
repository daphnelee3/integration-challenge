import { BankActions, bankConfig, BankConfig } from '@/data/bankConfig';
import { BankName } from '@/data/types';
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

interface BankContextType {
  bank: BankName;
  setBank: React.Dispatch<React.SetStateAction<BankName>>;
  bankData: BankActions;
  setBankData: React.Dispatch<React.SetStateAction<BankActions>>;
}

const BankContext = createContext<BankContextType>({
  bank: BankName.USCCU,
  setBank: () => {},
  bankData: bankConfig[BankName.USCCU].actions,
  setBankData: () => {},
});

export const BankContextProvider = ({ children }: { children: ReactNode }) => {
  const [bank, setBank] = useState<BankName>(BankName.USCCU);
  const [bankData, setBankData] = useState<BankActions>(
    bankConfig[bank].actions
  );

  useEffect(() => {
    setBankData(bankConfig[bank].actions);
  }, [bank]);

  return (
    <BankContext.Provider value={{ bank, setBank, bankData, setBankData }}>
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
