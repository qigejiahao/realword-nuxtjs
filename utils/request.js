/**
 * 基于axiosd封装的请求模块 
 */

import axios from 'axios'

const request = axios.create({
    //baseURL:'https://conduit.productionready.io'
    baseURL:'http://realworld.api.fed.lagounews.com'
})

//请求拦截器
//响应拦截器

export default  request