class Teacher{
    constructor(name,subject){
        this.name=name
        this.subject=subject
    }
}
let firstTeacher=new Teacher("Sif Rasheed","Network")
let secTeacher= new Teacher("Sif Usman","Data minnig")
console.log(firstTeacher);
console.log(secTeacher);

class Std{
    constructor(name,subject){
        this.name=name
        this.subject=subject
        
    }
    doesRun(){
        console.log("yes zain runs very fast");
    }
}
 
let firststd=new Std("zain","Network");
console.log(firststd.doesRun());
let secstd= new Std("hadi","Data minnig")
console.log(firststd);
console.log(secstd);
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
  
    }
    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  let myCar = new Car("Ford", 2014);
  console.log(myCar.age);
  document.getElementById("demo").innerHTML =
  "My car is " + myCar.age() + " years old.";