describe("Functions in Java Scripts", () => {

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

    it('Function Expression: Treating function as value', () => {
        function sayHello() {
            return "Hello, ";
        }
        function greeting(helloMessage, name) {
            console.log(helloMessage() + name);
        }
        // Pass `sayHello` as an argument to `greeting` function
        greeting(sayHello, "JavaScript!");
        // We are passing our sayHello() function as an argument to the greeting() function, 
        // this explains how we are treating the function as a value.
        // The function that we pass as an argument to another function, is called a Callback function.
        // sayHello is a Callback function.
    });

    it('Higher Order Function: Using variable', () => {
        const sayHello = function () {
            return function () {
                console.log("Hello!");
            }
        }
        const myFunc = sayHello();
        myFunc();
    });

    it.only('Higher Order Function: Using double parentheses', () => {
        const sayHello = function () {
            return function () {
                console.log("Hello!");
            }
        }
        sayHello()();
    });

    it('Hoisting', () => {
        // Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.
        // Hoisting applies to variable declarations and to function declarations.
        // Because of this, JavaScript functions can be called before they are declared:
        add();
        function add() {
            console.log(2 + 3)
        }
    })

    it('Different ways', () => {
        let add1 = function (num1, num2) {
            console.log(num1 + num2)
        }
        add1(1, 2)

        let add2 = (num1, num2) => {
            console.log(num1 + num2)
        }
        add2(2, 2)

        let add3 = () => {
            console.log(3 + 3)
        }
        add3()
    })
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

    it('Self Invoking Functions', () => {
        (function test() {
            console.log('Hello World...')
        })();
    })

    it('Type of Function is function', () => {
        function add() {
            console.log(arguments.length);
        }
        add();
        // The typeof operator in JavaScript returns "function" for functions.
        // But, JavaScript functions can best be described as objects.
        console.log(typeof (add));
    })


    it('Missing Arguments', () => {
        // If a function is called with missing arguments (less than declared)
        // the missing values are set to undefined
        function myFunction(x, y) {
            if (y === undefined) {
                y = 2;
            }
            console.log("Param1: " + x + "\nParam2: " + y);
        }
        myFunction(6, 4);
        myFunction(6);
    })

    it('Default Parameters ES6 onwards', () => {
        function xyz(x, y = 2) {
            console.log("Param1: " + x + "\nParam2: " + y);
        };
        xyz(6, 4);
        xyz(6);
    })

    it('Argument Object', () => {
        x = findMax(1, 123, 500, 115, 44, 88);
        function findMax() {
            var i;
            var max = -Infinity;
            for (i = 0; i < arguments.length; i++) {
                if (arguments[i] > max) {
                    max = arguments[i];
                }
            }
            console.log(typeof (arguments));
            console.log(max);
        }
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