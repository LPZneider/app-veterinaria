export interface Pages {
  title: string;
  path: string;
}
export interface Settings {
  title: string;
  path: string;
}

export interface PropsNav {
  pages: Pages[];
  settings: Settings[];
}
