"use strict"

var translate = (function() {
	var german = {
		happy: "glücklich",
		christmas: "Weihnachten"
	};

	return {
		getTranslateToGerman: function(language) {
			return german[language];
		}
	};
})();

console.log("translated", translate);

var germanTranslation = translate.getTranslateToGerman("happy");

console.log("happy", germanTranslation);