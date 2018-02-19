import { query } from "services/example";

export enum ArrayMode {
  MUL = "multiple",
  SPLIT = "split"
}

interface StringifyFn {
  (obj: Object, option?: Option): string
}

interface Option {
  suffix?: string,
  arrayMode?: ArrayMode
}

interface ParseFn {
  (str: string, option?: Option): object
}

/******************************************************************************************
arrayStringify::(string,any[],ArrayMode)->String

arrayStringify("key",[1,2,3,4],ArrayMode.MUL)  --->  "key=1&key=2&key=3&key=4&"  

arrayStringify("key",[1,2,3,4],ArrayMode.SPLIT) --->  "key=1,2,3,4&"
******************************************************************************************/
const arrayStringify = (key: string, arr: any[], arrayMode: ArrayMode): string =>
  arrayMode === ArrayMode.MUL
    ?
    arr.reduce((total, item) => total + `${key}=${item}&`, "")
    :
    `${key}=${arr.join(",")}&`


/******************************************************************************************
arrayParse::(string,string,ArrayMode)->String

arrayStringify("key",[1,2,3,4],ArrayMode.MUL)  --->  "key=1&key=2&key=3&key=4"  

arrayStringify("key",[1,2,3,4],ArrayMode.SPLIT) --->  "key=1,2,3,4&"
******************************************************************************************/


/******************************************************************************************
isArrayValue::any->boolean
******************************************************************************************/
const isArrayValue = value => (value !== null && value !== undefined && value.constructor === [].constructor)


/******************************************************************************************
reduceQueryString::ArrayMode->(string,[string,string])->string
******************************************************************************************/
const reduceQueryString = arrayMode => (sum, [key, value]) => (
  sum + (isArrayValue(value) ? arrayStringify(key, value, arrayMode) : `${key}=${value}&`)
)


/******************************************************************************************
stringify::(object,Option)->string
******************************************************************************************/
const stringify: StringifyFn = (obj, option = {}) => {

  const { suffix, arrayMode } = option

  let queryString = Object.entries(obj).reduce(reduceQueryString(arrayMode), suffix || "?")

  return queryString.substring(0, queryString.length - 1)
}


/******************************************************************************************
parse::(object,Option)->string
******************************************************************************************/
const parse: ParseFn = (str, option) => {

  const { arrayMode } = option

  let finalStr = str.startsWith("?") ? str.slice(1) : str,
    items = finalStr.split("&"),
    result = {}

  items.forEach(i => {

    let [key, value] = i.split("=")

    if (key in result && isArrayValue(result[key])) {
      return result[key] = [...result[key], value]
    }

    return result[key] = value
  })

  return result

}

export default {
  stringify,
  parse,
  ArrayMode
}



