'use strict';
var fl = window.fl || {};

(function(){
	
	/**
	
	FL.CORE
	
	**/

	fl.core = function(){
		var _nodes;
		this._el = {};
		return this;
	}

	fl.core.prototype.init = function(content,node){
		var _loadView = new fl.baseView('js/templates/load.html');
		_loadView.render(content,node);
		return _loadView;
	}

	fl.core.prototype.ds = function(el){
		this._el = document.getElementById(el)
		return this._el;
	};
	
	fl.core.prototype.viewLoader = function(){

	}

	fl.core.prototype.sel = function(selector){
		_el = document.getElementById(selector);
		return new fl.core();
	}
	
	fl.core = new fl.core();


	/**
	*********************
	FL.MODEL
	*********************	
	**/

	fl.baseModel = function(){
		var _el;
		this.attrs = {};


	};

	fl.baseModel.prototype.load = function(){

	};

	fl.baseModel.prototype.save = function(){

	};

	fl.baseModel.prototype.delete = function(){

	};

	fl.baseModel.prototype.bind = function(){

	};

	/**
	*********************
	FL.VIEW
	*********************
	**/

	fl.baseView = function(tmplUrl){
		var _model,$el = this._el = document.createElement("div");
		this.tmplUrl = tmplUrl;

		this.successCallback = function(data){
			$el.innerHTML = data;
		}

		fl.http.getRequest(this.tmplUrl,this.successCallback);

	};

	fl.baseView.prototype.render = function(content,$elem){
		$elem.appendChild(this._el);
	}


	/**
	*********************
	FL.HTTP
	*********************
	**/

	fl.http = function(){
		var url;
	};


	fl.http.getRequest = function(geturl,callback){
		var successCallback = callback;
		$.ajax({
			url : geturl,
			success : function(data){
				//successCallback();
				if(typeof successCallback !== 'undefined' && typeof successCallback === 'function'){
					successCallback(data);	
				}
				
			}
		});
	};


})();




