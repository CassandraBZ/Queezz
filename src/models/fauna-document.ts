export interface FaunaDocument<T> {
  ref: { id: string };
  ts: number;
  data: T;
}
