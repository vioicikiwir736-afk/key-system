import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export default async function handler(req, res) {
  const key = "PORS-" + Math.random().toString(36).substring(2, 10).toUpperCase();

  // simpan key ke database
  await redis.set(key, "valid");

  return res.json({
    success: true,
    key: key
  });
}
