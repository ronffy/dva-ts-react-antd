
export { momentToTimeStampRange } from './moment'

export { getTemp, setTemp, setCache, getCache } from './cache'

export { delay } from './delay'

/**
 * 对象 to 数组 {0: 'a', 1: 'b'} -> ['a', 'b']
 * @param obj 
 */
export function objToArray(obj: any): any[] {
  const resault = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      let numKey = Number(key);
      if (numKey && typeof numKey === 'number') {
        const element = obj[key];
        resault.push(element);
      }
    }
  }
  return resault
}
