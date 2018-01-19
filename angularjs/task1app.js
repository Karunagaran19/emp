(function () {
    var app = angular.module("demo", []);
    app.controller("StoreController", function () {
        this.contacts = phoneBook
    });
    var phoneBook = [{
        firstName: "karan",
        lastName: "karna",
        email: "karankarna.com",
        phone: "9876543219"
    },
    {
        firstName: "karan",
        lastName: "karna",
        email: "karankarna.com",
        phone: "9876543219"
    },
    {
        firstName: "karan",
        lastName: "karna",
        email: "karankarna.com",
        phone: "9876543219"
    },
    {
        firstName: "karan",
        lastName: "karna",
        email: "karankarna.com",
        phone: "9876543219"
    }];
})();
