describe('Pizza', function() {
  it("Gathers name, size and toppings information", function() {
    var testPizza = new Pizza ("Bill", "Small", "Pepperoni");
    expect(testPizza.Name).to.equal("Bill");
    expect(testPizza.Size).to.equal("Small");
    expect(testPizza.Toppings).to.equal("Pepperoni");
  });

  it("Gathers name, size and toppings with toppings in an array of those selected", function() {
    var testPizza = new Pizza ("Bill", "Small", ['Pepperoni', 'Sausage']);
    expect(testPizza.Name).to.equal("Bill");
    expect(testPizza.Size).to.equal("Small");
    expect(testPizza.Toppings).to.eql['Pepperoni', 'Sausage'];
  });
});

describe('Pizza.SizePrice', function() {
  it("Calculates the pizza price based on size selection", function ()  {
    var testPizza = new Pizza ("Bill", "Small", []);
    expect(testPizza.SizePrice()).to.equal(8);
  });
});

describe('Pizza.ToppingsPrice', function() {
  it("Calculates the pizza price based on size selection", function ()  {
    var testPizza = new Pizza ("Bill", "Small", ['Pepperone', 'Sausage', 'Bacon', 'Chicken']);
    expect(testPizza.ToppingsPrice()).to.equal(8);
  });
});
