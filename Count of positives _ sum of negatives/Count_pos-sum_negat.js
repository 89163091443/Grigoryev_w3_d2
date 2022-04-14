function pos_neg(array){
  let count_pos = 0;
  let sum_negat = 0;
  let result = [];

  for(let i=0; i<array.length; i++){
    if(array[i]>0 && array[i] !==0 ){
      count_pos++;
    } 
    else {
      sum_negat += array[i];
    }
  }
  
result[0] = count_pos;
result[1] = sum_negat;
return result;
}

module.exports = {pos_neg}