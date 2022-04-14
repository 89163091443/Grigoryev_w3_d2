const{two_sum} = require('./sum_two_min_num')

describe('Task_1', () =>{

  test('Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.', () =>{
    expect(two_sum([10, 343445353, 3453445, 3453545353453])).toBe(3453455)
        
  })

  test('Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.', () =>{
    expect(two_sum([10, 10, 10, 10])).toBe(20)
    
  })

  test('Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.', () =>{
    expect(two_sum([10, 0, 0, 10])).toBe(20)
    
  })

  test('Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.', () =>{
    expect(two_sum([4, 3, 2, 1])).toBe(3)
    
  })

  test('Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.', () =>{
    expect(two_sum([19, 5, 42, 2, 77])).toBe(7)
    
  })
})

