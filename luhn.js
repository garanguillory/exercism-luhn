
var Luhn = function(input){

	var stringArray = String(input).split('');
	var numberArray = 
		stringArray.map(function(element){
				return Number(element);
		});
	// double every other element starting from the left
			for(var i=numberArray.length-2; i>=0;i=i-2){
					numberArray[i] *= 2;
			}
	// if element is greater than 10 subtract 9
			for(var i=numberArray.length-1;i>=0;i--){
					if(numberArray[i]>=10){
						numberArray[i] -= 9;
					}
			}
	var sum = 
		numberArray.reduce(function(accum, curr){
			return accum + curr;
		});

	var validator = function(number){
		return !(number % 10) ? true : false;
	};

	this.checkDigit = numberArray[numberArray.length-1];
	this.addends = numberArray;
	this.checksum = sum;
	this.valid = validator(sum);

};




// check 

module.exports = Luhn;