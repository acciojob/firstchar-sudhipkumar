function firstChar(text) {
  // Trim leading spaces and return the first character
  let trimmedText = text.trim();
  return trimmedText.length > 0 ? trimmedText[0] : '';
}

// Do not change the code below

// Uncomment the following lines to test in a browser environment
const text = prompt("Enter text:");
alert(firstChar(text));
