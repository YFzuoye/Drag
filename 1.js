function Drag(id){
	this.obj = document.getElementById(id);
	this.disX = 0;
	this.disY = 0;
}
Drag.prototype.init = function(){
	var _this = this;
	this.onmousedown = function(ev){
		var e = ev||event;
		_this.Down();
		document.onmousemove = function(ev){
			var e = ev||event;
			_this.Move();
		}
		document.onmouseup = function(){
			_this.Up();
		}
		return false;
	}
}
Drag.prototype.Down = function(e){
	this.disX = e.clientX - this.obj.offsetLeft;
	this.disY = e.clientY - this.obj.offsetTop;
}
Drag.prototype.Move = function(e){
	this.obj.style.left = e.clientX - this.disX + "px";
	this.obj.style.top = e.clientY - this.disY + "px";
}
Drag.prototype.Up = function(){
	document.onmousemove = document.onmouseup = null; 
}
var drag1 = new Drag("box");
drag1.init();
