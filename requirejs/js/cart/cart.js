define(function(require, exports, module) {
	//获取config 配置参数
	console.log(module.config().size);

	//alert(navigator.language);

	//国际化支持
	//根据 navigator.language or navigator.userLanguage 判断
	//require(['i18n!js/cart/nls/color'],function(cf){
	require(['i18n!cart1/nls/color'],function(cf){
		console.log(JSON.stringify(cf));
	});

	return {
		name:'packages cart cart.js'
	}
});