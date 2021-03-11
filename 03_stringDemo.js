describe('String Functions', () => {

    it('literal and object', () => {
        let str = 'welcome to java script'
        console.log(str);
        let userName = new String("Asif");
        console.log(userName);
        console.log(typeof str)
        console.log(typeof userName);
        console.log(str.toUpperCase());
        console.log(str.toLowerCase());
        console.log(str.includes('to'));
        console.log(str.split(" "));
    });

    it.only('', () => {
        let str = 'welcome to java script';
        let words = str.split(" ")
        words.forEach(ele => {
            console.log(ele);
        })
        console.log(str.length);
        console.log(str.charAt(str.length - 1))
        // length is a property, not a function
    });

    it('Trim', () => {
        let space = " hello world "
        console.log(space.trim());
        console.log(space.trimRight())
        let str = 'welcome to java script';
        console.log(str.substring(0, 7));
    });

    it('replace all', () => {
        var example = "potato potato";
        console.log(example.replace(/pot/, "tom")); // "tomato potato"
        console.log(example.replace(/pot/g, "tom")); // "tomato tomato"
    });

    it('Number to String', () => {
        var converted_number = 5 + "";
        console.log(converted_number); // 5
        console.log(typeof converted_number); // string
    });

    it('String to Number', () => {
        the_string = "123";
        console.log(+the_string); // 123
        the_string = "hello";
        console.log(+the_string); // NaN
    });

})