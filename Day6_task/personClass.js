class Person {
    constructor(firstName, lastName, batch ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.batch = batch;
    }
  
    getdetails() {
      console.log(`Hi, I'm ${this.firstName} ${this.lastName}. 
My batch ${this.batch}.`);
    }
  }
  
  const person1 = new Person('Pugalendhi', 'Ramesh', 'FSD56WD2-T');
  person1.getdetails();
  