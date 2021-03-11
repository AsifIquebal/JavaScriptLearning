describe('Object Concepts', () => {


    it('demo1', () => {
        let mobile = { company: 'Xiaomi', model: 'Note 10 Pro Max', price: 20000 };
        console.log(mobile.company + " " + mobile.model + "\n It will cost you: " + mobile.price + "Rs/-");
        /*
        console.log(mobile.company);
        console.log(mobile.model);
        console.log(mobile.price);
        */
        console.log(JSON.stringify(mobile));
    });






});