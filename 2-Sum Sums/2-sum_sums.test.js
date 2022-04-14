const {sum_sum} = require('./2-sum_sums')

describe('Task_1', () =>{

  test('Sum of array single', () =>{
    expect(sum_sum([2, 4, 6, 10], [6, 10])).toBe(14)
  })

  test('Sum of array single', () =>{
    expect(sum_sum([1, 2, 3, 4], [3, 5])).toBe(7)
  })
  test('Sum of array single', () =>{
    expect(sum_sum([10, 10, 0, 10], [19, 21])).toBe(20)
  })
  test('Sum of array single', () =>{
    expect(sum_sum([1, 2, 3, 4, 5, 6, 7], [10, 15])).toBe(46)
  })
})

10
11
12
13
