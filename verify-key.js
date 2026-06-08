export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const key = req.query.key;

  const validKeys = ["PORS-TEST123", "PORS-ABC999"];

  if (validKeys.includes(key)) {
    return res.status(200).json({ valid: true });
  }

  return res.status(200).json({ valid: false });
}
