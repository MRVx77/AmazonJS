class Car {
  #brand;
  #model;
  speed = 0;
  isTrunkOpen = false;

  constructor(carDetails) {
    this.#brand= carDetails.brand;
    this.#model= carDetails.model;
  }
  displayInfo() {
    const trunkStatus = this.isTrunkOpen ? 'open' : 'closed';
    console.log(`${this.#brand}, ${this.#model}, ${this.speed} km/h, Trunk: ${trunkStatus}`);
  }
  go(){
    if(!this.isTrunkOpen) {
      this.speed+=5;
    }
    if(this.speed > 200) this.speed =200;
    
  }
  break() {
    this.speed-=5;
    if(this.speed <0) this.speed = 0;
    
  }
  openTrunk(){
    if(this.speed=== 0) {
      this.isTrunkOpen = true;
    }
  }
  closeTrunk(){
    this.isTrunkOpen = false;
  }
} 

class RaceCar extends Car {
  acceleration;
  
  constructor(carDetails) {
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }

  go() {
    this.speed += this.acceleration;

    if(this.speed > 300) {
      this.speed = 300;
    }
  }

  openTrunk() {
    console.log('Race cars do not have a trunk.');
  }
  closeTrunk() {
    console.log('Race cars do not have a trunk.');
  }
}

const car1 = new Car({
  brand: 'BMW',
  model: 'M5'
});

const car2 = new Car({
  brand: 'Toyota',
  model: 'supra mk4'
});

const raceCar = new RaceCar({
  brand: 'Bugatti',
  model: 'chiron',
  acceleration: 400
});

car1.openTrunk();
car1.displayInfo();
car1.go();
car1.go();
car1.go();
car1.break();
car1.displayInfo();

car2.displayInfo();

raceCar.go();
raceCar.go();
raceCar.go();
raceCar.displayInfo();
raceCar.openTrunk();
raceCar.displayInfo();
raceCar.break();
raceCar.displayInfo();