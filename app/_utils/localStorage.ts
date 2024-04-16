function saveToLocalStorage(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key: string) {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}

function removeFromLocalStorage(key: string) {
  localStorage.removeItem(key);
}

export { getFromLocalStorage, removeFromLocalStorage, saveToLocalStorage };
