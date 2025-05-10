// // let sum = +prompt('');

// // while (sum <=100){
// //     let newnumber = +prompt('');
// //     sum += newnumber;
// // }
// // console.log()

// // let n = 5;

// // while(n >= 0){
// //     console.log(n)
// //     n--;
// // }


// // let arr = [10,20,30];
// // let arr2 =[];

// // console.log(arr,arr2)
// // for (let index = 0; index < arr.length; index++) {
// //     arr2[index] = arr[index]
    
// // }
// // arr2[0] = 'dog';
// // console.log(arr,arr2)
// ////
// // let arr = [10,20,30];
// // let arr2 =[...arr];

// // arr2[0] = 'dog';
// // console.log(arr,arr2)

// //pop

// // let arr = [20,320,40];
// // arr.pop()
// // console.log(arr);

// //concat

// // let numbers = [10,20,30];
// // let animals = ['dog', 'cat', 'lion'];

// // let newArr = numbers.concat(animals);
// // console.log(newArr);

// //slice

// // let arr =[10,20,30,40,50,60,70];
// // let arr2 = arr.slice(2,5); //[30,40,50]
// // let arr3 = arr.slice(2,-1); //[30, 40, 50, 60]
// // console.log(arr,arr2,arr3)

// //splice
// // let arr =[10,20,30,40,50,60,70];
// // arr.splice(2,3)
// // console.log(arr) //[10, 20, 60, 70]
// // let arr1 =[10,20,30,40,50,60,70]; 
// // arr1.splice(2,0,'cat')
// // console.log(arr1) // [10,20,'cat',30,40,50,60,70]

// //join

// // let arr =[10,20,30];
// // let arrToString = arr.join()
// // console.log(arrToString)  // string - 10,20,30

// //split

// // let fullName = 'Artem Kobxar'
// // let userInfo = fullName.split(' ');
// // console.log(userInfo) // ['Artem', 'Kobxar']

// // let hero = ['Ivan'];
// // let native = ['York','Of'];
// // let destination = ['Poltava','In'];

// // let finalArr = hero.concat(native,destination).reverse();

// // finalArr.splice(0,2,'Richard')
// // finalArr.push('Gave','Battle','In','Vain')

// // let listItems = finalArr.map(item => `<li>${item}</li>`).join('');
// // document.write(
// //     `<ul>
// //         ${listItems}
// //     </ul>`);


// // let sports = [
// //     ['skier', '⛷'],
// //     ['snowboarder', '🏂'],
// //     ['apple', '🍎'],
// //     ['hockey', '🏒'],
// //     ['ice skate', '⛸'],
// //     ['swimmer', '🏊'],
// //     ['surfer', '🏄‍'],
// //     ['watermelon', '🍉'],
// //     ['lemon', '🍋'],
// //     ['rowboat', '🚣'],
// //     ['bicyclist', '🚴‍']
// // ];

// // const getArrray = () =>{

// // }

// // let winter_sports = sports.slice(0, 5); 
// // let summer_sports = sports.slice(5);   


// // let fruits = [];
// // fruits.push(...winter_sports.splice(2, 1)); 
// // fruits.push(...summer_sports.splice(2, 2)); 


// // console.log("Winter Sports:");
// // winter_sports.forEach(([sport, emoji]) => console.log(`  ${sport}: ${emoji}`));

// // console.log("Summer Sports:");
// // summer_sports.forEach(([sport, emoji]) => console.log(`  ${sport}: ${emoji}`));

// // console.log("Fruits:");
// // fruits.forEach(([fruit, emoji]) => console.log(`  ${fruit}: ${emoji}`));

// // const animals = [
// //     ['🐭','mouse','Jerry'],
// //     ['🐹','hamster','Biscuit'],
// //     ['🐰','rabbit','Bugs'],
// //     ['🦊','fox','Mrs. Fox'],
// //     ['🐻','bear','Paddington']
// // ];

// // const food = [
// //     ['🍎','apple',10],
// //     ['🍐','pear',12],
// //     ['🍊','tangerine',15],
// //     ['🍋','lemon',5],
// //     ['🍌','banana',7]
// // ];

// // const table = document.createElement('table');
// // document.body.appendChild(table);

// // const getInfo = (arr, nameofArr) => {
// //     let nameOfTable = document.createElement('caption');
// //     nameOfTable.textContent = (nameofArr ? `${nameofArr}` : `Unknown`);
// //     table.appendChild(nameOfTable); 

