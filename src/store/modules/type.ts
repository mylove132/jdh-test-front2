export interface Code {
  id?: number;
  name: string;
  code: string;
  lang: string;
  theme: string;
  desc?: string;
}

export interface WsData {
  msg: string;
}