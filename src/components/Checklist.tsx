import React, { useState, useEffect } from 'react';
import styles from '@/styles/Checklist.module.css';
import { useRouter } from 'next/router';
import { useBankContext } from '../context/BankContext';
import ProgressBar from 'react-progressbar';
import OnboardingItem from './OnboardingItem';

export default function Checklist() {
  const { bank, bankData } = useBankContext();
  const router = useRouter();

  const handleItemClick = (id: string) => {
    if (bankData[id].route) {
      router.push(bankData[id].route);
    }
  };

  const checklistItems = Object.entries(bankData);

  // progress bar calculation
  const totalItems = checklistItems.length;
  const checkedItems = checklistItems.filter(
    ([_, item]) => item.isChecked
  ).length;
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
        {checklistItems.map(
          ([id, { title, isChecked }]) => (
            console.log(id, title, isChecked),
            (
              <OnboardingItem
                key={id}
                id={id}
                checked={isChecked}
                title={title}
                onClick={() => handleItemClick(id)}
              />
            )
          )
        )}
      </div>
    </div>
  );
}
