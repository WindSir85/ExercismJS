//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  return createTicket(name, number);
};

function createTicket (name, number) {
  let ordinal = 'th'
  let remainder10 = number % 10
  let remainder100 = number % 100
  if (remainder10 === 1 && remainder100 !== 11) {
    ordinal = 'st'
  } else if (remainder10 === 2 && remainder100 !== 12) {
    ordinal = 'nd'
  } else if (remainder10 === 3 && remainder100 !== 13) {
    ordinal = 'rd'
  }
  return `${name}, you are the ${number}${ordinal} customer we serve today. Thank you!`
}