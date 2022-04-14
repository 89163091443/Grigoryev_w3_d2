const {sum_arr} = require('./Sum_of_arr_sing')

describe('Task_1', () =>{

  test('Sum of array single', () =>{
    expect(sum_arr([1,1,1,0,0,0])).toBe(0)
  })
  test('Sum of array single', () =>{
    expect(sum_arr([1,2,3,4,5,6])).toBe(21)
  })
  test('Sum of array single', () =>{
    expect(sum_arr([1,10])).toBe(11)
  })
  test('Sum of array single', () =>{
    expect(sum_arr([1])).toBe(1)
  })
})