var katzDeli = []

function takeANumber(katzDeliLine, p){
  katzDeliLine.push(p)
}

function nowServing(katzDeliLine, i){
  if(katzDeliLine.length === 0){
    katzDeliLine[0]
    katzDeliLine.shift()
  }
  return "The line is currently empty."
}