describe('Pizza', function() {
  it("selects the size and toppings on the pizza", function() {
    var testPizza = new Pizza ("small", "pepperoni");
    expect(testPizza.size).to.equal("small");
    expect(testPizza.toppings).to.equal("pepperoni");
  });
});
