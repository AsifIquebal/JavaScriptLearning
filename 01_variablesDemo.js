function counter() {
    //let i = 100
    console.log(i)
    for (var i = 0; i < 5; i++) {
        console.log(i)
    }
    console.log(i)
}

counter()


describe('Variables Demo', () => {

    it.only('interpolation', () => {
        console.log("hey welcome")
        let n1 = 'Asif'
        console.log("My name is: `${n1}`" + n1)
        // backtciks, varibale interpolation
        console.log(`my name is: ${n1}`)
    })

    it('dot and bracket notation', () => {
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

    it('Let and Var, ES6 says to use use let', () => {

    })


})