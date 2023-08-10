let emailArray = [
    "valid@example.com",
    "invalid.email",
    "another_valid@email.com",
    "missing@tld.",
    "valid.email123@gmail.com",
    "@invalidstart.com",
    "invalid@end.com@",
    "spaces are not@allowed.com",
    "valid_email@yahoo.com",
    "invalid@.tld",
    "valid123@hotmail.com",
    "noatsign.com",
    "valid.email@domain.net",
    "invalid@email@doubleat.com"
]
let emailArrayGood = []
let emailArrayBad = []
const regexEmailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

const emailValidation = (email) => {
  if (regexEmailValidation.test(email)) {
    emailArrayGood.push(email)
  } else {
    emailArrayBad.push(email)
  }
}

for (let i = 0; i < emailArray.length; i++) {
  emailValidation(emailArray[i])
}
console.log('In ' + emailArray.length + ' emails, there are ' + emailArrayGood.length + ' valid emails and ' + emailArrayBad.length + ' invalid emails.')
console.log('good emails are ' + emailArrayGood)
console.log('bad emails are ' + emailArrayBad)