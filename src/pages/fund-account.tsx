import { useState } from 'react';
import { useRouter } from 'next/router';
import { useBankContext } from '@/context/BankContext';
import { bankConfig } from '@/data/bankConfig';
import { toast } from 'react-toastify';

const FundAccount = () => {
  const { bank } = useBankContext();
  const router = useRouter();
  const [amount, setAmount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { min, max } = bankConfig[bank].fundLimits;

  const handleSubmit = async () => {
    if (amount === null) {
      setError('Please enter an amount.');
      return;
    }

    try {
      const response = await fetch('/api/fund-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, bank }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Something went wrong.');
      }

      const data = await response.json();
      console.log(data);

      toast.success(`Your deposit of $${amount} succeeded!`);

      router.push({
        pathname: '/',
        query: { checkedItem: 'fund' },
      });
    } catch (err) {
      setError((err as Error).message || 'An unknown error occurred.');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Fund Your Account</h1>

      <p className="text-gray-700 mb-4">
        {`Please enter an amount to deposit into your account. ${bank} has the following funding limits:`}
      </p>
      <ul className="list-disc list-inside mb-4">
        <li>Minimum: ${min}</li>
        <li>Maximum: ${max}</li>
      </ul>

      <input
        type="number"
        placeholder="Enter deposit amount"
        className="border p-2 mb-4 w-full"
        value={amount || ''}
        onChange={(e) => {
          setError(null);
          setAmount(parseFloat(e.target.value));
        }}
      />

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Submit
      </button>
    </div>
  );
};

export default FundAccount;
