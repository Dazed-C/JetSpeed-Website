function cycleJapanImage() {
    japanImg.src = japanImgArray[japanImgIndex];
	japanImgIndex++;
	if (japanImgIndex >= japanImgArray.length) {
		japanImgIndex = 0;
	}
}
function cycleTurkeyImage() {
    turkeyImg.src = turkeyImgArray[turkeyImgIndex];
	turkeyImgIndex++;
	if (turkeyImgIndex >= turkeyImgArray.length) {
		turkeyImgIndex = 0;
	}
}
function cycleMaltaImage() {
    maltaImg.src = maltaImgArray[maltaImgIndex];
	maltaImgIndex++;
	if (maltaImgIndex >= maltaImgArray.length) {
		maltaImgIndex = 0;
	}
}

var japanImgArray = ["Images/japan.jpg", "Images/japan2.jpg", "Images/japan3.jpg"];
var japanImgIndex = 0;

var japanImg = document.createElement("Img");
japanImg.setAttribute("id", "japanImg");
japanImg.setAttribute("alt", "An image of Japan");
$("#japanImgDiv").append(japanImg); // !

japanImg.src = japanImgArray[japanImgIndex];

setInterval(cycleJapanImage, 2000);

//

var turkeyImgArray = ["Images/turkey.jpg", "Images/turkey2.jpg", "Images/turkey3.jpg"];
var turkeyImgIndex = 0;

var turkeyImg = document.createElement("Img");
turkeyImg.setAttribute("id", "turkeyImg");
turkeyImg.setAttribute("alt", "An image of Japan");
$("#turkeyImgDiv").append(turkeyImg); // !

turkeyImg.src = turkeyImgArray[turkeyImgIndex];

setInterval(cycleTurkeyImage, 2000);

//

var maltaImgArray = ["Images/malta.jpg", "Images/malta2.jpg", "Images/malta3.jpg"];
var maltaImgIndex = 0;

var maltaImg = document.createElement("Img");
maltaImg.setAttribute("id", "maltaImg");
maltaImg.setAttribute("alt", "An image of Japan");
$("#maltaImgDiv").append(maltaImg); // !

maltaImg.src = maltaImgArray[maltaImgIndex];

setInterval(cycleMaltaImage, 2000);
