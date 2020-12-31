import {request} from 'network/request'

// 获取首页数据

export function homeData() {
  return request({
    url:'/home/multidata'
  })
}