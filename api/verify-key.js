import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export default async function handler(req, res) {
  const key = req.query.key;

  const result = await redis.get(key);

  if (result === "valid") {
    return res.json({ valid: true });
  }

  return res.json({ valid: false });
}