// //     arr.forEach(element => {
// //         let tr = document.createElement('tr'); 
// //         element.forEach(e => {
// //             let td = document.createElement('td'); 
// //             td.textContent = e; 
// //             tr.appendChild(td); 
// //         });
// //         table.appendChild(tr); 
// //     });
// // };


// // getInfo(animals, 'Animals');
// // getInfo(food, 'Food');


// const sports = [
//     ['🤺','fencing'],
//     ['⛸','figure skating'],
//     ['⛷','skier'],
//     ['🏂','snowboarder'],
//     ['🏌','golfing'],
//     ['🚣','rowing boat'],
//     ['🏊','swimming'],
//     ['🤸','gymnastics'],
//     ['🤾','handball']
// ];

// const winners = [
//     ['fencing','🥇','fr'],
//     ['fencing','🥈','it'],
//     ['fencing','🥉','us'],

//     ['figure skating','🥇','ca'],
//     ['figure skating','🥈','fr'],
//     ['figure skating','🥉','us'],

//     ['skier','🥇','no'],
//     ['skier','🥈','us'],
//     ['skier','🥉','fr'],

//     ['snowboarder','🥇','us'],
//     ['snowboarder','🥈','jp'],
//     ['snowboarder','🥉','au'],

//     ['golfing','🥇','gb'],
//     ['golfing','🥈','se'],
//     ['golfing','🥉','us'],

//     ['rowing boat','🥇','us'],
//     ['rowing boat','🥈','ml'],
//     ['rowing boat','🥉','ro'],

//     ['swimming','🥇','us'],
//     ['swimming','🥈','gb'],
//     ['swimming','🥉','au'],

//     ['gymnastics','🥇','it'],
//     ['gymnastics','🥈','fr'],
//     ['gymnastics','🥉','ua'],

//     ['handball','🥇','dk'],
//     ['handball','🥈','ke'],
//     ['handball','🥉','de'],
// ];

// const olympic = ['🔵','⚫','🔴','🟡','🟢'];
// // Європа — синій, Африка — чорний, Америка — червоний, Азія — жовтий, Австралія — зелений

// const continents = [
//     ['fr','Europe'],
//     ['it','Europe'],
//     ['us','America'],
//     ['ca','America'],
//     ['no','Europe'],
//     ['jp','Asia'],
//     ['au','Oceania'],
//     ['gb','Europe'],
//     ['se','Europe'],
//     ['ro','Europe'],
//     ['ua','Europe'],
//     ['dk','Europe'],
//     ['de','Europe'],
//     ['ke','Africa'],
//     ['ml','Africa']
// ];

// const flags = [
//     ['fr','🇫🇷'],
//     ['it','🇮🇹'],
//     ['us','🇺🇸'],
//     ['ca','🇨🇦'],
//     ['no','🇳🇴'],
//     ['jp','🇯🇵'],
//     ['au','🇦🇺'],
//     ['gb','🇬🇧'],
//     ['se','🇸🇪'],
//     ['ro','🇷🇴'],
//     ['ua','🇺🇦'],
//     ['dk','🇩🇰'],
//     ['de','🇩🇪'],
//     ['ke','🇰🇪'],
//     ['ml','🇲🇱']
// ];

// const checkValues = (table, arr) => {
//     if (!table || !(table instanceof HTMLElement)) {
//         throw new Error('Invalid table element passed to makeContinent');
//     }
//     if (Array.isArray(arr) && arr.length > 0) return true
//     else {
//         console.warn('Invalid or empty array passed to makeContinent');
//         return null; 
//     }
// }

// const continent = (table, arr) => {

//    if(checkValues(table,arr)){
//         const tr = document.createElement('tr');
//         table.appendChild(tr);

//         const emptyTh = document.createElement('th');
//         tr.appendChild(emptyTh);


//         arr.forEach(element => {
//             let th = document.createElement('th');
//             th.textContent = element;
//             tr.appendChild(th);
//         });
//         return tr;
//    }
        
    
// };

// const sport = (table,sports) =>{
//     if(checkValues(table,sports)){
//         sports.forEach(element =>{
//             let sportTR = document.createElement('tr')
//             let sportTD = document.createElement('td')

//             table.appendChild(sportTR);
//             sportTD.textContent = element[0]; 
//             sportTR.appendChild(sportTD);

