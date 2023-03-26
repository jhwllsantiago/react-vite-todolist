const STORAGE_KEY = "todos";

export const saveToLocal = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const loadFromLocal = () => {
  return JSON.parse?.(localStorage.getItem(STORAGE_KEY));
};
