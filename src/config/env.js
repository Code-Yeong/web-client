/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 * 
 */
let baseUrl = ''; 
let routerMode = 'hash';
let baseImgPath;

if (process.env.NODE_ENV == 'development') {
	// baseUrl = '';
    // baseImgPath = '/img/';
    baseUrl = '//wd.chivan.cn:3000';
    baseImgPath = '//wd.chivan.cn:3000/images/';
}else{
	// baseUrl = '//elm.cangdu.org';
    // baseImgPath = '//elm.cangdu.org/img/';
    baseUrl = '//wd.chivan.cn:3000';
    baseImgPath = '//wd.chivan.cn:3000/images/';
}

export {
	baseUrl,
	routerMode,
	baseImgPath
}
