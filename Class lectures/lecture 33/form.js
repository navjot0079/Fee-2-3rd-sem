// var form = document.querySelector("form");
// form.addEventListener('submit',function myfunc(event){
//     var inp = document.querySelector("input");
//     console.dir(inp);
//     console.log(inp.value);
    
//     event.preventDefault();
//     console.log("form submitted");
    
// })

var form = document.querySelector("form");
form.addEventListener('submit',function myfunc(event){
    var inp = document.querySelector("input");
    var p = document.querySelector("p");    
    
    p.innerText= inp.value;
    
    event.preventDefault();
    
    
});