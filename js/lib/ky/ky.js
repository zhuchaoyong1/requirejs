define((function(w,r){
	//扩展arttemplate
	!w.template && (w.template = r('template'))
	//扩展underscore 方法
	if(_){
		_.render = function(t,d,s){
			var c = _.template(t,s);
			return c(d || {});
		}
	}
	return function(){//return jquery define
		return r('jquery');
	}
})(this,require));