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

	fl.core.prototype.init = function(msg){
		this._el.innerHTML = msg;
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

	fl.baseView = function(){
		var _el,_model;
	};


	/**
	*********************
	FL.HTTP
	*********************
	**/

	fl.http = function(){
		var uri;
	};


})();




