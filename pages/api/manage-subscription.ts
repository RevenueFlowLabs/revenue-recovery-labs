import type { NextApiRequest, NextApiResponse } from 'next';

// This is a simple proxy to create a Lemon Squeezy customer portal link or manage subscription.
// In a real app you'd look up the customer's subscription ID and call the appropriate endpoint.

const LEMONSQUEEZY_API = 'https://api.lemonsqueezy.com/v1';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const apiKey = process.env.LEMON_SQUEEZY_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'Missing Lemon Squeezy key' });
    }

    // Example: create/manage portal session
    // here we'll just return a dummy URL or fetch from the API if you have a subscription id
    const response = await fetch(`${LEMONSQUEEZY_API}/customers/my/portal`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // payload depends on Lemon Squeezy API spec
      }),
    });

    const data = await response.json();
    // expect something like { url: 'https://app.lemonsqueezy.com/...' }

    if (!response.ok) {
      return res.status(response.status).json({ error: data });
    }

    return res.status(200).json({ url: data.url || 'https://app.lemonsqueezy.com' });
  } catch (err: any) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
}
