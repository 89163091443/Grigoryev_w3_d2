function sum_arr(array){

  let result = 0;
  
  for(let i=0; i < array.length; i++){
    let count = 0;
    
    for(let j=0; j < array.length; j++){
     
      if(array[i] == array[j] && i!=j){
        count++;
      }
    
    }
    if (count == 0){
      result += array[i];
    }  
  }

  return result;
}

module.exports = {sum_arr}