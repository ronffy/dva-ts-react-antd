
import { Moment } from 'moment';

export const ipReg = /^((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))$/




export const getKeyText = (key: number | string, textConfig: object = {}): (number | string) => (key in textConfig ? textConfig[key] : key);

