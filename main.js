// Takes in string, returns string with letters in alphabetical order

// var alphabetSoup = function(string) {
// 	string = string.replace(/[^\w\s]|_/g, "")
//          .replace(/\s+/g, " ");
// 	var strArr = string.toLowerCase().split("")
// 	var letArr = []
// 	for(var i = 0; i < strArr.length; i++){
// 		if(isNaN(strArr[i]*1) === true){
// 			letArr.push(strArr[i])
// 		}
// 	}
// 	return letArr.sort().join("")
// }


// Takes in string, returns number of vowels
// var vowelCount = function(string) {
// 	var vowelCounter = 0
// 	var vowels = "aeiou".split("")
// 	var strArr = string.toLowerCase().split("")
// 	for(var i = 0; i < strArr.length; i++) {
// 		for(var j = 0; j < vowels.length; j++) {
// 			if(strArr[i] === vowels[j]){
// 				vowelCounter += 1
// 			}
// 		}
// 	}
// 	return vowelCounter
// }


// Not complete, does not return smallest number of coins yet
var coinDeterminer = function(number) {
	var coinTypes = [11, 9, 7, 5, 1]
	var coins = 0
	while(number > 0){
		for(var i = 0; i < coinTypes.length; i++){
			if(number > coinTypes[i]){
				var num = Math.floor(number / coinTypes[i])
				coins += num
				number -= coinTypes[i] * num
			}
		}
	}
	return coins
}


console.log(coinDeterminer(25))






