/**
 * 截取指定长度字符串（正则为处理emoji）
 * @author ronffy
 */

export default function sliceString(str: string, start: number, end: number) {
  const arr = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g);
  if (!arr) {
    return '';
  }
  return arr.slice(start, end).join('');
}