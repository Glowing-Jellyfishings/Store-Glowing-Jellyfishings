export default function handler(req, res) {
  res.status(200).json([
    { id: 1, name: "Surface Pro 9", price: 999 },
    { id: 2, name: "Xbox Series X", price: 499 },
    { id: 3, name: "Microsoft 365", price: 69 },
    { id: 4, name: "Microsoft Gift Card - $25", price: 25 },
    { id: 5, name: "Microsoft Gift Card - $50", price: 50 },
    { id: 6, name: "Microsoft Gift Card - $100", price: 100 }
  ]);
}
