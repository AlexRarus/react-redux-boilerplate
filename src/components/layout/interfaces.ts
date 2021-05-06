export interface IMenuItem {
  id: string;
  label: string;
  url?: string;
  onClick?(id: string): void;
}
