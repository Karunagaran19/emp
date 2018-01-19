(function () {
    var app = angular.module("demo", []);
    app.controller("StoreController", function () {
        this.contacts1 = contact; 
    });
    var contact = [{
        name: "karan",
        dob : "15-04-1996",
        email : "karankarna@gmail.com",
        phone : 7864462678
        }, {
        name: "arun",
        dob : "24-04-1996",
        email : "arunvetri@gmail.com",
        phone : 9837294234
        },
        {
            name: "ragukkumar",
            dob: "12-6-1997",
            email : "ragulkumar@gmail.com",
            phone : 9862752345
        },
        {
            name: "maran",
            dob : "22-11-1996",
            email : "marantamil@gmail.com",
            phone : 8936749345
        }];
})();
