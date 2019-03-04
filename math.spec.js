//test code

const math = require('./math');

test('equality', function () {
  expect({ foo: 'bar' }).toEqual({ foo: 'bar'});
})

// test suite


describe('math library', () => {

  describe('add() method', () => {
    
    test('adds two numnbers', () => {
      // assertions using matchers
      expect(math.add(2, 2)).toEqual(4);
      expect(math.add(2, 1)).toEqual(3);
    });

    it('should return throw an error if one of the args is a string', () => {
      expect(() => {
        math.add('string', 3);
      }).toThrow();
      expect(() => {
        math.add('string', 'string')
      }).toThrow();
      expect(() => {
        math.add( 3, 'string');
      }).toThrow();
    });

  })
})

//test

  describe('multiply() method', () => {

    it('should multiple two numbers', () => {
      expect(math.multiply(3, 4)).toBe(12);
    })
    
  })



