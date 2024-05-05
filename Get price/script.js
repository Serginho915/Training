function Custumer(name,balance,cart = []){
    this.name = name;
    this.balance = balance;
    this.cart = cart;
    this.addToCart = function(product){
        return this.cart.push(product);
    }
    this.checkout = function(){
        let total = this.cart.reduce((acc, product) => acc + getProductPrice(product), 0);
        return total <= this.balance ? this.balance - total : 'Not enough money';
    }

}

function Product(name,price = 0){
    this.name = name;
    this.price = price;
}

function getProductPrice(product){
    return product.price ? product.price : 0;
}






 let ivan = new Custumer('Ivan',100);
 let apple  = new Product('apple',10);


 ivan.addToCart(apple);

 console.log(ivan.checkout())