interface FormInputProps {
  id: string;
  name: string;
  type?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  required?: boolean;
}

const FormInput = ({
  id,
  name,
  type = 'text',
  value,
  onChange,
  label,
  required = false,
}: FormInputProps) => {
  return (
    <div>
      <label htmlFor={id} className="block">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="border p-2 w-full"
        required={required}
      />
    </div>
  );
};

export default FormInput;
