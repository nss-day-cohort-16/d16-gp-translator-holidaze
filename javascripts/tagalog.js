"use strict";

var translate = (function() {
	var tagalog = {
		happy: "Maligayang",
		christmas: "Pasko",
		santa: "Santa",
		claus: "Claus",
		is: "ay",
		coming: "patungo",
		to: "sa",
		town: "bayan"
	};

	return {
			translateToTagalog: function(language) {
			console.log("test");
			return tagalog[language];
		}
	// return oldFunc;
	};
})();