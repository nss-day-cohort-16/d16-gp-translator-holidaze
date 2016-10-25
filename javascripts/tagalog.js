"use strict";

var translate = (function() {
	var tagalog = {
		happy: "Maligayang",
		christmas: "Pasko"
	};

	return {
			translateToTagalog: function(language) {
			console.log("test");
			return tagalog[language];
		}
	// return oldFunc;
	};
})();