define(['ky','text!tpl/art/index.html'],function(ky,artTpl){

	var data = {
		title:'this is the art tpl',
		data:[
		    {id:1,name:'name1',value:'value1'},
		    {id:2,name:'name2',value:'value2'},
		    {id:3,name:'name3',value:'value3'},
		    {id:4,name:'name4',value:'value4'}
		]
	};

	//art template
	var h = template.render(artTpl,data);
	$('#artTemplate').html(h);

	//underscore
	require(['text!tpl/underscore/index.html'],function(tpl){
		data.title = 'this is the underscore tpl';
		$('#underscore').html(_.render(tpl,data));
	});

	//packages 配置import 方式
	//可以预先定义各模块导入，再使用packages 导入（短域名方式访问）
	require(["cart1", "store2"],function (cart,store) {
	    console.log(cart);
	    console.log(store);
	});

	
	require(['js/test3/test3'],function(t){
		console.log(t);
	});

	require(['test4'],function(t){
		console.log(t);
	});
});
