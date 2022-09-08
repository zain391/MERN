let array1=[23,45];
let num1=0;
let num2=0;
let sortedArray=[];
for(let i=0; i<array1.length; i++){
    if(array1[i]<array1[i+1]){
        num1=array1[i];
        sortedArray.unshift(num1)
    }
}

console.log(sortedArray);