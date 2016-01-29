describe('Order', function()  {
  it("creates a new Order with the given properties", function() {
    var testOrder = new Order("Bill","Small");
    expect(testOrder.firstName).to.equal("Bill");
    expect(testOrder.size).to.equal("Small")
    expect(testOrder.toppings).to.eql([]);
    expect(testOrder.price).to.eql([]);
  });
});
//
//   it("adds the fullName method to all contacts", function() {
//     var testContact = new Contact("Sherlock","Holmes");
//     expect(testContact.fullName()).to.equal("Sherlock Holmes");
//   });
//
//   describe('Address', function() {
//   it("creates a new address with the given specifications", function() {
//     var testAddress = new Address("123 Main St", "Test City","Test State");
//     expect(testAddress.street).to.equal("123 Main St");
//     expect(testAddress.city).to.equal("Test City");
//     expect(testAddress.state).to.equal("Test State");
//   });
// });
// });
