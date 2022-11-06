import {create} from 'axios';
import URLs from './URLs.js';

const appkey = 'DuYiyongzhi_1564986206465';
const ajax = create({
    baseURL:URLs.baseURL,
    params: {
        appkey
      }
});

const login = options => ajax({
    url:URLs.login,
    method:'post',
    params:{
        ...options
    }
})

const logon = options => ajax({
    url:URLs.logon,
    method:'post',
    params:{
        ...options,
    }
})

const getStu = (page,size) => ajax({
    url:URLs.findByPage,
    method:'get',
    params:{
        // ...options,  // ...：es6新增特性，用于取出参数中的所有可遍历对象
        page,
        size
    }
})

const delStu = options => ajax({
    url:URLs.delStu,
    method:'get',
    params:{
        ...options,
    }
})

const addStu = sNo => ajax({
    url:URLs.addStu,
    method:'get',
    params:{
        sNo,
    }
})
const updateStu = options => ajax({
    method: 'get',
    url: URLs.updateStu,
    params: {
      ...options
    }
  });

// 添加响应拦截器
// axios.interceptors.request.use
ajax.interceptors.response.use(data => data.data);

export default{
    login,
    logon,
    getStu,
    delStu,
    addStu,
    updateStu,
}