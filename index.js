var katzDeli = []

function takeANumber(katzDeliLine, p){
  katzDeliLine.push(p)
  return ("Welcome, " + p + ". You're currently number " + katzDeliLine.length + " in line.")
}

function nowServing(katzDeliLine, i){
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    return ("Now serving: " + katzDeliLine.shift() + ".")
  }
}