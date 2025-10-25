import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    products: [
      { id: 1, name: 'Coffee Beans', price: 15 },
      { id: 2, name: 'Tea Pack', price: 8 }
    ]
  })
}
