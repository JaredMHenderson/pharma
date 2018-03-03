var Nightmare = require("nightmare");
var expect = require("chai").expect;

describe("quickPharma", function () {
    // The default tests in mocha is 2 seconds.
    // Extending it to 30 seconds to have time to load the pages

    this.timeout(30000);
    it("should send user to the log in page", function (done) {
        // ID for the login button.
        Nightmare({ show: true })
            .goto("http://localhost:3000/")
            // Click the catalog link
            .click("a[href='home']")
            // Evaluate the title
            .evaluate(function () {
                return document.title;
            })
            // Asset the title is as expected
            .then(function (title) {
                done();
            });
    });

  
});
