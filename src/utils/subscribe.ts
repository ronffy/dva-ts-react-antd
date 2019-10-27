/**
 * 订阅方法
 * @param {*} listener 
 * @param {*} listeners 
 * @author ronffy
 */

type Listener = (...args: any[]) => any

export default function subscribe(listener: Listener, listeners: Listener[]) {
  if (typeof listener !== 'function') {
    throw new Error('Expected listener to be a function.');
  }

  let isSubscribed = true;
  listeners.push(listener);

  return function unsubscribe() {
    if (!isSubscribed) {
      return;
    }
    isSubscribed = false;

    const index = listeners.indexOf(listener);
    listeners.splice(index, 1);
  }
}
