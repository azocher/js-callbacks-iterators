var phoneBook = [
  {Abe: "111-111-1111"},
   {Bob: "222-222-2222"},
   {Cam: "333-333-3333"},
   {Dan: "444-444-4444"},
   {Ern: "555-555-5555"},
   {Fry: "111-111-1111"},
   {Gil: "222-222-2222"},
   {Hal: "333-333-3333"},
   {Ike: "444-444-4444"},
   {Jim: "555-555-5555"},
   {Kip: "111-111-1111"},
   {Liv: "222-222-2222"},
   {Mia: "333-333-3333"},
   {Nik: "444-444-4444"},
   {Oli: "555-555-5555"},
   {Pam: "111-111-1111"},
   {Qiq: "222-222-2222"},
   {Rob: "333-333-3333"},
   {Stu: "444-444-4444"},
   {Tad: "555-555-5555"},
   {Uwe: "111-111-1111"},
   {Val: "222-222-2222"},
   {Wil: "333-333-3333"},
   {Xiu: "444-444-4444"},
   {Yam: "555-555-5555"},
   {Zed: "111-111-1111"}
  ];

// Take the phonebook above and use map to return a new phonebook that includes a country-code that matches the rest of the phone number.
// For example, the 0th element of the new array should be {Abe: "1-111-111-1111"}

// write a function that takes an array of objects
function countryCodes(obj) {
  // store the value at each key value pair in a variable
  // becuase Object.values returns an array format, but our arrays will each only be of length 1, I use bracket notation to access as string
  var origKey = Object.keys(obj)[0];
  var origVal = Object.values(obj)[0];
  
  // store the repeated number as a single digit string in a variable
  var num = origVal[0];
  
  // concatenate the number to the start of the original value in country code format
  var newVal = `${num}-${origVal}`;

  // store as a variable the original key with the new value in a new object
  var newObj = {};
  newObj[origKey] = newVal;

  // return this new object as the result of this function
  return newObj;
}

console.log(phoneBook.map(countryCodes));
