var katzDeli = [ ]


function takeANumber(katzDeliLine, name) {
  var position = katzDeliLine.length + 1
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + position + " in line."
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    return "Currently serving " + line.shift() + "."
  }
}


function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      var name = katzDeliLine[i]
      var number = i + 1
      katzDeliLine.push(` ${number}. ${name}`);
    }
    return `The line is currently: ${katzDeliLine}`
  }
}


/* function currentLine(katzDeliLine) {
  for (var i = 0; i < katzDeliLine.length; i++) {
      var name = katzDeliLine[i]
      var number = i + 1
      katzDeli.push(" " + number + "." + name);
   if (katzDeliLine.length === 0) {
    return "The line is currently empty."
   }
   else {
      return "The line is currently: " + katzDeliLine
    }
  }
} */
  

  
 /* var katzDeliLine = [];
    if (line.length === 0) {
    return "The line is currently empty." 
    } 
    else {
     for (var i = 0; i < line.length; i++) {
      var position = katzDeli[i] + 1 
      var name = katzDeli[i]
      katzDeliLine.push((katzDeli[i] + 1) + ". " + name)
    }
     return "The line is currently:" + katzDeliLine
  } 
} */

