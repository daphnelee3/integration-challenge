import { BankName } from './types';

type Action = {
  isChecked: boolean;
  route?: string;
};

type BankActions = {
  [key: string]: Action; // key is the action id
};

type FundLimits = {
  min: number;
  max: number;
};

export type BankConfig = {
  actions: BankActions;
  fundLimits: FundLimits;
};

export const bankConfig: Record<BankName, BankConfig> = {
  USCCU: {
    actions: {
      fund: { isChecked: false, route: '/fund-account' },
      requestDebit: { isChecked: false, route: '/request-debit-card' },
      accessDigitalBanking: { isChecked: false },
      addNewChecking: { isChecked: false },
      connectDirectDeposit: { isChecked: false },
    },
    fundLimits: { min: 10, max: 100000 },
  },
  SCU: {
    actions: {
      fund: { isChecked: false, route: '/fund-account' },
      scheduleMeeting: { isChecked: false },
      requestDebit: { isChecked: false, route: '/request-debit-card' },
      openAccount: { isChecked: false },
    },
    fundLimits: { min: 26.74, max: 999999999 },
  },
  FFFCU: {
    actions: {
      fund: { isChecked: false, route: '/fund-account' },
      addBeneficiary: { isChecked: false },
      accessDigitalBanking: { isChecked: false },
      requestDebit: { isChecked: false, route: '/request-debit-card' },
      openShare: { isChecked: false },
    },
    fundLimits: { min: 0, max: 50000 },
  },
};
