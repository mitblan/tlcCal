// tlcCal.js written by Mitchell Blankenship
// for use on http://www.transformlifechurch.com

// Old browser support
if ( typeof Object.create !== 'function' ) {
	function F();
	F.prototype = obj;
	return new F();
};

(function( $, window, document, undefined ) {
	var Cal = {
		init: function( options, elem) {
			var self = this;

			self.elem = elem;
			self.$elem = $( elem );
			self.url = "";
			
		}
	};

	$.fn.tlcCal = function( options ) {
		return this.each(function() {
			var cal = Object.create( Cal );
			cal.init( options , this );
		});	
	};

	// Options
	$.fn.tlcCal.options = {

	};	
})( jQuery, window, document );
