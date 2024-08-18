import { bankConfig } from '@/data/bankConfig';
import { BankName } from '@/data/types';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { amount, bank } = req.body;

      if (!bank || !(bank in bankConfig)) {
        return res.status(400).json({ error: 'Invalid bank.' });
      }

      const { min, max } = bankConfig[bank as BankName].fundLimits;

      if (amount < min || amount > max) {
        return res.status(400).json({
          success: false,
          message: `Funding amount must be between ${min} and ${max}`,
        });
      }

      return res
        .status(200)
        .json({ success: true, message: 'Funding successful' });
    } catch (error) {
      return res.status(500).json({ error: 'An unexpected error occurred.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
