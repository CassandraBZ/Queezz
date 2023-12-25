import { FaunaDocument } from './fauna-document';

export type RoomDocument = FaunaDocument<{
  link: string,
  // ...
}>;
