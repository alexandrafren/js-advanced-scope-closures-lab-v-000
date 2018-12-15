function produceDrivingRange(blockRange) {
  return function rangeCalculator(startingBlock, endingBlock){
    let distance = Math.abs((parseInt(endingBlock)) - (parseInt(startingBlock)));
    let rangeValue = blockRange - distance;
    if (rangeValue > 0) {
      return "within range by " + rangeValue;
    }
    else {
      rangeValue = Math.abs(rangeValue);
      return rangeValue + " blocks out of range";
    }
  };
}

function produceTipCalculator(percentage) {
  return function tipCalculator(bill){
    return bill * percentage;
  };
}

function createDriver(){
  let DriverId = 0;
  return class {
    constructor(name){
      this.name = name;
      this.id = ++DriverId;
    }
  };
}
