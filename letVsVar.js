const panNumber = "ABCD123"
console.log(panNumber)

let name = "asif"
name = "sarkar"
console.log(name)

var name1 = "asif"
name1 = "sarkar"
console.log(name1)
console.log("=======================================================")
function counter() {
    //let i = 100
    console.log(i)
    for (var i = 0; i < 5; i++) {
        console.log(i)
    }
    console.log(i)
}

counter()


describe('Let vs Var after ES6', () => {

    it.only('dot and bracket notation', () => {
        let person = {
            name: 'Reshma',
            age: 26
        };
        // dot
        console.log(person.name)
        // bracket, it allows dynamic programming
        let selection = 'name'
        person[selection] = 'Aayan'
        console.log(person.name)
    })




})