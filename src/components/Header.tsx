import styles from '@/styles/Header.module.css';
import Image from 'next/image';
import uscLogo from '../assets/images/usc-header-logo.png';
import scuLogo from '../assets/images/scu-header-logo.png';
import fffcuLogo from '../assets/images/fffcu-header-logo.png';
import { useBankContext } from '../context/BankContext';
import DropdownComponent from './DropdownComponent';

export default function Header() {
  const { bank } = useBankContext();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftAlignedItems}>
          {bank === 'USCCU' && (
            <Image
              src={uscLogo}
              width={175}
              height={50}
              alt="Logo"
              priority={true}
            />
          )}
          {bank === 'SCU' && (
            <Image
              src={scuLogo}
              width={175}
              height={50}
              alt="Logo"
              priority={true}
            />
          )}
          {bank === 'FFFCU' && (
            <Image
              src={fffcuLogo}
              width={175}
              height={50}
              alt="Logo"
              priority={true}
            />
          )}
        </div>
        <div className={styles.rightAlignedItems}>
          <DropdownComponent />
        </div>
      </div>
    </>
  );
}
