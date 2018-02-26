// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
	let  H, Q, D, N, P;
	
	if (currency > 10000){
		let ERROR = {error: "You are rich, my friend! We don't have so much coins for exchange"};
		return ERROR;
	}
	if (currency <= 0){
		let o = {};
		return o;
	}
	else{
		
		H = Math.floor(currency/50);  
			currency = currency%50;
		Q = Math.floor(currency/25);  
			currency = currency%25; 
		D = Math.floor(currency/10);  
			currency = currency%10; 
		N = Math.floor(currency/5);  
		P = currency%5; 
	
		let exchange = {"H":H,"Q":Q,"D":D,"N":N,"P":P};
		let result = {};
		
		for (var key in exchange){
			if(exchange[key]!=0){
				result[key] = exchange[key];
			}
		}
		return result;
	}
}
