function sum_sum(array1, array2){
  let result = 0;
  let count = array2[1]-array2[0];
  for(; array2[0]<array2[1]; array2[0]++){

    for(let j=0; j<array1.length; j++){
      for(let l=0; l<array1.length; l++){
        if(array1[j]+array1[l]==array2[0] && l!=j){
          result +=array2[0];
          array2[0]+=1;
          count--;
          if(count < 1) return result;
        }
      }
    }

  }
 return result;

}

module.exports = {sum_sum}