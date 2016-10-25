"use strict";

var translate = (function() {
	var french = {
		happy: "Content",
		christmas: "Noël"
	};

	return {
			translateToFrench: function(language) {
			console.log("test");
			return french[language];
		}
	// return oldFunc;
	};
})();