//         })
//     }
// }

// const



// const winnersEachSport = () =>{

// }


// const table  = document.createElement('table');
// document.body.appendChild(table);

// continent(table,olympic);
// sport(table,sports);






// spread rest
// const getNumber = () =>{
//  return 'Hello'
// }

// const arr = [22,33,44,55,[66,77,88, getNumber()]];
// let arr1 = [...arr];

// console.log(arr1);



// function f1 (a,...b){
//     console.log(a,b)
// }

// f1(2,5,6,6,7,7,8,[5,4,54,true,{man:'Male', ages:[20,30]}])





//Destructuring assignment

// function calcValues(a,b){
//     return[a+b,a-b]
// }


// const [sum,sub] = calcValues(3,5);

// const user ={
//     //name: 'Serge',
//     age : 27,
//     home:{
//         country: 'Ukraine',
//         city: 'Kyiv'
//     }
// }


// const {name,home:homeCountry} = user;
//  console.log({name: fname = 'Nma',homeCountry})


// const combineArrays = (arr,arr2) =>{
//     let finalArr = [...arr,...arr2];
//     return finalArr;
// }


// console.log(combineArrays([1, 2], [3, 4])); 

// const mergeObjects = (obj1,obj2) =>{
// return {...obj1,...obj2}
// }



// console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 })); // { a: 1, b: 3, c: 4 }


// const settings = {
//     theme: "dark",
//     language: "ru",
//     notifications: true,
//   };

//   let {theme,language,notifications} = settings;

//   console.log(theme,language,notifications)

// const splitFirstAndRest =(arr) =>{

//     return {first : arr[0], rest : arr.slice(1)}

// }


// console.log(splitFirstAndRest([1, 2, 3, 4])); 
// // { first: 1, rest: [2, 3, 4] }

// const extractMainInfo =(obj) =>{
//    let {title,author,...details} = obj;
//    return{title,author,details}
    
// }

// extractMainInfoObj = {
//     title: "Книга",
//     author: "Автор",
//     year: 2022,
//     genre: "фантастика",
//   };
//   // { title: "Книга", author: "Автор", details: { year: 2022, genre: "фантастика" } }

//   console.log(extractMainInfo(extractMainInfoObj))

// const sumAll =(...arg) => arg.reduce((acc,value) => acc + value, 0)


// console.log(sumAll(1, 2, 3, 4)); // 10

// const product = {
//     id: 1,
//     info: {
//       name: "Телефон",
//       price: 1000,
//       details: {
//         manufacturer: "Samsung",
//         warranty: "1 год",
//       },
//     },
//   };

//   const {info :{name,price,details :{manufacturer}}} = product;

//   console.log(name,price,manufacturer);

// const multiplyByTwo =(arr) =>  arr.map(element => element * 2);

// console.log(multiplyByTwo([1, 2, 3])); // [2, 4, 6]


// const filterEvenNumbers =(arr) => arr.filter(el => el%2 ===0 )
// console.log(filterEvenNumbers([1, 2, 3, 4, 5])); // [2, 4]

// const addToArray = (arr,number) =>{
//     const hasNumber = arr.some(el => el ===number);
//     let newArr = [...arr];

//     return !hasNumber ?  [...newArr,number] :  newArr;
// }


// console.log(addToArray([1,2,3,4,5],6))

// function createCounter(start = 0) {
//     let counter = start; 
//     return function() {
//         return counter++; 
//     };
// }


// const counter = createCounter(20);
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3


// function createGreeting(name){
//     return function(){
//         return `Hello ${name}`
//     }
// }

// const greetJohn = createGreeting("John");
// console.log(greetJohn()); // "Hello, John!"
// console.log(greetJohn()); // "Hello, John!"

// const createDiscount =(discount) =>{
    
//     return function(price) {
//          const discountAmount = (price/100) * discount
//          return price - discountAmount
//     }
// }

// const tenPercentOff = createDiscount(10);
// console.log(tenPercentOff(100)); // 90
// console.log(tenPercentOff(200)); // 180


// const createCounter = (start, counter) =>{
//     return function(){
//         return start += counter
//     }
// }

// const counter = createCounter(10, 5);
// console.log(counter()); // 15
// console.log(counter()); // 20
// console.log(counter()); // 25


