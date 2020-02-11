
import axios from 'axios'

// 请求的基准路径  在请求的时候 会将请求时候传递的参数 拼接起来  
axios.defaults.baseURL = '/api';

let admin_token = localStorage['admin_token'];

// 添加请求拦截器   在请求的过程中做一些事情   后来还没有接收到前端的请求
axios.interceptors.request.use(function (config) {
    config.headers.admin_token = localStorage['admin_token'];
    // 如果config.url == '/admin/login'  说明用户正在进行登陆操作
    // admin_token   每次当用户登陆的 时候  后台都会返回一个admin_token 有了这个admin_token 才能进行登陆之后的操作
    if (config.url == '/admin/login') {
        config.headers.admin_token = null;
    };
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
// 登陆
function login(data) {
    return axios.post('/admin/login', data)
}
// 获取用户列表
function user(data) {
    return axios({
        method: 'get',
        url: '/admin/wx_users',
        params: data,
    })
}


export {
    login,
    user
}
