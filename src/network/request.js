import axios from 'axios'

export function request(config){
    //创建实例
    const instance = axios.create({
        baseURL:'/text/message',
        timeout:200
    })
    return instance(config)

}
//     //拦截
//     instance.interceptors.request.use(config =>{
//         //释放
//         return config
//     },err => {

//     })

//     instance.interceptors.response.use(res =>{
//         return res.data
//     },err => {
//         //console.log(err);

//     })
//     //发送
//     return instance(config)
// }