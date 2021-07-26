module.exports={
    configureWebpack:{
        resolve:{
            alias:{
                //@指向src
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views'
            }
        }
    }
}