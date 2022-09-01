// now we are going to learn about the function closures

// in function clousers we see three types of conditions
// first more than one function 
// nested function
// the inner function can have the access to the outer functions and its varibles and the parameteres
// the other thing is the lexical scoping
function firstFun(a){
    const b=67;
    function firstInnerFun(){
        let sum =a+b;
        console.log(sum);
    }
    firstInnerFun()
}
firstFun(23)
