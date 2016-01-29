function Pizza(firstName,size,toppings) {
  this.firstName = firstName;
  this.size = size;
  this.toppings = toppings;
  this.price = Order.price;
}

Pizza.prototype.price = function() {
  if (size === "small")
    return (8 + this.toppings.length);
}

Pizza.prototype.order = function() {
  return this.type + ": " + this.street + ", " + this.city + ", " + this.state;
}

$(document).ready(function() {
$("form#pizzaorder").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#orderName").text();
    var inputtedSize = $(".size option:selected").text();
    var toppings = $('#toppings :checked').each(function() {
      toppings.push($(this).val());
    }
  }
    var newPizza = new Pizza(inputtedFirstName, inputtedSize, toppings);




  });
});
