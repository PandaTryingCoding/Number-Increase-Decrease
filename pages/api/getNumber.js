// pages/api/getNumber.js
import client from "../../lib/redisClient";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const number = await client.get("number");
      res.status(200).json({ number: number ? parseInt(number, 10) : 0 });
    } catch (error) {
      res.status(500).json({ error: "Error retrieving number" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
