"use strict"

var translate = (function(oldFunc) {
	var german = {
		happy: "glücklich",
		christmas: "Weihnachten",
		santa: "Santa",
		claus: "Klaus",
		is: "ist",
		coming: "kommen",
		to: "nach",
		town: "stadt"
	};


		oldFunc.translateToGerman = function(language) {
			return german[language];
		};

	 return oldFunc;

})(translate);

