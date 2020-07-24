import axios, { AxiosResponse } from 'axios';

export const http = axios.create({
  // bot所在的地址
  baseURL: 'http://127.0.0.1:5700',
});

// 请求拦截器
http.interceptors.request.use(
  function (config) {
    // accessToken

    return config;
  },
  function (error) {
    // 处理请求错误
    return Promise.reject(error);
  },
);

// 响应拦截器
http.interceptors.response.use(
  function (response: AxiosResponse) {
    // 响应数据

    const data = response.data;
    // if (response.status === resCode.success) {
    //   if (data.code != resCode.success) {
    //     throw 'code != 200';
    //   }
    // } else {
    //   throw 'statuscode != 200';
    // }

    return data.data;
  },
  function (error) {
    throw error;
    //  处理相应错误
  },
);
