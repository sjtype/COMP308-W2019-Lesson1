// let myGlobalVariable = 0; use let instead of var (no hoisting), but it's better to encapsulate

// self-executing anonymous function
// IIFE (Immediately Invoked Function Expression)
(function(){ // IFFE header
    let myFunctionalVariable = 0;

    /*
    // same as let Start = function() {...} --> pointing to anon function with identifier
    function Start() { // named function
        let myLocalVariable = 0;
        console.log(`App Started...${myFunctionalVariable}`); // use back ticks instead of double quotation marks ("")
        // injects value instead of concatenating
    }
    */

    window.addEventListener("load", Start); // on load, call Start function 
})();