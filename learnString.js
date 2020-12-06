let str = 'welcome to java script'
console.log(str);

let name = new String("Asif");
console.log(name);
console.log(typeof str)
console.log(typeof name);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.includes('to'));

console.log(str.split(" "));

let words = str.split(" ")
words.forEach(ele => {
    console.log(ele);
    
})
console.log(str.length);
let len = str.length
console.log(str.charAt(len-1))
// length is a property, not a function

let space = " hello world "
console.log(space.trim());
console.log(space.trimRight())

console.log(str.substring(0,7));



