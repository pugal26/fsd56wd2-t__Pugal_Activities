class UberPriceCalculator {
    constructor(baseFare, costPerKilometer, costPerMinute, surgeMultiplier = 1) {
      this.baseFare = baseFare;
      this.costPerKilometer = costPerKilometer;
      this.costPerMinute = costPerMinute;
      this.surgeMultiplier = surgeMultiplier;
    }
  
    calculatePrice(distance, duration) {
      const fareBeforeSurge = this.baseFare + (distance * this.costPerKilometer) + (duration * this.costPerMinute);
      const totalFare = fareBeforeSurge * this.surgeMultiplier;
      return totalFare;
    }
  }
  
  let uberCalculator = new UberPriceCalculator(15, 10, 5, 1.2);
  
// Calculated Uber price for a 10 km, 20-mins ride
  let distance = 10; // in km
  let duration = 20; // in mins
  let price = uberCalculator.calculatePrice(distance, duration);
  
  console.log("Uber Price:", price);
  