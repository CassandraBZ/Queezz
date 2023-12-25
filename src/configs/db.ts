import { Client, query } from "faunadb";

const client = new Client({
  secret: import.meta.env.VITE_FAUNA_KEY,
});

export { client, query as q };
