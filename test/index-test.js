/*global concatenatedString, describe, interpolatedString, it, myString */

it('defines `Hello, everyone!`', function() {
  expect(greeting).toEqual("Hello, everybody!")
})

it('concatenates strings to greet a special guest in SpecialGuest`', function() {
  expect(SpecialGuest).toEqual(`Hello, ${specialGuest}!`)
})

it('interpolates a string in `conversation`', function() {
  expect(conversation).toEqual(`Let's talk about ${topic}.`)
})
