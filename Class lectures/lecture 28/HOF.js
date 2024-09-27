// HOF => Higher Order Function
function printname(func,num){
    for(let i =1;i<num;i++){
        func();
    }
}


let iname = function(){
    console.log("Navi ");
};
printname(iname,2);