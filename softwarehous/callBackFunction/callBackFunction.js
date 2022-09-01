function myDisplayer(some) {
    console.log(some);
  }
  
  function myFirst() {
    myDisplayer("Hello");
  }
  
  function mySecond() {
    myDisplayer("Goodbye");
  }
  
  mySecond();
  myFirst();
//   the first result should be Goodbye
//   the second result should be Hello

// these are the callback functions 
// the execution of a function does not depends on the place where it is defined rahter than on the place where it is going to be called 

// settimeout is the best example of callback function 
const date=new Date();
console.log(date);
function currentDate(){
    setTimeout(()=>{
       console.log(date.getHours(),":",date.getMinutes(),":",date.getSeconds());
       document.body.append(date.getHours(),":",date.getMinutes(),":",date.getSeconds());
    currentDate()
   },1000)
}
// currentDate()
function currentDate2(){
    console.log(date.getHours(),":",date.getMinutes(),":",date.getSeconds());
    setTimeout(()=>{
        currentDate2()
    
    },1000)
}
// currentDate2()