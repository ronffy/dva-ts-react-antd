export const setTemp = (key: string, value: object) => window.sessionStorage.setItem(key, JSON.stringify(value))

export const getTemp = (key: string) => JSON.parse(window.sessionStorage.getItem(key))

export const setCache = (key: string, value: object) => window.localStorage.setItem(key, JSON.stringify(value))

export const getCache = (key: string) => JSON.parse(window.localStorage.getItem(key))
