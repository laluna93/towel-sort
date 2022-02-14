
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = matrix;
  let arr2;
let arr3=[]
let arr4 =[];
let arr5;
let number;
if(arguments.length==0){
  return []
}if(Array.isArray(matrix)){
  if(matrix.length ===0){
    return []
  }
}
if(arr !== [] && arr !== undefined && arr !=NaN){
for(let i =0; i<arr.length; i++){
  arr3=[]
    for(let k =0; k <arr[i].length;k++){ 
        arr2 = i%2===0? k : (arr[i].length-k-1) 
         arr3.push(arr[i][arr2])
    } 
    arr4.push(arr3)
} 
arr5 = arr4.join()
let b=arr5.split(',')
 number = b.map(parseFloat);
console.log(number) 
return number = b.map(parseFloat)
}
}