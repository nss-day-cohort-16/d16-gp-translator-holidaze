"use strict";

var translateButton = document.getElementById("translateButton");

translateButton.addEventListener("click", function() {
	var languageSelect = document.getElementById("language").value;
	var input = document.getElementById("textArea").value;
	var output = document.getElementById("emptyDiv");
	if (languageSelect === "German") {
		// console.log("German");
		var germanArr = input.split(" ");
	for (var i = 0; i < germanArr.length; i++) {
		var translatedWord = translate.translateToGerman(germanArr[i]);
		output.innerHTML += translatedWord + " ";
		console.log(germanArr);
		}
	} else if (languageSelect === "Tagalog") {
		// console.log("Tagalog")
		var tagalogArr = input.split(" ");
	for (var i = 0; i < tagalogArr.length; i++) {
		var translatedWord = translate.translateToTagalog(tagalogArr[i]);
		output.innerHTML += translatedWord + " ";
		console.log(tagalogArr);
	}

	}	else if (languageSelect === "French") {
		// console.log("French")
		var frenchArr = input.split(" ");
	for (var i = 0; i < frenchArr.length; i++) {
		var translatedWord = translate.translateToFrench(frenchArr[i]);
		output.innerHTML += translatedWord + " ";
		console.log(frenchArr);
	}
	}	else if (languageSelect === "Italian") {
		// console.log("Italian");
		var italianArr = input.split(" ");
	for (var i = 0; i < italianArr.length; i++) {
		var translatedWord = translate.translateToItalian(italianArr[i]);
		output.innerHTML += translatedWord + " ";
		console.log(italianArr);
	};

}});