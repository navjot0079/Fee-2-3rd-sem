// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS

(function chai(){
    console.log(`Mode 1`);
    
})(); // ; is used to end the function

((name) => {
    console.log(`Mode 2 begin ${name}`);
    
})('navjot');