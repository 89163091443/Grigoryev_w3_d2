const {pos_neg} = require('./Count_pos-sum_negat')

describe('Task_1', () => {

  test('Count of positives / sum of negatives', () =>{
    expect(pos_neg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -3,-5,-6,-7,-8,-9,-10])).toEqual([10, -48])
  })
  
  test('Count of positives / sum of negatives', () =>{
    expect(pos_neg([0,0])).toEqual([0, 0])
  })
  
  test('Count of positives / sum of negatives', () =>{
    expect(pos_neg([-10, -10, -10, -10, -10, -10, -10, -10, -10, -10,])).toEqual([0, -100])
  })
  
  test('Count of positives / sum of negatives', () =>{
    expect(pos_neg([10, 10, 10, 10, 10, 10, 10, 10, 10, 10])).toEqual([10, 0])
  })
})