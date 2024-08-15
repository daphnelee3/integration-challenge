import { bankConfig } from '@/data/bankConfig';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { amount, bank } = req.body;

      const bankFunds = bankConfig[bank].fundLimits;

      if (!bank) {
        return res.status(400).json({ error: 'Invalid bank.' });
      }

      if (amount < bankFunds.min || amount > bankFunds.max) {
        return res.status(400).json({
          success: false,
          message: `Funding amount must be between ${bankFunds.min} and ${bankFunds.max}`,
        });
      }

      res.status(200).json({ success: true, message: 'Funding successful' });
    } catch (error) {}
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
