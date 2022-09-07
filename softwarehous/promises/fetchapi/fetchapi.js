const data=fetch('https://fakestoreapi.com/products').then(res=>res.json()).then(json=>console.log(json))

let prom=new Promise((resolve,reject)=>{
    if(data){
        // console.log(data);
        resolve(data);
    }
    else{
        reject("error")
    }
})  
prom.then((data)=>console.log(data,"data")).catch((error)=>console.log(error,"error"))     
// console.log(typeof prom,"typeof prom");


