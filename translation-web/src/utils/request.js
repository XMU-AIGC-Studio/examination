import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
    baseURL: 'http://localhost:8080',
    // 超时
    timeout: 10000
})

export default service