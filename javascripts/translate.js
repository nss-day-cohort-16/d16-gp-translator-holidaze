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
		// output.innerHTML = translatedWord;

		var tagalogArr = input.split(" ");
	for (var i = 0; i < tagalogArr.length; i++) {
		var translatedWord = translate.translateToTagalog(tagalogArr[i]);
		output.innerHTML += translatedWord + " ";
		console.log(tagalogArr);
	};

	} else if (languageSelect === "French") {
		console.log("French")
	} else if (languageSelect === "Italian") {
		console.log("Italian")
	};
});