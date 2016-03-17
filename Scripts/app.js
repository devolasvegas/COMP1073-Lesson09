// setup your IIFE (Immediately Invoked Function Expression)
(function() {

    "use strict";

    var firstParagraph = document.getElementById("firstParagraph");

    // Instantiate new xhr object
    var request = new XMLHttpRequest();
    request.open('GET', '../people.txt', true);
    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4) {

            var people = {};

            people = JSON.parse(request.responseText);

            // Declare address array
            var addressBook = []; /* var addressBook = new Array(); */

            // Read in data from person.text
            addressBook = people.addressBook;

            var addressBookLength = addressBook.length;


            // For each person in our address book . . . loop
            for(var person = 0; person < addressBookLength; person ++){

                var output = "";

                // Assign the sayHello method to each person object
                addressBook[person].sayHello = function() {
                    output += "<br><hr><br>" + addressBook[person].name + " says hello.";
                }

                // for every key in the Person object, loop...
                for (var key in addressBook[person]) {

                    // check if the key is the familyNames array
                    if (key === "familyNames") {
                        output += "<br>Family Names: <br>";
                        output += "<hr><br>";
                        output += "<ul>";
                        for (var index = 0; index < addressBook[person].familyNames.length; index++) {
                            output += "<li>" + addressBook[person].familyNames[index] + "</li>";
                        } // for loop
                        output += "</ul>";
                    } // if statement
                    else if (key === "sayHello") {
                        addressBook[person].sayHello();
                    }

                    // for all other cases do the following...
                    else {

                        output += addressBook[person][key] + "<br>";
                    } // else statement

                } // inner for loop

                var paragraphString = "paragraph" + (person + 1);
                var paragraph = document.getElementById(paragraphString);
                paragraph.innerHTML = output;

                firstParagraph.innerHTML = output;

            } // outer for loop

        }

        console.log(addressBook);

        //var Person = {}; /* var Person = new Object();   */
/*
        Person = JSON.parse(request.responseText);

        Person.sayHello = function() {
            output += "<br><hr><br>" + Person.name + " says hello";
        } */


    });

    request.send();


})();

