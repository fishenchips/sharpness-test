// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2/promise";

type Data = {
  name: string;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse /* <Data> */
) => {
  if (req.method === "GET") {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT as any,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    });

    if (!connection) {
      res.status(500).json({ message: "Error connecting to the server." });
    }

    const query = "SELECT * FROM game_usage";

    const values = [];

    const result = await connection.execute(query, values);

    res.status(200).json({ result });
  }
};

export default handler;
