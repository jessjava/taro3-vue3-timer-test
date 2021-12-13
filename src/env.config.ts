/*
 * @Author: wujia
 * @Email: wujia8@jd.com
 * @Date: 2021-11-01 15:26:16
 * @Description: 环境参数配置
 */

const debug = process.env.NODE_ENV !== 'production'

// development
const development = {
    baseUrl: 'http://mock.jdfmgt.com/mock/6178c871704b6d121eb7970e',
    isMock: true,
    // baseUrl: 'http://10.13.154.145:8081', // 周宏达本地
    // baseUrl : 'http://10.222.48.138:8080', // 开发环境
    // baseUrl: 'http://10.222.8.27:8081', // 测试环境
    // baseUrl: 'http://10.222.24.161:8081',
    encryptKey: '12312saasndkcnsnalknsnwk', // 开发环境
    encryptSalt: 'test',
    version: '1.0.0',
    
}
// production
const production = {
    // baseUrl: 'http://mock.jdfmgt.com/mock/6178c871704b6d121eb7970e',
    // isMock: true,
    // baseUrl : 'http://10.222.8.27:8081',
    baseUrl: 'http://10.222.24.161:8081',
    encryptKey: '12312saasndkcnsnalknsnwk',
    encryptSalt: 'test',
    version: '1.0.0',
}

export const ENV_CONFIG = {
    development,
    production,
}

// 当前脚本环境变量配置
export const NODE_ENV = process.env.NODE_ENV

// 当前 app 环境变量对应的配置
export const APP_ENV = ENV_CONFIG[NODE_ENV]

export default {
    debug,
    ENV_CONFIG,
    NODE_ENV,
    ...APP_ENV,
}
