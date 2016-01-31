function Pizza (Name, Size, Toppings) {
  this.Name = Name;
  this.Size = Size;
  this.Toppings = Toppings;
  this.Price = 0;
}

Pizza.prototype.SizePrice = function() {
  if (this.Size === 'Small') {
    return this.Price += 8;
  } else if (this.Size === 'Medium') {
    return this.Price += 10;
  } else {
    return this.Price += 12;
  }
};

Pizza.prototype.ToppingsPrice = function() {
  for (var i = 0; i < this.Toppings.length; i++) {
    this.Price += 2;
  }
    return this.Price;
};


$(document).ready(function() {
  $("form#pizzaorder").submit(function(event) {
    event.preventDefault();

    var Name = $("input#orderName").val();
    var Size = $(".size option:selected").text();
    var Toppings = []
      $("input:checkbox[name=topping]:checked").each(function(){
      Toppings.push($(this).val());
      });
    var newPizza = new Pizza(Name, Size, Toppings);
    newPizza.SizePrice(Size);
   newPizza.ToppingsPrice(Toppings);




  $('.order').show();
  $('.Name').text(newPizza.Name);
  $('.Size').text(newPizza.Size);
  $('.Toppings').text(newPizza.Toppings);
  $('.Price').text(newPizza.Price);



  });
});
