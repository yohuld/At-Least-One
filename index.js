function atLeastOne(){
	try{
		//validate input
		const attempts = document.getElementById("attempts").value;
		if (attempts < 0 || !isInt(attempts)) throw "Error: Attempt input must be a positive integer";
		const chance = parseFloat(document.getElementById("probability").value);
		if (chance < 0 || chance > 100 || isNaN(chance)) throw "Error: Probability must be a number between 0 and 100";
		//calculation
		const calc = (1 - chance / 100) ** attempts;
		let word, res = 100 * (1 - calc);
		if (res > 99.99 && chance < 100){res -= 0.01;}
		//a/an word selection
		if (res > 7.99 && res < 8.99){word = "an";}
		else if (res > 10.99 && res < 12){word = "an";}
		else if (res > 79.99 && res < 90){word = "an";}
		else {word = "a";}
		//output
		document.querySelector("textarea").innerHTML=`There is ${word} ${res.toFixed(2)}% chance of at least one success`;}
	catch(err){
		document.querySelector("textarea").innerHTML=err;
	}}
	
function isInt(val){
	return !isNaN(val) && parseInt(val) == val;}