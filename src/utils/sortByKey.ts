/**
 * object 排序
 * @param {*} obj 
 */
export default function sortByKey(obj: any) {
  const newkey = Object.keys(obj).sort();
  const newObj = {};
  for (let i = 0; i < newkey.length; i++) {
    newObj[newkey[i]] = obj[newkey[i]];
  }
  return newObj;
}