// const createIdGenerator = (prefix) =>{
//     let counter = 0;
//     return () =>{
//         counter++
//         return prefix.concat(counter);
//     }
// }

// const idGen = createIdGenerator("user_");
// console.log(idGen()); // "user_1"
// console.log(idGen()); // "user_2"
// console.log(idGen()); // "user_3"

// const createCachedFunction = (func) =>{
//     return() =>{

//     }
// }


// const add = (a, b) => a + b;
// const cachedAdd = createCachedFunction(add);

// console.log(cachedAdd(1, 2)); // Вычисляет и возвращает 3
// console.log(cachedAdd(1, 2)); // Берёт из кэша, возвращает 3
// console.log(cachedAdd(2, 3)); // Вычисляет и возвращает 5


// const snail = (arr) =>{
//     let finalArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 === 0) {
            
//             finalArr = finalArr.concat(arr[i]);
//         } else {
            
//             finalArr = finalArr.concat(arr[i].slice().reverse());
//         }
//     }
    
//     return finalArr;
// }

// debugger;
// const array = [[1,2,3],
//                             [4,5,6],
//                             [7,8,9]];


// console.log(snail(array));






// const snail = (arr) => {
//     let finalArr = [];

    
//     if (!arr || arr.length === 0 || arr[0].length === 0) return finalArr;

//     while (arr.length > 0) {
//         // 1. 
//         finalArr = finalArr.concat(arr[0]);  
//         arr.splice(0, 1); 

        
//         if (arr.length === 0) break;

//         // 2. 
//         for (let i = 0; i < arr.length; i++) {
//             finalArr.push(arr[i].pop());  
//         }

        
//         if (arr.length === 0) break;

//         // 3. 
//         finalArr = finalArr.concat(arr.pop().reverse());  

      
//         if (arr.length === 0) break;

//         // 4. 
//         for (let i = arr.length - 1; i >= 0; i--) {
//             finalArr.push(arr[i].shift());  
//         }
//     }

//     return finalArr;
// };



// const array = [[1,2,3,4],
//                             [5,5,6,5],
//                             [7,8,9,5],
//                             [7,8,9,5]];


// console.log(snail(array));


//  Лига и очки


// const findTeam = (team) => {
//     return leagueTable.findIndex(el => el[0] === team);
//   };
  
// const updateResult = (team, res) => {
//     const teamIndex = findTeam(team);

//     if (teamIndex === -1) {
//       console.error(`Команда "${team}" не найдена в таблице.`);
//       return;
//     }

//     if (res === 'draw') {
//       leagueTable[teamIndex][1] += 1;
//     } else if (res === 'win') {
//       leagueTable[teamIndex][1] += 3;
//     }
// };
  
// const updateLeagueTable = (team1, team2, result) => {
//     if (result === 'draw') {
//       updateResult(team1, 'draw');
//       updateResult(team2, 'draw');
//     } else if (result === 'win') {
//       updateResult(team1, 'win');
//     }
//     sortTable();
// };

// const sortTable = () =>{
//     leagueTable.sort((a,b) =>{
//         if(b[1] !== a[1]) return b[1] - a[1]
//         return a[0].localeCompare(b[0]);
//     })
// }

// let leagueTable = [
//     ["teamC", 6],
//     ["teamA", 4],
//     ["teamB", 4],
//     ["teamD", 3]
//   ];

//   updateLeagueTable("teamA", "teamB", "draw");

//   console.log(leagueTable)



// class Car{
//     constructor(brand,model){
//         this.brand = brand;
//         this.model = model;
//     } 
//     getInfo()  {
//         console.log(`${this.brand} - ${this.model}`) 
//     }
// }

// class ElectricCar extends Car{
//     constructor(brand,model,batterycapacity){
//         super(brand,model);
//         this.batterycapacity = batterycapacity;
//     }

//     getInfo(){
//         super.getInfo();
//         console.log(`battery capacity: ${this.batterycapacity}`)
//     }
// }



// class Animal {
//     sound(){
//         console.log('Sound')
//     }
// }

// class Dog extends Animal{
//     sound(){
//         console.log('Aww')
//     }
// }

// const dog = new Dog;


// String.prototype.capitalize = function(){
//     return this.charAt(0).toUpperCase() + this.slice(1)
// }

// const Person = function(name, age){
//     this.name = name,
//     this.age = age
// }


// const serge = new Person('Serge', 27);
//  console.log(serge);


