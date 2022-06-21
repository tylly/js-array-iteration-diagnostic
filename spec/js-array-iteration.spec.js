'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)
const expect = chai.expect

const jsIteration = require('../exercises/js-array-iteration')

describe('Q1: Find the May holiday', () => {
	it('Return the element in the holidays array that contains the value of may in the month key', () => {
		const result = jsIteration.mayHoliday
		expect(result).to.eql({ name: 'cinco de mayo', month: 'may' })
	})
})

describe('Q2: Less than 4 letters', () => {
	it('Return all elements in the words array that have less than 4 characters', () => {
		const result = jsIteration.wordsWithLessThanFourLetters
		expect(result).to.eql(['cat', 'tap', 'bay', 'ha'])
	})
})

describe('Q3: Every word has an A', () => {
	it('Return a boolean if all of the strings in the words array contain the letter A', () => {
		const result = jsIteration.doesEveryWordContainA
		expect(result).to.equal(true)
	})
})

describe('Q4: Any word has an X', () => {
	it('Return a boolean if any of the strings in the words array contain the letter X', () => {
		const result = jsIteration.doesAnyWordContainX
		expect(result).to.equal(true)
	})
})

describe('Q5: Developer object', () => {
	it('Return an object that has two keys, javascript and ruby. The javascript and ruby keys should be arrays that hold objects with the correct language in them', () => {
		const result = jsIteration.developersObject
		expect(result).to.eql({
			javascript: [
				{ name: 'ralph', language: 'javascript' },
				{ name: 'gretchen', language: 'javascript' },
				{ name: 'mohammed', language: 'javascript' },
				{ name: 'hideo', language: 'javascript' },
			],
			ruby: [
				{ name: 'alice', language: 'ruby' },
				{ name: 'pat', language: 'ruby' },
				{ name: 'taylor', language: 'ruby' },
			],
		})
	})
})
