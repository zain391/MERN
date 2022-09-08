let randoArray=[54,67,89,8,4,3,2,23,4,653,5,56,4];
let sortedArray=[];
for(let i=0; i<randoArray.length; i++){
    if(randoArray[i]>randoArray[i+1]){
        sortedArray.unshift(randoArray[i])
    }
}
console.log(sortedArray);