// class User{
//     constructor(firstName,lastName){
//         this.name = firstName
//         this.surname = lastName
//     }

//     get fullName(){
//         return `${this.name} ${this.surname}`
//     }

//     set fullName(fullName){
//         const parts = fullName.split(' '); 
//         if (parts.length !== 2) {
//             throw new Error("Полное имя должно содержать имя и фамилию!");
//         }
//         this.name = parts[0]; 
//         this.surname = parts[1]; 
//     }
// }




// class Counter{
//     constructor(){
//         this._value = 0;
//         this._counter = 0;
//     }

//     get count(){
//         return this.count
//     }
//     set value(v){
        
//     }
// }

//class Temperature {
//     constructor(value = 0){
//         this.degrees = value;
//     }

//     get celsius(){
//         return this.degrees 
//     }

//     set celsius(value){
//         this.degrees = value;
//     }

//     get fahrengeit() {
//         return this.degrees * 1.8 + 32; 
//     }

//     set fahrengeit(value) {
//         this.degrees = (value - 32) / 1.8; 
//     }
// }

// class Counter{
//     constructor(value = 0){
//         this._counter = value;
//     }

//     get value(){
//         return this._counter
//     }

//     set value(increment = 1){
//         this._counter += increment;
//     }
// }


// const calculateAllSalary = (object) =>{
//     let sum = 0;

//     for (const key in object) {
//         if(Array.isArray(object[key])){
//             sum += object[key].reduce((acc,value) =>value.salary + acc,0)
//         }
//         else if( typeof object[key] === 'object') calculateAllSalary(object[key])
//     }
// return sum;
// }


// let company ={
//     sales:[{name:'John',salary:1000},{name:'Steve',salary:1500},{name:'Anton',salary:20000}],
//     development:{
//         web:[{name:'Anna',salary:9000},{name:'Victor',salary:7000}],
//         design:[{name:'Kevin',salary:5000},{name:'Lena',salary:1000}],
//         HR:{
//             outsource:[{name:'Amanda',salary:15000}],
//             employee:[{name:'Kristina',salary:13000}]
//         }
//     }
// }

// console.log(calculateTotalSalary(company)); 


// let text = document.querySelector('div');
// let listItem = document.querySelector('.list > li:nth-child(2)');

// text.style.color = 'red';
// listItem.innerHTML = 'New text'



// let element  = document.getElementById('#id');
// element.innerText = 'Idremastered'

// let list = document.getElementById('list');

// let listElem = document.createElement('li');
// listElem.innerText = 'NewText'

// list.appendChild(listElem);

// const elem = document.getElementById('nav');

// elem.remove();



// let elem = document.getElementById('elem');

// elem.style.fontSize = 22;

// let pic = document.querySelector('img');

// pic.setAttribute('src', 'google.com')




// const elem = document.querySelector("div");


// elem.addEventListener('mousedown',e =>{
//     e.target.style.borderColor = 'yellow'
// })

// elem.addEventListener('mouseover', e =>{
//     e.target.style.borderColor = 'transparent'
// })

// const elem = document.querySelector("div");

// elem.addEventListener('focus', e =>{
//     e.target.classList.toggle('greenBorder')
// })


// const inputs = document.querySelectorAll('input');

// for (let index = 0; index < inputs.length; index++) {
//     inputs[index].addEventListener('focus', e =>{
//         e.target.classList.add('greenBorder')
//     })
//     inputs[index].addEventListener('blur', e=>{
//         e.target.classList.toggle('greenBorder')
//     })
// }



// const button = document.querySelector('button')
// const count = document.querySelector('#counter');

// const getNumber =() =>{
//    return parseInt(count.innerText) += 1;
// }


// button.addEventListener('click', e=>{
//     count.innerText = getNumber();
// })



// const form  = document.getElementById('form')
// const nameUser = document.getElementById('name')
// const password = document.getElementById('password')
// const submit = document.getElementById('submit')
// const error = document.createElement('div')



// form.addEventListener('submit', e =>{
//     e.preventDefault();
//     let errorMessages = [];

//     if (nameUser.value === '' || nameUser.value === null) {
//         errorMessages.push('Name should not be empty');
//     }

//     if (password.value === '' || password.value === null) {
//         errorMessages.push('Password should not be empty');
//     }

//     if(errorMessages.length > 0){
//         error.innerHTML ='';

