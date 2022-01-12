export const getLocalStorage = (value) => window.localStorage.getItem(value);
export const setLocalStorage = (name, value) => window.localStorage.setItem(name, JSON.stringify(value));
export const removeLocalStorage = (value) => window.localStorage.removeItem(value);
