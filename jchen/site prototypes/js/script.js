var sitewidth = $("body").width();

var marginwidth = sitewidth / 2;

function rowmarg() {
	document.getElementById('cardRow').style.marginLeft = Math.floor(marginwidth).toString() + "px";
	document.getElementById('cardRow').style.marginRight = Math.floor(marginwidth).toString() + "px";
}