//         for (let index = 0; index < errorMessages.length; index++) {
//             error.innerText = errorMessages[index] + ',';  
//         }
//     }


// })

//FORM

// <form action="/" id="form">
// <div>
    
//     <label for="name">Name</label> <input type="text" name="name" id="name">
//     <label for="password">Password</label> <input type="password" name="password" id="password">
//     <button type="submit" id="submit"></button>
// </div>
// </form> 

// const form = document.getElementById('form');
// const nameUser = document.getElementById('name');
// const password = document.getElementById('password');

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     const fields = [nameUser, password];


//     fields.forEach(field => {
//         while (field.nextElementSibling && field.nextElementSibling.classList.contains('error')) {
//             field.nextElementSibling.remove(); 
//         }
//     });


//     if (nameUser.value === '' || nameUser.value.length < 8) {
//         const errorName = document.createElement('div');
//         errorName.innerText = 'Username must be at least 8 characters long';
//         errorName.classList.add('error');
//         nameUser.insertAdjacentElement('afterend', errorName); 
//     }

 
//     if (password.value === '' || password.value.length < 8) {
//         const errorPassword = document.createElement('div');
//         errorPassword.innerText = 'Password must be at least 8 characters long';
//         errorPassword.classList.add('error');
//         password.insertAdjacentElement('afterend', errorPassword); 
//     }
// });



// 1.Создание списка с обработчиком на всплытии:

// Создайте HTML-страницу с <ul> и несколькими <li>.

// Реализуйте делегирование событий, чтобы по клику на любом <li> выводилось его содержимое в консоль.

// Усложнение: добавьте новый <li> динамически и проверьте, что он тоже реагирует на клики.

// const list = document.querySelector('ul');

// list.addEventListener('click', e=>{
//     const newEl =  document.createElement('li');
//     newEl.innerText = 'LOREM LOREM'
//     list.insertAdjacentElement('beforeend',newEl)
//     console.log(e.target.innerText);
// })



/* <ul class="accordion">
        <li class="accordion-item">
          <input type="checkbox" id="item-1" class="accordion-checkbox">
          <label for="item-1" class="accordion-header">Section 1</label>
          <div class="accordion-content">
            <p>This is the content of Section 1.</p>
          </div>
        </li>
        <li class="accordion-item">
          <input type="checkbox" id="item-2" class="accordion-checkbox">
          <label for="item-2" class="accordion-header">Section 2</label>
          <div class="accordion-content">
            <p>This is the content of Section 2.</p>
          </div>
        </li>
        <li class="accordion-item">
          <input type="checkbox" id="item-3" class="accordion-checkbox">
          <label for="item-3" class="accordion-header">Section 3</label>
          <div class="accordion-content">
            <p>This is the content of Section</div> 3.</p>
          </div>
        </li>
    </ul>

    body {
    font-family: Arial, sans-serif;
    background-color: #f9f9f9;
    margin: 0;
    padding: 20px;
  }
  
  .accordion {
    list-style: none;
    padding: 0;
    margin: 0 auto;
    max-width: 600px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #fff;
  }
  
  .accordion-item {
    border-top: 1px solid #ddd;
  }
  
  .accordion-item:first-child {
    border-top: none;
  }
  
  .accordion-header {
    display: block;
    padding: 15px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    background-color: #f1f1f1;
    transition: background-color 0.3s;
  }
  
  .accordion-header:hover {
    background-color: #e0e0e0;
  }
  
  .accordion-checkbox {
    display: none;
  }
  
  .accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, padding 0.3s ease;
    background-color: #ffffff;
    padding: 0 15px;
  }
  
  .accordion-checkbox:checked ~ .accordion-content {
    max-height: 150px; /* Adjust based on your content's height */
//     padding: 15px;
//     border-top: 1px solid #ddd;
//   }
  
//   .accordion-content p {
//     margin: 0;
//     line-height: 1.5;
//   }
//     .accordion-content p:hover {
//         color: #007BFF;
//     } */



{/* <div class="card-container">
        <div class="card"><button id="button">Close</button></div>
        <div class="card"><button id="button">Close</button></div>
        <div class="card"><button id="button">Close</button></div>
        <div class="card"><button id="button">Close</button></div>
    </div>
    

const card = document.querySelector('.card-container');

card.addEventListener('click', e => {
    const target = e.target;
    
    if(target.id === 'button'){
        target.parentElement.remove();
    }
}) */}


