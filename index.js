function takeANumber(katzDeliLine) {
  var number = katzDeliLine.length + 1;
  return `Welcome, Your number is .${number}`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!";
  }
  else {return "Currently serving " + katzDeliLine.shift() + ".";
  }
}

function currentLine(katzDeliLine) {
  var line = [];
  if (katzDeliLine.length < 1) {
    return "The line is currently empty.";
  }
  else {for (let i = 0; i < katzDeliLine.length; i++) {line.push( ` ` + [i + 1] + `. ` + katzDeliLine[i] )}
  return (`The line is currently:` + line);
  }
}