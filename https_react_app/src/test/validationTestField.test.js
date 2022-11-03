import validation from '../components/creditcard/validationTextField'


// should not exceed maximum length of the textfield 
test('maximum length exceeded', () => {
    expect(validation('12345', 4, true)).toBe('The input should contain only 4 characters');
  });

  // should not exceed maximum length of the textfield 
test('maximum length exceeded', () => {
  expect(validation('12345678909836782', 16, true)).toBe('The input should contain only 16 characters');
});

// should not allow alphabets in numeric textfield
test('alphabets are not allowed', () => {
    expect(validation('12345a', 6, true)).toBe('The input should contain only digits');
  });

  // should not allow special characters in numeric textfield
test('special characters are not allowed', () => {
    expect(validation('12345?*&^%', 20, true)).toBe('The input should contain only digits');
  });

// should not allow white spaces in numeric textfield
test('white spaces are not allowed', () => {
    expect(validation('12345 ', 6, true)).toBe('The input should contain only digits');
  });


// should not allow numerics in alphabetic textfield
test('numerics are not allowed', () => {
    expect(validation('Sajeel7', 7, false))
    .toBe('The input should contain only alphabets with only one white space between Names');
  });

// should not allow special characters in alphabetic textfield
test('special characters are not allowed', () => {
    expect(validation('Sajeel Naeem?', 20, false))
    .toBe('The input should contain only alphabets with only one white space between Names');
  });

// can have one consecutive empty white space in alphabetic textfield
test('too much white spaces', () => {
    expect(validation(' Sajeel  Naeem  ', 30, false))
    .toBe('The input should contain only alphabets with only one white space between Names');
  });

// Only one name is not valid in the Owner Name field; should contain at least First name and Last name 
test('should contain First and Last Names', () => {
  expect(validation('Sajeel', 30, false))
  .toBe('The input should contain only alphabets with only one white space between Names');
});