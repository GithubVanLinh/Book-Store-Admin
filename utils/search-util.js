const characterMap = {
	"đ": "d",
	"Đ": "D",

	"à": "a",
	"á": "a",
	"ả": "a",
	"ã": "a",
	"ạ": "a",
	
	"ă": "a",
	"ắ": "a",
	"ằ": "a",
	"ẳ": "a",
	"ẵ": "a",
	"ặ": "a",

	"â": "a",
	"ấ": "a",
	"ầ": "a",
	"ẩ": "a",
	"ẫ": "a",
	"ậ": "a",


	"Á": "A",
	"À": "A",
	"Ả": "A",
	"Ã": "A",
	"Ạ": "A",

	"Ă": "A",
	"Ắ": "A",
	"Ằ": "A",
	"Ẳ": "A",
	"Ẵ": "A",
	"Ặ": "A",

	"Â": "A",
	"Ầ": "A",
	"Ấ": "A",
	"Ẩ": "A",
	"Ẫ": "A",
	"Ậ": "A",

	"è": "e",
	"é": "e",
	"ẻ": "e",
	"ẽ": "e",
	"ẹ": "e",

	"ê": "e",
	"ề": "e",
	"ế": "e",
	"ể": "e",
	"ễ": "e",
	"ệ": "e",

	"È": "E",
	"É": "E",
	"Ẻ": "E",
	"Ẽ": "E",
	"Ẹ": "E",

	"Ê": "E",
	"Ề": "E",
	"Ế": "E",
	"Ể": "E",
	"Ễ": "E",
	"Ệ": "E",

	"ì": "i",
	"í": "i",
	"ỉ": "i",
	"ĩ": "i",
	"ị": "i",

	"Ì": "I",
	"Í": "I",
	"Ỉ": "I",
	"Ĩ": "I",
	"Ị": "I",

	"ù": "u",
	"ú": "u",
	"ủ": "u",
	"ũ": "u",
	"ụ": "u",

	"ư": "u",
	"ừ": "u",
	"ứ": "u",
	"ử": "u",
	"ữ": "u",
	"ự": "u",

	"Ù": "U",
	"Ú": "U",
	"Ủ": "U",
	"Ũ": "U",
	"Ụ": "U",

	"Ư": "U",
	"Ứ": "U",
	"Ừ": "U",
	"Ử": "U",
	"Ữ": "U",
	"Ự": "U",

	"ò": "o",
	"ó": "o",
	"ỏ": "o",
	"õ": "o",
	"ọ": "o",

	"ô": "o",
	"ồ": "o",
	"ố": "o",
	"ổ": "o",
	"ỗ": "o",
	"ộ": "o",

	"ơ": "o",
	"ờ": "o",
	"ớ": "o",
	"ở": "o",
	"ỡ": "o",
	"ợ": "o",

	"Ò": "O",
	"Ó": "O",
	"Ỏ": "O",
	"Õ": "O",
	"Ọ": "O",

	"Ô": "O",
	"Ồ": "O",
	"Ố": "O",
	"Ổ": "O",
	"Ỗ": "O",
	"Ộ": "O",

	"Ơ": "O",
	"Ờ": "O",
	"Ớ": "O",
	"Ở": "O",
	"Ỡ": "O",
	"Ợ": "O",

}

const characterMap2 = {
	"đ": "d",
	"Đ": "d",

	"à": "a",
	"á": "a",
	"ả": "a",
	"ã": "a",
	"ạ": "a",
	
	"ă": "a",
	"ắ": "a",
	"ằ": "a",
	"ẳ": "a",
	"ẵ": "a",
	"ặ": "a",

	"â": "a",
	"ấ": "a",
	"ầ": "a",
	"ẩ": "a",
	"ẫ": "a",
	"ậ": "a",


	"Á": "a",
	"À": "a",
	"Ả": "a",
	"Ã": "a",
	"Ạ": "a",

	"Ă": "a",
	"Ắ": "a",
	"Ằ": "a",
	"Ẳ": "a",
	"Ẵ": "a",
	"Ặ": "a",

	"Â": "a",
	"Ầ": "a",
	"Ấ": "a",
	"Ẩ": "a",
	"Ẫ": "a",
	"Ậ": "a",

	"è": "e",
	"é": "e",
	"ẻ": "e",
	"ẽ": "e",
	"ẹ": "e",

	"ê": "e",
	"ề": "e",
	"ế": "e",
	"ể": "e",
	"ễ": "e",
	"ệ": "e",

	"È": "e",
	"É": "e",
	"Ẻ": "e",
	"Ẽ": "e",
	"Ẹ": "e",

	"Ê": "e",
	"Ề": "e",
	"Ế": "e",
	"Ể": "e",
	"Ễ": "e",
	"Ệ": "e",

	"ì": "i",
	"í": "i",
	"ỉ": "i",
	"ĩ": "i",
	"ị": "i",

	"Ì": "i",
	"Í": "i",
	"Ỉ": "i",
	"Ĩ": "i",
	"Ị": "i",

	"ù": "u",
	"ú": "u",
	"ủ": "u",
	"ũ": "u",
	"ụ": "u",

	"ư": "u",
	"ừ": "u",
	"ứ": "u",
	"ử": "u",
	"ữ": "u",
	"ự": "u",

	"Ù": "u",
	"Ú": "u",
	"Ủ": "u",
	"Ũ": "u",
	"Ụ": "u",

	"Ư": "u",
	"Ứ": "u",
	"Ừ": "u",
	"Ử": "u",
	"Ữ": "u",
	"Ự": "u",

	"ò": "o",
	"ó": "o",
	"ỏ": "o",
	"õ": "o",
	"ọ": "o",

	"ô": "o",
	"ồ": "o",
	"ố": "o",
	"ổ": "o",
	"ỗ": "o",
	"ộ": "o",

	"ơ": "o",
	"ờ": "o",
	"ớ": "o",
	"ở": "o",
	"ỡ": "o",
	"ợ": "o",

	"Ò": "o",
	"Ó": "o",
	"Ỏ": "o",
	"Õ": "o",
	"Ọ": "o",

	"Ô": "o",
	"Ồ": "o",
	"Ố": "o",
	"Ổ": "o",
	"Ỗ": "o",
	"Ộ": "o",

	"Ơ": "o",
	"Ờ": "o",
	"Ớ": "o",
	"Ở": "o",
	"Ỡ": "o",
	"Ợ": "o",
}

var chars = Object.keys(characterMap).join('|');
var allAccents = new RegExp(chars, 'g');
// console.log(allAccents);
var firstAccent = new RegExp(chars, '');

function matcher(match) {
	return characterMap[match];
}

var removeAccents = function(string) {	
	return string.replace(allAccents, matcher).toLowerCase();
};

var hasAccents = function(string) {
	return !!string.match(firstAccent);
};

module.exports = {removeAccents};
// module.exports.has = hasAccents;
// module.exports.remove = removeAccents;
