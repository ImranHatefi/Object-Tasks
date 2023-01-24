// 1. New Key,Value with 2 Functions
let obj = {
    name: "Imran",
    age: 25
}
let x = (key,value) => {
return obj[key] = value
}
let y = (key) => {
    return delete obj[key]
}
x("heigth",191)
y("age")
console.log(obj)
// 2. Add and Delete Key, Value with 1 Function
// let obj = {
//     name: "Imran",
//     age: 25
// }
// let x = (key,value) => {
// let z = Object.keys(obj)
// if (z.includes(key)){
//     return delete obj[key]
// }
// return obj[key] = value
// }

// x("height",191)
// console.log(obj)
// 3. Sorting an Array of Objects.

// let arr = [
//   {
//     name: "Ali",
//     count: 6,
//   },
//   {
//     name: "Nurxan",
//     count: 2,
//   },
//   {
//     name: "Elvin",
//     count: 8,
//   },
//   {
//     name: "Esqin",
//     count: 1,
//   },
// ];
// arr.sort((a, b) => a.count - b.count);
// console.log(arr);

// 4. new object from old object
// let obj = {
//   name: "Ali",
//   count: 6,
// };

// let newobj = Object.assign({}, obj)

//5. Deep clone an Object
// let obj = {
//   name: "Elvin",
//   count: 8,
// };
// let newobj = JSON.parse(JSON.stringify(obj))
// console.log(newobj)

//6. Functional Constructor
// function car(carmodel, carsize, caryear) {
//   this.model = carmodel;
//   this.size = carsize;
//   this.year = caryear;
// }
// let obj = new car("BMW", "Big", 2004);
// console.log(obj);

//7. Builder Pattern??? 
// function Car (carmaker,carmodel,carcolor,caryear,carprice) {
//     this.Maker = carmaker;
//     this.Model = carmodel;
//     this.Color = carcolor;
//     this.Year = caryear;
//     this.Price = carprice;
// }


// function carBuilder(carmaker,carmodel,carcolor){
//     this.Maker = carmaker;
//     this.Model = carmodel;
//     this.Color = carcolor;

//     this.setYear = function(caryear){
//         this.Year = caryear;
//         return this
//     }
//     this.setPrice = function(carprice){
//         this.Price = carprice;
//         return this
//     }

//     this.build = function(){
//         return new Car (this.Maker,this.Model,this.Color,this.Year,this.Price)
//     }
// }

// const BMW = new carBuilder ("BMW","X3","Gray").setYear(2022).setPrice(100000).build()
// console.log(BMW)




















// function Phone(phoneMaker, phoneColor, phonePrice){
//     this.Maker = phoneMaker;
//     this.Color = phoneColor;
//     this.Price = phonePrice
// }
// function phoneBuilder (phoneMaker,phoneColor){
//     this.Maker = phoneMaker;
//     this.Color = phoneColor;

//     this.setPrice = function(phonePrice){
//         this.Price = phonePrice;
//         return this;
//     }
//     this.build = function(){
//         return new Phone(this.phoneMaker,this.phoneColor,this.phonePrice);
//     }
// }

// let iphone = new phoneBuilder('Apple','White').setPrice(1400).build()
// console.log(iphone)

//Another on but doesnt work and dont know why ?