function produceDrivingRange(blockRange) {
  return function rangeCalculator(startingBlock, endingBlock){

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
