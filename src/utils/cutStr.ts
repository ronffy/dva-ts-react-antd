/**
 * 截断指定长度字符串，以指定标识结尾
 * @author ronffy
 */
import sliceString from './sliceString';

export default function cutStr(str: string, max: number, endSign: string = '...'): string {
  try {
    if (!str || typeof str !== 'string') {
      return '';
    }

    if (str.length <= max) {
      return str;
    }
    return sliceString(str, 0, max) + endSign
  } catch (error) {
    return ''
  }
}
