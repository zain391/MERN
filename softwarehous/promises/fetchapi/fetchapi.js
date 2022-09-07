const data=[{
    messsage:"i have came to visit you "
}]
const promise1=new Promise((resolve,reject)=>{
    if(data){
        resolve(data[0].messsage)
    }
    else{
        reject("there was an error")
    }
})
promise1.then(response=>console.log("response :",response)).then(afterThat=>console.log("we will go outside"))

fetch('https://fakestoreapi.com/products')
            .then(res=>console.log(res.json(),"response.json"))
            // .then(json=>console.log(json))
console.log(JSON.stringify(data));

const fetchdata=fetch('https://fakestoreapi.com/products').then(res=>res.json()).then(json=>console.log(json))
async function gettingData(){
    const respone=await fetch('https://fakestoreapi.com/products');
    const realData=await respone.json();
    console.log(realData,"realData");
}
gettingData()
// console.log(gettingData());