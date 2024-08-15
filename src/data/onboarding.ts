interface OnboardingItem {
  id: string;
  checked?: boolean;
  focused?: boolean;
  title: string;
  onClick: () => void;
}

const onboardingList: OnboardingItem[] = [
  {
    id: 'fund',
    checked: false,
    title: 'Make a deposit into your account',
    onClick: () => {},
  },
  {
    id: 'scheduleMeeting',
    checked: false,
    title: 'Schedule a meeting with your wealth manager',
    onClick: () => {},
  },
  {
    id: 'accessDigitalBanking',
    checked: false,
    title: 'Access online banking',
    onClick: () => {},
  },
  {
    id: 'addNewChecking',
    checked: false,
    title: 'Add a checking account',
    onClick: () => {},
  },
  {
    id: 'requestDebit',
    checked: false,
    title: 'Request a debit card',
    onClick: () => {},
  },
  {
    id: 'addBeneficiary',
    checked: false,
    title: 'Add a beneficiary',
    onClick: () => {},
  },
  {
    id: 'openShare',
    checked: false,
    title: 'Open a certificate of deposit',
    onClick: () => {},
  },
  {
    id: 'connectDirectDeposit',
    checked: false,
    title: 'Add/Switch Direct Deposit',
    onClick: () => {},
  },
  {
    id: 'openAccount',
    checked: false,
    title: 'Add an account',
    onClick: () => {},
  },
];

export const getOnboardingList = () => onboardingList;
