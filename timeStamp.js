describe('Time Stamp',()=>{

    it("get time stamp", function () {
        var currentDate = new Date();
        var date = currentDate.getDate();
        var month = currentDate.getMonth(); 
        var year = currentDate.getFullYear();
        var monthDateYear  = date + "/" + (month+1) + "/" + year;
        cy.log(monthDateYear)    
    })


})