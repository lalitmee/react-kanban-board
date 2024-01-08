export type Tag = string;

export enum Status {
  TODO,
  INPROGRESS,
  BACKLOG,
  DONE,
  CANCELED,
}

export interface Ticket {
  id: string;
  title: string;
  tag: Tag[];
  userId: string;
  status: string;
  priority: number;
}

export interface User {
  id: string;
  name: string;
  available: boolean;
}

export interface TicketWithUser extends Ticket {
  user: User;
}

export interface KanbanData {
  tickets: Ticket[];
  users: User[];
}

export interface Option {
  value: number | string;
  label: string;
}

export interface Pillar {
  [key: string]: TicketWithUser[];
  [key: number]: TicketWithUser[];
}

export type HtmlSelectEvent = React.ChangeEvent<HTMLSelectElement>;

export interface Options {
  orderBy: string;
  groupBy: string;
}

export interface BoardContextType {
  options: Options;
  setOptions: React.Dispatch<React.SetStateAction<Options>>;
}
