const areyoucoming = true;

 const prom1 = new Promise((resolve, reject) => {
    if (areyoucoming) {
        setTimeout(() => {
            resolve(
               fetch('https://fakestoreapi.com/products')
               .then(res=>res.json())
               .then(json=>console.log(json))
    
            )
        }, 2000);
    }
    else {
        reject("no he is not coming")
    }
})
function whatNextIfComing(result) {
    // console.log("we will go for a ride");
    console.log(result);
}
function whatNextIfNotComing(error) {
    // console.log("i will not talk to you anymore");
    console.log(error);
}
prom1.then(whatNextIfComing)
prom1.catch(whatNextIfNotComing)