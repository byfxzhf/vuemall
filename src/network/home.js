import {request2,request3} from "./request"
export function getHomeMultidata(){
  //请求头部照片
  return request2({
    url:'/home/multidata'
  })
}