// const gridcontainer = document.querySelector('.grid-container');

// for (let index = 0; index < 100; index++) {
//     const gridItem = document.createElement('div');
//     gridItem.classList.add('grid-item');
//     gridItem.innerText = index + 1;
    
//     gridItem.addEventListener('mousemove', e => {
//         if(e.ctrlKey){
//             e.target.style.backgroundColor = getRandomColor();
//         }
//         // e.target.style.backgroundColor = getRandomColor();
//     })
//     gridcontainer.appendChild(gridItem);
// }

// const getRandomColor = () => {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }



// const form = document.querySelector('form');

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     const task = document.querySelector('.task-input');
//     const taskUL = document.querySelector('.task-container');

//     // Создаём новый элемент задачи
//     const newTask = document.createElement('li');
//     newTask.classList.add('task-item');
//     newTask.innerText = task.value;

//     // Создаём кнопку удаления
//     const buttonDelete = document.createElement('button');
//     buttonDelete.classList.add('button-delete');
//     buttonDelete.innerText = 'Удалить';

//     // Добавляем кнопку в задачу
//     newTask.appendChild(buttonDelete);

//     // Добавляем задачу в список
//     taskUL.appendChild(newTask);

//     // Очищаем поле ввода
//     task.value = '';

//     // Удаляем задачу при клике на кнопку удаления
//     buttonDelete.addEventListener('click', () => {
//         newTask.remove();
//     });
// });


// const third = document.querySelector('.third');
// const second = document.querySelector('.second');
// const first = document.querySelector('.first');

// third.addEventListener('click', e => {
//   console.log('Third div clicked');
// })

// second.addEventListener('click', e => {
//   console.log('Second div clicked');

// });

// first.addEventListener('click', e => {
//   console.log('First div clicked');
// });


// class Circle{
//   constructor(radius){
//     this.radius = radius;
//   }

//   get diameter(){
//     this.radius * 2;
//   }

//   get area(){
//     return Math.PI * this.radius ** 2;
//   }
//   get circumference(){
//     return 2 * Math.PI * this.radius;
//   }
// }

// class User{
//   constructor(name,age){
//     this.name = name;
//     this.age = age;
//   }

//  get isAdult(){
//     if(this.age >= 18){
//       return true;
//     }
//     else return false;
//  }

//  set age(newAge){
//     if(newAge < 0){
//       console.log('Age should be positive');
//     }
//     else{
//       this.age = newAge;
//     }
//   }
//  }

//  class Bank{
//   constructor(name,balance){
//     this.name = name;
//     this.balance = balance;
//   }

//   get balance(){
//     return this.balance;
//   }
//   deposit(amount){
//     if(amount > 0){
//       this.balance += amount;
//     }
//     else{
//       console.log('Amount should be positive');
//     }
//   }

//   withdraw(amount){
//     if(amount > this.balance){
//       console.log('Not enough balance');
//     }
//     else{
//       this.balance -= amount;
//     }
//   }
//  }


// const buttonColor = document.querySelector('#changeColor');

// const getRandomColor = () => {
//   const letters = '0123456789ABCDEF';
//   let color = '#';
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

// buttonColor.addEventListener('click', e=>{
//   const color = getRandomColor();
//   document.body.style.backgroundColor= color;
// })


// const timerContainer = document.querySelector('.timer-container');
// const timer = document.querySelector('#timer');

// let time = 0; // Начальное время
// let intervalId = null; // Идентификатор интервала

// timerContainer.addEventListener('click', (e) => {
//   // Разделим проверку на две отдельные логики

//   // Если нажата кнопка "Старт"
//   if (e.target.id === 'start') {
//     if (!intervalId) { // Запускаем таймер, если он еще не был запущен
//       intervalId = setInterval(() => {
//         time++; // Увеличиваем время
//         timer.innerText = time; // Обновляем текст на экране
//       }, 1000);
//     }
//   }

//   // Если нажата кнопка "Пауза"
//   if (e.target.id === 'pause') {
//     clearInterval(intervalId); // Останавливаем таймер
//     intervalId = null; // Сбрасываем идентификатор интервала, чтобы можно было снова запустить
//   }

//   if(e.target.id === 'reset'){
//     clearInterval(intervalId); 
//     intervalId = null;
//     time = 0;
//     timer.innerText = time;
//   }
// });


