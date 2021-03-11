function counter() {
    //let i = 100
    console.log(i)
    for (var i = 0; i < 5; i++) {
        console.log(i)
    }
    console.log(i)
}

//counter()


describe('Variables Demo', () => {

    it('interpolation', () => {
        console.log("hey welcome")
        let n1 = 'Asif'
        console.log("My name is: `${n1}`" + n1)
        // backticks, varibale interpolation
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

    it('Dynamic Propety Names', () => {
        const dynamic = 'flavour';
        var item = {
            name: 'Coke',
            [dynamic]: 'Cherry'
        }
        console.log(item); // { name: "Coke", flavour: "Cherry" }
    });

    it('Let and Var, ES6 says to use use let', () => {
        function mno() {
            for (var i = 0; i < 5; i++) {
                console.log(i);
            }
            console.log(i);
        }
        function abc() {
            for (let i = 0; i < 5; i++) {
                console.log(i);
            }
            console.log(i);
        }

        console.log(mno());
        console.log(abc());
    });

    it.only('', () => {
        let x = 'a name';
        console.log(typeof x);
        x = 300;
        console.log(typeof x);
        x = true;
        console.log(typeof x);
    });

})