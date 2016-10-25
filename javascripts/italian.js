"use strict"

var translate = (function(oldFunc) {
  var italian = {
    happy: "Buono",
    christmas: "Natale"
  };

  return {
      translateToItalian: function(language) {
      console.log("test");
      return italian[language];
    }
  // return oldFunc;
  };
})(translate || {});