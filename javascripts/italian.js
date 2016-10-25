"use strict"

var translate = (function(oldFunc) {
  var italian = {
    happy: "Buono",
    christmas: "Natale",
    santa: "Babbo",
    claus: "Natale",
    is: "è",
    coming: "venuta",
    to: "verso",
    town: "la città"
  };

      oldFunc.translateToItalian = function(language) {
      console.log("test");
      return italian[language];
    };

  return oldFunc;

})(translate);