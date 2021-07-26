import axios from "axios";
export function request(config,success,failure){
  //1.创建axios实例
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })
  //2.拦截器
  //拦截请求
  instance.interceptors.request.use(config=>{
    //比如请求的信息不符合服务器要求,索要在请求前要拦截下来
    //比如每次发送网络请求的时候,都希望在页面上显示一个图标,等请求成功在响应拦截里去掉
    //比如每次请求必须携带特殊的东西,比如登陆时候携带token,没有token或者token失效要去重新登陆
   // console.log(config,"config:");
    return config
  },err=>{
    });
  //拦截响应
  instance.interceptors.response.use(res=>{
   // console.log(res,"00000")
    return res
  },err=>{
    console.log(err,'00000');
  })

  //3.使用实例
  instance(config).then(res=>{
    //回调
    success(res)
  }).catch(err=>{
    failure(err)
  })
}

//回调第二种方式结合promise

export function request2(config){
  return new Promise((resolve,reject)=>{
    const instance = axios.create({
      baseURL :"http://152.136.185.210:7878/api/m5",
      timeout:5000
    })
    instance.interceptors.request.use(config=>{
      //比如请求的信息不符合服务器要求,索要在请求前要拦截下来
      //比如每次发送网络请求的时候,都希望在页面上显示一个图标,等请求成功在响应拦截里去掉
      //比如每次请求必须携带特殊的东西,比如登陆时候携带token,没有token或者token失效要去重新登陆
      // console.log(config,"config:");
      return config
    },err=>{
    });
    //拦截响应
    instance.interceptors.response.use(res=>{
      // console.log(res,"00000")
      return res.data
    },err=>{
      console.log(err,'00000');
    })

   // 可以这么写,但是instance的 axios.create方法 返回值就是promise.所以可以直接返回去,见request3
    instance(config).then(res=>{
      resolve(res)
    }).catch(err=>{
      reject(err)
    })

    // return instance(config)
  })

}

export function request3(config){
  const instance = axios.create({
    baseURL :"http://152.136.185.210:7878/api/m5",
    timeout:5000
  })
  return instance(config)
}
