import { ChevronRightIcon } from '@/assets/icons/IconLibrary';
import OnboardingCheckbox from './OnboardingCheckbox';
import styles from '@/styles/Checklist.module.css';

export type OnboardingItemProps = {
  id: string;
  title: string;
  checked?: boolean;
  focused?: boolean;
  onClick: () => any;
};

const OnboardingItem = ({
  id,
  title,
  checked,
  focused,
  onClick,
}: OnboardingItemProps) => {
  return (
    <div
      className={`${styles.nextStepsStep + ' ' + styles.nextStepsStepPointer}`}
      id={id}
      onClick={onClick}
    >
      <div>
        <OnboardingCheckbox checked={checked} focused={focused} />
        <span>{title}</span>
      </div>
      <div>
        {!checked && (
          <ChevronRightIcon width={12} height={12} className="text-main" />
        )}
      </div>
    </div>
  );
};

export default OnboardingItem;
