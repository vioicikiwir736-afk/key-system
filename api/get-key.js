export default function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ success: false, error: "Only GET allowed" });
  }

  // generate key random
  const key = "PORS-" + Math.random().toString(36).substring(2, 10).toUpperCase();

  return res.status(200).json({
    success: true,
    key: key
  });
}
