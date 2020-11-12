import axios from 'axios';

axios.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest'; // 配置请求头（推荐）
axios.defaults.timeout = 500000000;
//http request拦截器 请求拦截器
axios.interceptors.request.use(
  config => {
    //console.log(config);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//http response 拦截器（响应式拦截器）
axios.interceptors.response.use(
  response => {
    //请求成功对响应数据做处理
    if (response.status === 200) {
      return Promise.resolve(response);
    }
  },
  // 服务器状态码不是2开头的的情况
  // 这里可以跟你们的后台开发人员协商好统一的错误状态码
  // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
  // 下面列举几个常见的操作，其他需求可自行扩展
  error => {
    //响应错误做的处理

    if (error.response.status) {
      return error.response;
    }
  })

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, params = {}, headers) {
  headers = JSON.stringify(headers) == JSON.stringify({}) ? {
    'Content-Type': 'application/json; charset=utf-8',
    'X-Requested-With': 'XMLHttpRequest'
  } : headers;


  return new Promise((resolve, reject) => {
    axios.get(url, { params: params }, {headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
      .then(response => {
        if (response.status == 200) {
          resolve(response);
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}

export function post(url, data = {}, headers) {

  headers = JSON.stringify(headers) == JSON.stringify({}) ? {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest'
  } : headers;

  return new Promise((resolve, reject) => {
    axios.post(url, data, {
      headers: headers
    })
      .then(response => {

        if (response.status == 200) {
          resolve(response);
        }

      }, err => {

        reject(err)
      })
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url, data = {}, headers) {
  headers = JSON.stringify(headers) == JSON.stringify({}) ? {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest'
  } : headers;
  return new Promise((resolve, reject) => {
    axios.patch(url, data, {
      headers: headers
    })
      .then(response => {
        if (response.status == 200) {
          resolve(response);
        }
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}, headers) {
  headers = JSON.stringify(headers) == JSON.stringify({}) ? {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest'
  } : headers;
  return new Promise((resolve, reject) => {
    axios.put(url, data, {
      headers: headers
    })
      .then(response => {
        if (response.status == 200) {
          resolve(response);
        }
      }, err => {
        reject(err)
      })
  })
}


export function postForm(url, data = {}, headers) {
  headers = JSON.stringify(headers) == JSON.stringify({}) ? {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'X-Requested-With': 'XMLHttpRequest'
  } : headers;
  const formData = new FormData();
  if (data != null) {
    for (let key of Object.keys(data)) {
      formData.append(key, data[key]);
    }
  }
  return new Promise((resolve, reject) => {
    axios.post(url, formData, {
      headers: headers
    })
      .then(response => {
        if (response.status == 200) {
          resolve(response.data);
        }
      }, err => {
        reject(err)
      })
  })

}

