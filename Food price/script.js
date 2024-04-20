const date = new Date();
      day = new Date().getDate(); 
      month = new Date().getMonth(); month++; 
      year = new Date().getFullYear();
      currency = 'UAH'
    
const apple = `🍎`;
      applePrice = 10;
      appleCount = 3;
      appleSalePercent = 7;
let   finalApplePrice = +(applePrice * appleCount) - (((applePrice * appleCount) / 100) * appleSalePercent ).toFixed();

const orange = `🍊`;
      orangePrice = 12;
      orangeCount = 2;
      orangeSalePercent = 3;
let   finalOrangePrice = +(orangePrice * orangeCount) - (((orangePrice * orangeCount) / 100) * orangeSalePercent ).toFixed();


const kiwi = `🥝`;
      kiwiPrice = 15;
      kiwiCount = 10;
      kiwiCountryPercent = 10;
let   finalKiwiPrice = +( kiwiCountryPercent * kiwiCount).toFixed(); 

let priceAllProducts = finalKiwiPrice + finalOrangePrice +finalApplePrice;

console.log(captionString.replace('≠' , '-'));
console.log('Food price for:' + ' ' + kiwiCount + ' ' + kiwi + ' =' +   ' ' + finalKiwiPrice + ' ' + currency);
console.log('Food price for:' + ' ' + orangeCount + ' ' + orange + ' =' +   ' ' + finalOrangePrice + ' ' + currency);
console.log('Food price for:' + ' ' + appleCount + ' ' + apple + ' =' +   ' ' + finalApplePrice + ' ' + currency);
console.log('Final price for all products = ' + priceAllProducts + ' ' + currency);
console.log(`Final price for ${day}.${month}.${year}`);