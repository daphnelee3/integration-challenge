import { useBankContext } from '@/context/BankContext';
import styles from '@/styles/Header.module.css';
import { useState } from 'react';

const DropdownComponent = () => {
  const { bank, setBank } = useBankContext();
  const [isMenuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive((currStatus) => !currStatus);
  };

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdownSelect} onClick={toggleMenu}>
        <p className={styles.dropdownContainerText}>{bank}</p>
      </div>
      {isMenuActive && (
        <div className={styles.dropdownMenu}>
          <div className={styles.dropdownItem} onClick={() => setBank('USCCU')}>
            <div className={styles.dropdownText}>USCCU</div>
          </div>
          <div className={styles.dropdownItem} onClick={() => setBank('SCU')}>
            <div className={styles.dropdownText}>SCU</div>
          </div>
          <div className={styles.dropdownItem} onClick={() => setBank('FFFCU')}>
            <div className={styles.dropdownText}>FFFCU</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownComponent;
