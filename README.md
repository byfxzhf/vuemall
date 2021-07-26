# supermall

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
"# vuemall" 



## 文档

### 1.项目初始

#### 1.划分目录结构

#### 2.用两个css文件,对标签风格进行统一,以及对项目做一个基本设置

#### 3.建立vue.config.js 他会把文件里的内容和项目的webpack.config.js内容合并,我们在这里配置了别名等

#### .editconfig 编码习惯要求,可有可无

### 2.创建tabbar

1.tabbar的创建思路是通过建立两个组件来完成的,一个是下边框组件,一个是边框里的内容组件,包括tabbar的图片以及tabbar的文字

这里使用了具名插槽,在app.vue文件里使用tabbar组件,在插槽里面创建了三个自组件,子组件的内容使用了具名插槽.

2.此外使用了父传子属性,通过App.vue给Tabbaritem传递了两个属性,一个是文字颜色,一个是路由地址

3.tabbaritem的三个插槽只会同一时间存在两个,她有判断的,通过$router.path拿到当前路由,判断当前路由是否是和父组件传过来的path相等,如果相等,则通过v-if 觉得插槽去留,最后根据isActive计算属性,添加颜色

4.通过$router.replace实现路由跳转

### 3.导航navbar



### 4.网络请求



### 5.推荐信息

