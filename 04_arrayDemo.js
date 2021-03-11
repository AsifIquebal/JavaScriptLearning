describe('Array Concepts', () => {

    it('Shift, Unshift, Pop', () => {
        numbers = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']
        numbers[0] = '1'
        console.log(numbers)
        // number shift
        numbers.shift()
        console.log("After Shift: " + numbers)
        console.log(numbers.shift())
        console.log("After Shift: " + numbers)
        numbers.unshift('hello')
        console.log("After unshift: " + numbers)
        numbers = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']
        console.log(numbers)
        numbers.pop()
        console.log("After Pop: " + numbers)
    });

    it.only('Array to Oject : Spread ... operator', () => {
        var fruits = ["Appale", "Banana", "Oranges"]
        var fruitsObject = { ...fruits };
        console.log(fruitsObject);
    });

    it('Extract Unique Values', () => {
        var entries = [1, 2, 2, 3, 4, 5, 6, 6, 7, 7, 8, 4, 2, 1]
        var unique_entries = [...new Set(entries)];
        console.log(unique_entries);
    });

    it('Flatten Numtidimensional Array', () => {
        var entries = [1, [2, 5], [6, 7], 9];
        // Spread operator
        var flat_entries = [].concat(...entries);
        // [1, 2, 5, 6, 7, 9]
    });

    it('Resize an Array', () => {
        var entries = [1, 2, 3, 4, 5, 6, 7];
        console.log(entries.length); // 7  
        entries.length = 4;
        console.log(entries.length); // 4  
        console.log(entries); // [1, 2, 3, 4]
        entries.length = 0;
        console.log(entries.length); // 0 
        console.log(entries); // []
    });

    it('asif', () => {
        function isEven(element) {
            return element % 2 == 0;
        }
        console.log(isEven(12));
    });

    it('my second test', () => {
        var isEven = (element) => {
            return element % 2 == 0;
        }
        var result = [2, 4, 9].every(isEven)
        console.log(result)
        console.log("Checking for inputted parameter: " + isEven(13))
    });

    it('test2', () => {
        var result = [2, 4, 9].every((e) => {
            return e % 2 == 0
        });
        console.log(result)
        console.log("Hello World")
    });

    // if no return no need for curly braces
    it('without return', () => {
        var r = [2, 4, 6, 8].every((e) => (e % 2 == 0));
        console.log(r)
    });

})