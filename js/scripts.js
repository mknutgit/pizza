function Pizza (Size, Toppings) {
  this.Size = Size;
  this.Toppings = Toppings;
  this.Price = 0;
}

Pizza.prototype.pizzaSizePrice = function() {
  if (this.Size === 'small') {
    return this.Price += 8;
  } else if (this.Size === 'medium') {
    return this.Price += 10;
  } else {
    return this.Price += 12;
  }
};

Pizza.prototype.pizzaToppingsPrice = function() {
  for (var i = 0; i < this.Toppings.length; i++) {
    this.Price += 2;
  }
    return this.Price;
};


$(document).ready(function() {
  $("form#pizzaorder").submit(function(event) {
    event.preventDefault();


    var Size = $("form input[name=size]:checked").val();
    var Toppings = []
      $("input:checkbox[name=topping]:checked").each(function(){
      Toppings.push($(this).val());
      });
    var newPizza = new Pizza(Size, Toppings);


  $('.order').show();
  $('.name').text(newPizza.Name);
  $('.size').text(newPizza.Size);
  $('.toppings').text(newPizza.Toppings);
  $('.price').text(newPizza.Price);



  });
});
