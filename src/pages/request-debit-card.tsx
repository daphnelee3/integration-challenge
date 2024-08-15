import React, { useState } from 'react';
import { useRouter } from 'next/router';
import FormInput from '@/components/FormInput';
import { toast } from 'react-toastify';

type FormData = {
  street1: string;
  street2: string;
  city: string;
  state: string;
  zipCode: string;
};

const RequestDebitCard = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    street1: '',
    street2: '',
    city: '',
    state: '',
    zipCode: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { street1, city, state, zipCode } = formData;

    if (
      !street1.trim() ||
      !city.trim() ||
      !state.trim() ||
      !zipCode.trim() ||
      !/^\d{5}(-\d{4})?$/.test(zipCode) // Validate zip code format (5 digits or 5+4 digits)
    ) {
      setError('Please fill out all required fields with valid data.');
      return;
    }

    try {
      const response = await fetch('/api/request-debit-card', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to request debit card');
      }
      console.log(response);

      toast.success(`Your debit card has been requested!`);

      router.push({
        pathname: '/',
        query: { checkedItem: 'requestDebit' },
      });
    } catch (err) {
      setError((err as Error).message || 'An unknown error occurred.');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Request a Debit Card</h1>

      {error && <p className="text-red-600">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormInput
          id="street1"
          name="street1"
          value={formData.street1}
          onChange={handleChange}
          label="Street 1"
          required
        />
        <FormInput
          id="street2"
          name="street2"
          value={formData.street2}
          onChange={handleChange}
          label="Street 2 (Apt/Suite #, etc.)"
        />
        <FormInput
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          label="City"
          required
        />
        <FormInput
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          label="State"
          required
        />
        <FormInput
          id="zipCode"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          label="Zip Code"
          required
        />
        <button className="bg-blue-500 text-white p-2 rounded">
          Request Card
        </button>
      </form>
    </div>
  );
};

export default RequestDebitCard;
