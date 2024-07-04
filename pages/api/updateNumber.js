// pages/api/updateNumber.js
import client from "../../lib/redisClient";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { increment } = req.body;
    try {
      let number = await client.get("number");
      number = number ? parseInt(number, 10) : 0;
      number += increment;
      await client.set("number", number.toString());
      res.status(200).json({ number });
    } catch (error) {
      res.status(500).json({ error: "Error updating number" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
