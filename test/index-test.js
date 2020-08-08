/*global concatenatedString, describe, interpolatedString, it, myString */

it('defines `Hello, everybody!`', function() {
  expect(greeting).toEqual("Hello, everybody!")
})

it('concatenates strings to greet a special guest in SpecialGuest`', function() {
  expect(SpecialGuest).toEqual(`Hello, ${specialGuest}!`)
})

it('interpolates a string in `conversation`', function() {
  expect(conversation).toEqual("Let's talk about ${topic}.")
})
var greeting = "Hello, everybody!";

var specialGuest = "Neil deGrasse Tyson"

var greetSpecialGuest = "Hello," + specialGuest + "!";

var topic = "space";

var conversation = `${topic}`;