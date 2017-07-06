var reqConfig = {
    //指定模块根路径
    baseUrl: '',//location.pathname + 
    //传递一个配置信息到模块
    config:{
        //若要将config传给包，将目标设置为包的主模块而不是包ID
        'cart1/cart' : {
            size:'large'
        },
        'store2/main' : {
            color:'red'
        },

        //非packages 配置参数
        //未配置path方式
        'js/test3/test3':{
            param:'test3'
        },
        //配置paths 方式
        'test4':{
            type:'paths type'
        }
    },
    //配置从CommonJS 包来加载模块
    packages:[
        {
            name:'cart1',
            location:'js/cart',
            main:'cart' //main.js 对应的别名
        },
        {
            name:'store2',
            location:'js/store'
        }
    ],
    //RequireJS获取资源时附加在URL后面的额外的query参数。作为浏览器或服务器未正确配置时的“cache bust”手段很有用
    urlArgs: "v=1.0.0",
    //全局依赖，优先shim配置依赖
    deps:[
        'css!resources/css/base.css'
    ],
    /**
     * 在deps加载完毕后执行的函数。
     * 当将require设置为一个config object在加载require.js之前使用时很有用，
     * 其作为配置的deps数组加载完毕后为require指定的函数。
     * @return {Function} [description]
     */
    callback: function(){
        //debugger;
        //alert('=========');
    },
    //为了在IE中正确检错，强制define/shim导出检测  
    //enforceDefine: true,  
    /**
     * 声明依赖项、外部输出等
     * 为那些没有使用define()来声明依赖关系、设置模块的"浏览器全局变量注入"型脚本做依赖和导出配置
     */
    shim:{
        jquery:{
            exports: '$'
        },
        jqueryui:{//依赖css 模块，需导入require css.js
            deps: ['jquery','css!resources/css/jqueryui/jquery-ui.min.css'],
            exports: 'jqueryui'
        },
        underscore:{
            exports:'_'
        },
        template:{
            exports:'template',
        },
        bootstrap:{
            deps: ['jquery'],
            exports:'$'
        },
        ky:{//use ky 模块，会依赖import jquery underscore template bootstrap
            deps:['jquery','underscore','template','bootstrap','jqueryui'],
            exports:'ky'
        }
    },
    //对于给定的相同的模块名，加载不同的模块，而不是加载相同的模块
    map:{
        '*' : {//load require ext css.js
            'css':'js/lib/require/css'
        }
    },
    /**
     * 指定模块的加载路径
     * path映射那些不直接放置于baseUrl下的模块名(这相当于跟冗长的模块名取个简介的名字)。设置path时起始位置是相对于baseUrl的
     */
    paths: {//配置js lib 路径
       text:'js/lib/require/text',
       jquery:'js/lib/jquery/jquery.min',
       /**
       jquery:[
            'http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min',  
            //若CDN加载错，则从如下位置重试加载  
            'lib/jquery'  
       ],**/
       jqueryui:'js/lib/plugins/jquery-ui.min',
       template:'js/lib/tmp/template.min',
       underscore:'js/lib/tmp/underscore.min',
       bootstrap:'js/lib/bootstrap3/js/bootstrap.min',
       ky:'js/lib/ky/ky',

       i18n : 'js/lib/require/i18n',

       test4 : 'js/test4/test4'
    }
};

require.config(reqConfig);