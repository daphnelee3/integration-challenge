import {
  RadioButtonCheckedIcon,
  RadioButtonIcon,
  RadioButtonOutlinedIcon,
} from '@/assets/icons/IconLibrary';

type OnboardingCheckboxProps = { checked?: boolean; focused?: boolean };

const OnboardingCheckbox = ({
  checked,
  focused = false,
}: OnboardingCheckboxProps) => {
  if (focused)
    return (
      <RadioButtonOutlinedIcon width={24} height={24} className="text-main" />
    );
  if (checked)
    return (
      <RadioButtonCheckedIcon
        width={24}
        height={24}
        className="text-gray-100"
      />
    );

  return <RadioButtonIcon width={24} height={24} className="text-gray-300" />;
};

export default OnboardingCheckbox;
