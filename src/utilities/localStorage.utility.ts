export const persistLocalStroge = <T,>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify({ ...value }));
};

export const clearLocalStroge = (key: string) => {
  localStorage.removeItem(key);
};
