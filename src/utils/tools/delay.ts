export const delay = (times: number): Promise<void> => new Promise(resolve => setTimeout(() => resolve(), times))
