
var Luhn = function(input){

	var stringArray = String(input).split('');
	var numberArray = 
		stringArray.map(function(element){
				return Number(element);
		});

	this.checkDigit = numberArray[numberArray.length-1];

};




// check 

module.exports = Luhn;