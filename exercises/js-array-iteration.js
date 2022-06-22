'use strict'
/*
=============== JavaScript Array Iteration ==================
GOAL: Read each question and write code to complete each task
      given. Do not change starter code or function names.

TEST: To test run the commands `npm run test` in your terminal
      at the root of this directory.(js-array-iteration-diagnostic)
      Don't worry about capitalization.
*/

const holidays = [
	{ name: 'valentines day', month: 'february' },
	{ name: 'cinco de mayo', month: 'may' },
	{ name: 'halloween', month: 'october' },
]

/*
Question 1

Given the array above, return the element in the `holidays` array that contains the value of `may` in the `month` key.
*/
const mayHoliday = holidays.find(() => {
})

const words = ['cat', 'bath', 'orange', 'tap', 'bay', 'ha', 'extravagant']

/*
Question 2

Given the array above, return all elements in the `words` array that have less than 4 characters. 
*/
const wordsWithLessThanFourLetters = words.filter(() => {

})

/*
Question 3

const words = ['cat', 'bath', 'orange', 'tap', 'bay', 'ha', 'extravagant']

Given the array above, return true if all of the strings in the `words` array contain the letter `a`. 
*/
const doesEveryWordContainA = words.every(() => {

})

/*
Question 4

const words = ['cat', 'bath', 'orange', 'tap', 'bay', 'ha', 'extravagant']

Given the array above, return true if any of the strings in the `words` array contain the letter `x`. 
*/
const doesAnyWordContainX = words.some(() => {

})

const developersArray = [
	{ name: 'ralph', language: 'javascript' },
	{ name: 'gretchen', language: 'javascript' },
	{ name: 'alice', language: 'ruby' },
	{ name: 'mohammed', language: 'javascript' },
	{ name: 'pat', language: 'ruby' },
	{ name: 'taylor', language: 'ruby' },
	{ name: 'hideo', language: 'javascript' },
]

/*
Question 5

Given the array above, return an object that has two keys, `javascript` and `ruby`. 

The `javascript` and `ruby` keys should be arrays that hold objects with the correct `language` in them. 

The finished object should look like:
{
  javascript: [
    {name: 'ralph', language: 'javascript'},
    {name: 'gretchen', language: 'javascript'},
    {name: 'mohammed', language: 'javascript'},
    {name: 'hideo', language: 'javascript'}
  ],
  ruby: [
    {name: 'alice', language: 'ruby'},
    {name: 'pat', language: 'ruby'},
    {name: 'taylor', language: 'ruby'}
  ]
}
*/
const developersObject = developersArray.reduce(() => {

}, {javascript: [], ruby: []})

/* !!! DO NOT MODIFY ANYTHING BELOW HERE !!! */
module.exports = {
      mayHoliday,
      wordsWithLessThanFourLetters,
      doesEveryWordContainA,
      doesAnyWordContainX,
      developersObject
}