export interface Share {
  share: string;
  value: number;
  icon: string;
  wkn: string;
}


export type ShareView = Share & {
  diff: number | null;
}
