/* global window */

const localStorage = window.localStorage;

/**
 * 获取所有存储的数据
 */
function valueOf() {
  return localStorage.valueOf()
}

/**
 * 清空localStorage
 */
function clear() {
  localStorage.clear()
}

/**
 * 存储数据
 * @param {键} key 
 * @param {值} value 
 */
function setItem(key: string, value: any) {
  localStorage.setItem(key, value)
}

/**
 * 读取数据
 * @param {键} key 
 */
function getItem(key: string) {
  return localStorage.getItem(key)
}

/**
 * 删除某个变量
 * @param {键} key 
 */
function removeItem(key: string) {
  localStorage.removeItem(key)
}

/**
 * 检查localStorage里是否保存某个变量
 * @param {键} key 
 */
function hasOwnProperty(key: string) {
  return localStorage.hasOwnProperty(key)
}

const storage = {
  valueOf,
  clear,
  setItem,
  getItem,
  removeItem,
  hasOwnProperty,
};

export default storage;
