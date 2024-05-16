function DigitManipulate(n = 6){
    this.number = n;
    this.isValid = function(num = this.number) {
        return num <= 0 ? false : true;    
    }
}
function getDigit(n = 6){
    DigitManipulate.call(this,n);
    this.getSum = function(num = this.number) {
        if(this.isValid(num)){
            if (num === 1) {
                return 1;
            } else {
                return num + this.getSum(num - 1);
            }
        }  
    }
    this.getFactorial = function(num = this.number) {
        if(this.isValid(num)){
            if (num === 0 || num === 1) {
                return 1;
            } else {
                return num * this.getFactorial(num - 1);
            }
        }  
    } 
    this.getPow = function(num = this.number, pow = 2){
        if(this.isValid(num)){
            if (pow === 0) {
                return 1;
            } else if (pow === 1) {
                return num;
            } else {
                return num * this.getPow(num, pow - 1);
            }
        } 
    }
    this.getFibonacci = function(num = this.number){
        if(this.isValid(num)){
            if (num <= 1) {
                return num;
            } else {
                return this.getFibonacci(num - 1) + this.getFibonacci(num - 2);
            }
        }
    }
}

var digitObj = new getDigit();

console.log("Sum:", digitObj.getSum()); // Вивід: 21
console.log("Factorial:", digitObj.getFactorial('')); // Вивід: 720
console.log("Power:", digitObj.getPow()); // Вивід: 36
console.log("Fibonacci:", digitObj.getFibonacci()); // Вивід: 8