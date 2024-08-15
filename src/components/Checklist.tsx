import React, { useState, useEffect } from 'react';
import styles from '@/styles/Checklist.module.css';
import { useRouter } from 'next/router';
import { useBankContext } from '../context/BankContext';
import ProgressBar from 'react-progressbar';
import { getOnboardingList } from '@/data/onboarding';
import OnboardingItem, { OnboardingItemProps } from './OnboardingItem';
import { bankConfig } from '@/data/bankConfig';

export default function Checklist() {
  const { bank } = useBankContext();
  const router = useRouter();
  const [items, setItems] = useState<OnboardingItemProps[]>(
    getOnboardingList()
  );

  useEffect(() => {
    if (router.query.checkedItem) {
      const itemId = router.query.checkedItem as string;
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId ? { ...item, checked: true } : item
        )
      );
    }
  }, [router.query.checkedItem]);

  const handleCheck = (id: string) => {
    const action = bankConfig[bank]?.actions.find((action) => action.id === id);

    if (action?.route) {
      router.push(action.route);
    } else {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, checked: !item.checked } : item
        )
      );
    }
  };

  const filteredItems = items.filter((item) =>
    bankConfig[bank]?.actions.some((action) => action.id === item.id)
  );

  // progress bar calculation
  const totalItems = filteredItems.length;
  const checkedItems = filteredItems.filter((item) => item.checked).length;
  const progress = totalItems > 0 ? (checkedItems / totalItems) * 100 : 0;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="my-4">
        <ProgressBar
          completed={progress}
          color="#4caf50"
          height="20px"
          className="rounded-full"
        />
        <div className="text-center text-sm mt-2 text-gray-600">
          {Math.round(progress)}%
        </div>
      </div>
      <div className="space-y-4">
        {filteredItems.map(({ id, title, checked, focused, onClick }) => (
          <OnboardingItem
            key={id}
            id={id}
            checked={checked}
            focused={focused}
            title={title}
            onClick={() => handleCheck(id)}
          />
        ))}
      </div>
    </div>
  );
}
