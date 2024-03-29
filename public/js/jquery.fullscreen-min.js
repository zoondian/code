/*
 jquery.fullscreen 1.1.0
 https://github.com/kayahr/jquery-fullscreen-plugin
 Copyright (C) 2012 Klaus Reimer <k@ailis.de>
 Licensed under the MIT license
 (See http://www.opensource.org/licenses/mit-license)
 */


function d(b) {
	


	var c, a;
	if (!this.length)
		return this;
	c = this[0];
	c instanceof Document ? ( a = c, c = a.documentElement) : a = c.ownerDocument;
	if (null == b) {
		if (!a.cancelFullScreen && !a.webkitCancelFullScreen && !a.mozCancelFullScreen)
			return null;
		b = !!a.fullScreen || !!a.webkitIsFullScreen || !!a.mozFullScreen;
		return !b ? b : a.fullScreenElement || a.webkitCurrentFullScreenElement || a.mozFullScreenElement || b
	}
	b ? ( b = c.requestFullScreen || c.webkitRequestFullScreen || c.mozRequestFullScreen) && b.call(c) : ( b = a.cancelFullScreen || a.webkitCancelFullScreen || a.mozCancelFullScreen) && b.call(a);
	return this
}
jQuery.fn.fullScreen = d;
jQuery.fn.toggleFullScreen = function() {
	
	return d.call(this, !d.call(this))
};
var e, f, g;
e = document;
e.webkitCancelFullScreen ? ( f = "webkitfullscreenchange", g = "webkitfullscreenerror") : e.mozCancelFullScreen ? ( f = "mozfullscreenchange", g = "mozfullscreenerror") : ( f = "fullscreenchange", g = "fullscreenerror");
document.addEventListener(f, function() {
	//alert("change");
	jQuery(document).trigger(new jQuery.Event("fullscreenchange"))
}, !0);
document.addEventListener(g, function() {
	jQuery(document).trigger(new jQuery.Event("fullscreenerror"))
}, !0); 

