interface BankAction {
  id: string;
  route?: string;
}

interface BankConfig {
  actions: BankAction[];
  fundLimits: {
    min: number;
    max: number;
  };
}

export const bankConfig: Record<string, BankConfig> = {
  USCCU: {
    actions: [
      { id: 'fund', route: '/fund-account' },
      { id: 'requestDebit', route: '/request-debit-card' },
      { id: 'accessDigitalBanking' },
      { id: 'addNewChecking' },
      { id: 'connectDirectDeposit' },
    ],
    fundLimits: { min: 10, max: 100000 },
  },
  SCU: {
    actions: [
      { id: 'fund', route: '/fund-account' },
      { id: 'scheduleMeeting' },
      { id: 'requestDebit', route: '/request-debit-card' },
      { id: 'openAccount' },
    ],
    fundLimits: { min: 26.74, max: 999999999 },
  },
  FFFCU: {
    actions: [
      { id: 'fund', route: '/fund-account' },
      { id: 'addBeneficiary' },
      { id: 'accessDigitalBanking' },
      { id: 'requestDebit', route: '/request-debit-card' },
      { id: 'openShare' },
    ],
    fundLimits: { min: 0, max: 50000 },
  },
};
