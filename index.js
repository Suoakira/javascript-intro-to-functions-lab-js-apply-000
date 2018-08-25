

function shout(string) {
  return string.toUpperCase(); // .toUpperCase() makes strings uppercase
}

function whisper(string) {
  return string.toLowerCase(); // toLowerCase() makes strings to lower case
}

function logShout(string) {
  console.log(string.toUpperCase()); // console log toUpperCase() when called on a string
}

function logWhisper(string) {
  console.log(string.toLowerCase()); // console logs toLowerCase() when called on a string
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return "I cant't hear you!";
  } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
  } else if ( string === "I love you, Grandma") {
    return "I love you, too";
  }
}

