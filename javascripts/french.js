"use strict";

var translate = (function() {
	var tagalog = {
		happy: "Content",
		christmas: "Noël"
	};

	return {
			translateToTagalog: function(language) {
			console.log("test");
			return tagalog[language];
		}
	// return oldFunc;
	};
})();