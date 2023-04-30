export interface IMessage {
  _id?: string;
  from?: string;
  to?: string;
  message?: string;
  deleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
