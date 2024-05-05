function makePrototype(arr, objectProto){
    
}


const vegetables = [
    {
        name: `tomato`,
        icon: `🍅`,
        price: 2.3
    },
    {
        name: `carrot`,
        icon: `🥕`,
        price: 1.5
    },
    {
        name: `corn`,
        icon: `🌽`,
        price: 2.78,
        season: true
    }
];

const fruits = [
    {
        name: `watermelon`,
        icon: `🍉`,
        price: 7.7,
        season: true
    },
    {
        name: `cherries`,
        icon: `🍒`,
        price: 8.5,
        season: true
    },
    {
        name: `pineapple`,
        icon: `🍍`,
        price: 9.8
    }
];
function makePrototype(arr, objectProto){
    return arr
        .map(product => {
            let newObj = Object.create(objectProto); 
            Object.assign(newObj, product); 
            return newObj;
        })
}

const renderList = (arr) =>{
    debugger;
    let LIs = arr
        .map(product => `<li>${product.getInfo()}</li>`)
        .join(``);
    return `<ul>${LIs}</ul>`;
}

const Product = {

    getPrice(){
        return (this.season ? this.price * this.seasonKoef : this.price).toFixed(2);
    }
    ,
    getInfo(){
        return `Product: ${this.icon}${this.name} . Type: ${this.type}. Price: ${this.getPrice()}`
    }
}




const Vegetable = Object.create(Product);
Vegetable.type = `Vegetable`;
Vegetable.seasonKoef = 1.3;

const Fruit= Object.create(Product);
Fruit.type = `Fruit`;
Fruit.seasonKoef = 1.3;

document.write(renderList(makePrototype(fruits,Fruit)));
