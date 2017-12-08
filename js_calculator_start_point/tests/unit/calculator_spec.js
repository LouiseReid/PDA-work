var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should be able to add numbers', function(){
    calculator.previousTotal = 3
    calculator.add(2)
    assert.equal(calculator.runningTotal, 5)
  })

  it('should be able to subtract numbers', function(){
    calculator.subtract(2)
    assert.equal(calculator.runningTotal, -2)
  })

  it('should be able to multiply numbers', function(){
    calculator.previousTotal = 2
    calculator.multiply(2)
    assert.equal(calculator.runningTotal, 4)
  })

  it('should be able to divide numbers', function(){
    calculator.previousTotal = 10
    calculator.divide(2)
    assert.equal(calculator.runningTotal, 5)
  })

  it('should be able to click a number', function(){
    calculator.numberClick(2)
    assert.equal(calculator.runningTotal, 2)
  })

  it('should nullify the last opperator clicked when "=" is clicked', function(){
    calculator.operatorClick('+')
    calculator.operatorClick('-')
    calculator.operatorClick('*')
    calculator.operatorClick('/')
    calculator.operatorClick('=')
    assert.equal(calculator.previousOperator, null)
  })

  it('should add numbers when operator + is pressed', function(){
    calculator.runningTotal = 2
    calculator.operatorClick('+')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 4)
  })

  it('should add numbers when operator - is pressed', function(){
    calculator.runningTotal = 2
    calculator.operatorClick('-')
    calculator.numberClick(1)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 1)
  })

  it('should add numbers when operator * is pressed', function(){
    calculator.runningTotal = 2
    calculator.operatorClick('*')
    calculator.numberClick(3)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 6)
  })

  it('should add numbers when operator / is pressed', function(){
    calculator.runningTotal = 10
    calculator.operatorClick('/')
    calculator.numberClick(2)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 5)
  })

  it('should be able to clear the running total', function(){
    calculator.previousTotal = 10
    calculator.clearClick()
    assert.equal(calculator.runningTotal, 0)
  })

});
