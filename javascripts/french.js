"use strict";

var translate = (function(oldFunc) {
	var french = {
		happy: "Content",
		christmas: "Noël",
		santa: "Père",
		claus: "Noël",
		is: "est",
		coming: "arrivant",
		to: "à",
		town: "ville"
	};

		oldFunc.translateToFrench = function(language) {
			return french[language];
		};
	return oldFunc;

})(translate);