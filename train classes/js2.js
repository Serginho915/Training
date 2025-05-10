
function helloUser(){
    console.log(`Hello ${this.name} ${this.surname}`)
    this.animals.forEach(element => {
        console.log(`${this.name} has ${element}`)
    });
}


const user = {
    name: 'John',
    surname: 'Jenkins',
    animals : ['cat','dog','lion'],
    helloUser
}

user.helloUser()