import axios from 'axios'
import qs from 'qs'
axios.defaults.headers.post['Content-type']="application/x-www-form-urlencoded;chartset=UTF-8"
axios.defaults.timeout = 1000;
//请求拦截
axios.interceptors.request.use(function(config){
    let user = JSON.parse(window.localStorage.getItem('userInfo'));
    if(user && user.buyer_id){
        config.headers['tocken'] = user.tocken
        if(config.method === 'post'){
            config.data = {
                ...config.data
            }
        }else if(config.method === 'get'){
            config.params = {
                ...config.data
            }
            config.url = config.url +='/aaa'
        }
    }
    return config
},function(error){
    return Promise.reject(error)
})
//响应拦截器
axios.interceptors.response.use(function(response){
    if(response.status === 200){
        return Promise.resolve(response);
    }else{
        return Promise.reject(response)
    }
},function(error){
    return Promise.reject(error)
})
// 封装请求
export function get(url,params){
    return new Promise((resolve,reject) => {
        axios.get(url,{
            params:params
        }).then(res=>{
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    })
}
export function post(url,params){
    return new Promise((resolve,reject) => {
        axios.post(url,qs.stringify(params))
        .then(res=>{
            resolve(res.data)
        })
        .catch(err=>{
            reject(err.data)
        })
    })
}