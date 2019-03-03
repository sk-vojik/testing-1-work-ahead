//test code

const math = require('./math');

// test suite


describe('math library', () => {

  describe('add() method', () => {
    
    test('adds two numnbers', () => {
      // assertions using matchers
      expect(math.add(2, 2)).toEqual(4);
      expect(math.add(2, 1)).toEqual(3);
    })

  })
})

//test

  describe('multiply() method', () => {
    
    it('should multiple two numbers', () => {
      expect(math.multiply(3, 4)).toBe(12);
    })
    
  })



