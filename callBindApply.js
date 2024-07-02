let name = {
  firstname: 'Arup',
  lastName: 'Garai',
  printFullName: function (state, city) {
    console.log(
      this.firstname + ' ' + this.lastName + ' ' + state + ' ' + city
    );
  },
};

let name2 = {
  firstname: 'Sachin',
  lastName: 'Tendulkar',
};
console.log('Call Bind Apply');
name.printFullName.call(name2, 'MH', 'Mumbai');
name.printFullName.apply(name2, ['WB', 'Kolkata']);
name.printFullName.bind(name2, ['WB', 'Kolkata'])(); //need to invoke
