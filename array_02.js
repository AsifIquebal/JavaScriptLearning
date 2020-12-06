describe('Array Concepts', () => {
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
    });

    it('test2', () => {
        var result = [2, 4, 9].every((e) => {
            return e % 2 == 0
        });
        console.log(result)
        console.log("Hello World")
    });
    // if no return no need for curly braces
    it.only('without return', () => {
        var r = [2, 4, 6, 8].every((e) => (e % 2 == 0));
        console.log(r)
    });

})