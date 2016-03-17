/**
 * Created by devon on 2016-03-17.
 */
(function(){
    "use strict";

    // Instantiate new xhr object
    var request = new XMLHttpRequest();
    request.open('GET', '/COMP1073-Lesson09/projects.json', true);
    request.addEventListener('readystatechange', function(){
        if(request.readyState === 4){

            var projects = {};

            // Read in new JSON object
            projects = JSON.parse(request.responseText);

            // Declare local paragraph array container
            var paragraphArray = [];

            // Read in the paragraphs array from the JSON object
            paragraphArray = projects.paragraphs;

            // Put array length into variable
            var paragraphArrayLength = paragraphArray.length;

            // Loop through array items
            for(var number = 0; number < paragraphArrayLength; number++){

                // Create a reference to each HTML element
                var paragraph = document.getElementById("paragraph" + (number + 1));

                // Set the innerHTML of the paragraph to the string from the paragraphArray
                paragraph.innerHTML = paragraphArray[number];
            }
        }
    });

    request.send();

})();