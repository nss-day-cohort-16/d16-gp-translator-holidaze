"use strict";

var translate = (function(fromTagalog) {
	var german = {
		happy: "glücklich",
		christmas: "Weihnachten"
	};

	return {
		getTranslateToGerman: function(language) {
			return german[language];
		}
	};
})(translate);

