import styles from '@/styles/Header.module.css';
import Image from 'next/image';
import uscLogo from '../assets/images/usc-header-logo.png';
import scuLogo from '../assets/images/scu-header-logo.png';
import fffcuLogo from '../assets/images/fffcu-header-logo.png';
import { useBankContext } from '../context/BankContext';
import DropdownComponent from './DropdownComponent';

const logoMapping = {
  USCCU: uscLogo,
  SCU: scuLogo,
  FFFCU: fffcuLogo,
};

export default function Header() {
  const { bank } = useBankContext();
  const logoSrc = logoMapping[bank];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftAlignedItems}>
          <Image
            src={logoSrc}
            width={175}
            height={50}
            alt={`${bank} Logo`}
            priority={true}
          />
        </div>
        <div className={styles.rightAlignedItems}>
          <DropdownComponent />
        </div>
      </div>
    </>
  );
}
