import { BankName } from './types';

type Action = {
  title: string;
  isChecked: boolean;
  route?: string;
};

export type BankActions = {
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
      fund: {
        title: 'Make a deposit into your account',
        isChecked: false,
        route: '/fund-account',
      },
      requestDebit: {
        title: 'Request a debit card',
        isChecked: false,
        route: '/request-debit-card',
      },
      accessDigitalBanking: {
        title: 'Access online banking',
        isChecked: false,
      },
      addNewChecking: { title: 'Add a checking account', isChecked: false },
      connectDirectDeposit: {
        title: 'Add/Switch Direct Deposit',
        isChecked: false,
      },
    },
    fundLimits: { min: 10, max: 100000 },
  },
  SCU: {
    actions: {
      fund: {
        title: 'Make a deposit into your account',
        isChecked: false,
        route: '/fund-account',
      },
      scheduleMeeting: {
        title: 'Schedule a meeting with your wealth manager',
        isChecked: false,
      },
      requestDebit: {
        title: 'Request a debit card',
        isChecked: false,
        route: '/request-debit-card',
      },
      openAccount: { title: 'Add an account', isChecked: false },
    },
    fundLimits: { min: 26.74, max: 999999999 },
  },
  FFFCU: {
    actions: {
      fund: {
        title: 'Make a deposit into your account',
        isChecked: false,
        route: '/fund-account',
      },
      addBeneficiary: { title: 'Add a beneficiary', isChecked: false },
      accessDigitalBanking: {
        title: 'Access online banking',
        isChecked: false,
      },
      requestDebit: {
        title: 'Request a debit card',
        isChecked: false,
        route: '/request-debit-card',
      },
      openShare: { title: 'Open a certificate of deposit', isChecked: false },
    },
    fundLimits: { min: 0, max: 50000 },
  },
};
