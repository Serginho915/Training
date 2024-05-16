// const fruits = ['aa','bb','cc'];

// for (const iterator of fruits) {
//     console.log(iterator)
// }


const sumInput = (arr = []) => {
    let value = prompt('Enter value');
    
    if (value !== null && !isNaN(+value) && value !== '') { 
        arr.push(+value); 
        return sumInput(arr); 
    } else { 
       const sum = arr.reduce((acc, val) => acc + val, 0); 
       return console.log(sum); 
    } 
}

sumInput();

