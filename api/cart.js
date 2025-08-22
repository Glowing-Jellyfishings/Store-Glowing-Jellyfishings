let cart = [];

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { productId } = req.body;
    cart.push(productId);
    res.status(200).json({ success: true, cart });
  } else if (req.method === 'GET') {
    res.status(200).json({ cart });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