// const form = document.getElementById('taskForm')
// const input = document.getElementById('taskInput');
// const list = document.createElement('ul');
// form.appendChild(list);
// const tasksCount = document.getElementById('taskCount');
// let tasksLeft;
// tasksCount.innerText = `Tasks left: ${tasksLeft}`;
// let tasksArr = [];

// const task = document.createElement('li');
//   const removeButton = document.createElement('button');
//         removeButton.innerText = 'Remove';
//   const done = document.createElement('button');
//         done.innerText = 'Done';
// if(tasksArr){
//   for (let index = 0; index < localStorage.length; index++) {
//     tasksArr.push()
//   }
// }




// form.addEventListener('submit', e =>{
//   e.preventDefault();

//   localStorage.getItem('tasksLeft')? tasksLeft = +localStorage.getItem('tasksLeft') : tasksLeft = 10;
  
//   if(tasksLeft >0){
//     task.innerText = input.value;
//     task.appendChild(removeButton);
//     task.appendChild(done);
//     list.appendChild(task);
//     input.value = ''
//     input.placeholder = 'Enter task'
//     tasksLeft--;
//   }
//   else alert('No more tasks permitted')

//  done.addEventListener('click', e=>{
//   e.target.parentNode.style.textDecoration = 'underline';
//   tasksLeft++;
//  })
//   removeButton.addEventListener('click',e=>{
    
//     e.target.parentNode.remove();
//     tasksLeft++;
//     tasksCount.innerText = `Tasks left: ${tasksLeft}`
//     localStorage.setItem('tasksLeft', tasksLeft)
//   })

//    tasksCount.innerText = `Tasks left: ${tasksLeft}`
//    localStorage.setItem('tasksLeft', tasksLeft)
// })


// const form = document.getElementById('taskForm');
// const input = document.getElementById('taskInput');
// const list = document.createElement('ul');
// form.appendChild(list);
// const tasksCount = document.getElementById('taskCount');

// let tasksLeft = localStorage.getItem('tasksLeft') ? +localStorage.getItem('tasksLeft') : 10;
// let tasksArr = JSON.parse(localStorage.getItem('tasksArr')) || [];

// tasksCount.innerText = `Tasks left: ${tasksLeft}`;

// // Функция для обновления счётчика и сохранения
// function updateTaskCount() {
//   tasksCount.innerText = `Tasks left: ${tasksLeft}`;
//   localStorage.setItem('tasksLeft', tasksLeft);
// }

// // Функция для рендеринга задачи
// function renderTask(taskText, completed = false) {
//   const task = document.createElement('li');
//   task.innerText = taskText;

//   if (completed) {
//     task.style.textDecoration = 'underline';
//   }

//   const removeButton = document.createElement('button');
//   removeButton.innerText = 'Remove';

//   const doneButton = document.createElement('button');
//   doneButton.innerText = 'Done';

//   // Кнопка "Done"
//   doneButton.addEventListener('click', () => {
//     task.style.textDecoration = 'underline';
//     const taskToUpdate = tasksArr.find((t) => t.text === taskText);
//     if (taskToUpdate) taskToUpdate.completed = true;
//     localStorage.setItem('tasksArr', JSON.stringify(tasksArr));
//   });

//   // Кнопка "Remove"
//   removeButton.addEventListener('click', () => {
//     task.remove();
//     tasksArr = tasksArr.filter((t) => t.text !== taskText);
//     localStorage.setItem('tasksArr', JSON.stringify(tasksArr));
//     tasksLeft++;
//     updateTaskCount();
//   });

//   task.appendChild(removeButton);
//   task.appendChild(doneButton);
//   list.appendChild(task);
// }

// // Рендер задач при загрузке
// tasksArr.forEach((task) => renderTask(task.text, task.completed));

// // Обработчик добавления новой задачи
// form.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const taskText = input.value.trim();
//   if (!taskText) {
//     alert('Task cannot be empty!');
//     return;
//   }

//   if (tasksLeft > 0) {
//     tasksArr.push({ text: taskText, completed: false });
//     localStorage.setItem('tasksArr', JSON.stringify(tasksArr));
//     renderTask(taskText);
//     tasksLeft--;
//     updateTaskCount();
//     input.value = '';
//     input.placeholder = 'Enter task';
//   } else {
//     alert('No more tasks permitted');
//   }
// });
