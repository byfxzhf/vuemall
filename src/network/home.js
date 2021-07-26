import {request2,request3} from "./request"
export function getHomeMultidata(){

  return request2({
    url:'/home/multidata'
  })
}
