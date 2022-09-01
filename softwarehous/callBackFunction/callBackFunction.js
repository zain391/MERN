// const date=new Date();

const p=document.getElementById("para");

// today();
// function today(){
//     setTimeout(()=>{
//         p.innerText=`${date.getSeconds()}`
//         console.log(`${date.getSeconds()}`);
//         // today()
//     },1000)
// }

function today2(){
    p.innerText=`${date.getSeconds()}`

}
setTimeout(()=>{
    today2()
},1000)
let date = document.getElementById("date");
console.log(date);
function clock(time) {
    date.innerText = time;
    setTimeout(function (){
        clock(new Date())
    },1000)
}
clock(new Date())
