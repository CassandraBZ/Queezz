import faunadb from "faunadb";

const client = new faunadb.Client({
  secret: import.meta.env.VITE_FAUNA_KEY,
});
const q = faunadb.query;

export { client, q };
