import fetch from 'dva/fetch';

interface CombineError extends Error {
  status?: number
}

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error: CombineError = new Error(response.statusText);
  error.status = response.status;
  throw error;
}


export default function request(url: string, options?: object): Promise<object> {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => data)
    .catch(err => ({ status: err.status, message: err.message }));
}
