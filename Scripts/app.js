"use strict"; // helps debug some challenges (triggers compiler so that certain things will give errors, ex. assigning values to variables without declaration)
// let myGlobalVariable = 0; use let instead of var (no hoisting, which can change the written from how it's written), but it's better to encapsulate

// self-executing anonymous function
// IIFE (Immediately Invoked Function Expression)
(function(){ // IFFE header
    let myFunctionalVariable = 0;

    // same as let Start = function() {...} --> pointing to anon function with identifier
    function Start() { // named function
        let myLocalVariable = 0;
        console.log(`App Started...${myFunctionalVariable}`); // use back ticks instead of double quotation marks ("") to create template strings when writing to console
        // injects value instead of concatenating (which would change the variable type) when interpolating
    }

    window.addEventListener("load", Start); // on load, call Start function (call back)
})();