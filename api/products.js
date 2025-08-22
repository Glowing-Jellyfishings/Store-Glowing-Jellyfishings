export default function handler(req, res) {
  res.status(200).json([
    { id: 1, name: "Surface Pro 9", price: 999 },
    { id: 2, name: "Xbox Series X", price: 499 },
    { id: 3, name: "Microsoft 365", price: 69 }
  ]);
}
