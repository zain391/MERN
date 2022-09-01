function person1(){
    setTimeout(() => {
        console.log("website layout is loaded");
        person2()
    }, 3000);
}
function person2(){
    console.log("data from DB is being loaded");
}
person1()

