import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { street1, street2, city, state, zipCode } = req.body;

    if (!street1 || !city || !state || !zipCode) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    return res.status(200).json({ message: 'Debit card request successful.' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
