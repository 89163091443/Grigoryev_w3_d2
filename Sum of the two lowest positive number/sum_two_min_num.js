
function two_sum(array){
  function min(){
    let j;
    let result = Infinity;
    
    for(let i=0; i<array.length; i++){
      if(array[i]<result && array[i] !== 0){
        result=array[i]
        j=i;
      }
    }
    array[j] = 0;
    return result;
  }
 return min() + min();
}

module.exports = {two_sum}