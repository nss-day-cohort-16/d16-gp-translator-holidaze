"use strict";

var translateButton = document.getElementById("translateButton");

translateButton.addEventListener("click", function() {
	var languageSelect = document.getElementById("language").value;
	var input = document.getElementById("textArea").value;
	var output = document.getElementById("emptyDiv");
	if (languageSelect === "German") {
		console.log("German");

		output.innerHTML = input;
	} else if (languageSelect === "Tagalog") {
		console.log("Tagalog")
		var translatedWord = translate.translateToTagalog(input);
		// output.innerHTML = translatedWord;

		var tagalogArr = input.split(" ");
		// for (i = 0; i < tagalogArr.length; i++) {
			// output.innerHTML = translatedWord[i];
		// console.log(tagalogArr);
	};

	} else if (languageSelect === "French") {
		console.log("French")
	} else if (languageSelect === "Italian") {
		console.log("Italian")
	};
});