describe("Callback Functions Demo", () => {

    it('simple function call in js: Function Declaration way', () => {
        function myprint(param) {
            console.log("Input given : " + param);
        }
        myprint('Aayan');
    });

    it('simple function call in js: Function Expression way', () => {
        let x = function myprint(param) {
            console.log("Input given : " + param);
        }
        x('Aayan');
    });
    //Functions stored in variables do not need function names.
    //They are always invoked (called) using the variable name
    it('Function Expression way as Annonymous', () => {
        let x = function (param) {
            console.log("Input given : " + param);
        }
        x('Aayan');
    });

    it('Function Contructor', () => {
        var myFunction = new Function("a", "b", "return a * b");
        var x = myFunction(4, 3);
    })

    it('demo 1', () => {
        function myDisplayer(some) {
            console.log("Display text: " + some)
        }
        function myCalculator(num1, num2, myCallback) {
            let sum = num1 + num2;
            myCallback(sum);
        }
        // without parenthesis
        myCalculator(5, 5, myDisplayer);
    });

    it('Function Expression Way: a Function can be stored in a variable', () => {
        let f1 = function (some) {
            console.log("Display text: " + some)
        }
        let f2 = function (num1, num2, myCallback) {
            let sum = num1 + num2;
            myCallback(sum);
        }
        f2(5, 5, f1);
    });

    it('simple function call in js', () => {
        let f1 = function myDisplayer(some) {
            console.log("Display text: " + some)
        }
        let f2 = function myCalculator(num1, num2, myCallback) {
            let sum = num1 + num2;
            myCallback(sum);
        }
        f2(5, 5, f1);
    });

})