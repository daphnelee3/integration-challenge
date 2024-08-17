import { useBankContext } from '@/context/BankContext';
import { BankName } from '@/data/types';
import styles from '@/styles/Header.module.css';
import { useEffect, useRef, useState } from 'react';

interface DropdownItemProps {
  bankName: BankName;
  onSelect: (bank: BankName) => void;
}

const DropdownItem = ({ bankName, onSelect }: DropdownItemProps) => (
  <div className={styles.dropdownItem} onClick={() => onSelect(bankName)}>
    <div className={styles.dropdownText}>{bankName}</div>
  </div>
);

const DropdownComponent = () => {
  const { bank, setBank } = useBankContext();
  const [isMenuActive, setMenuActive] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuActive((currStatus) => !currStatus);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const bankOptions = [BankName.USCCU, BankName.SCU, BankName.FFFCU];

  return (
    <div className={styles.dropdownContainer} ref={menuRef}>
      <div className={styles.dropdownSelect} onClick={toggleMenu}>
        <p className={styles.dropdownContainerText}>{bank}</p>
      </div>
      {isMenuActive && (
        <div className={styles.dropdownMenu}>
          {bankOptions.map((bank) => (
            <DropdownItem key={bank} bankName={bank} onSelect={setBank} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownComponent;
