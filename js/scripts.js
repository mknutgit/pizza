function Contact(firstName,lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
}
Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

function Address(type, street, city, state) {
  this.type = type;
  this.street = street;
  this.city = city;
  this.state = state;
}

Address.prototype.fullAddress = function() {
  return this.type + ": " + this.street + ", " + this.city + ", " + this.state;
}

function resetFields() {
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");
}

$(document).ready(function() {
  $("#add-address").click(function() {
  $("#new-addresses").append('<div class="new-address" id="postAddress">' +
                              '<div class="form-group">' +
                              '<div class="form-group address-type" id="postAddress">' +
                                '<label id="postAddress">What type of address is this?</label>' +
                                '<select type="select" id="postAddress" class="new-type">' +
                                '<option type="address-type" id="postAddress">Home</option>' +
                                '<option type="address-type" id="postAddress">Work</option>' +
                                '</select>' +
                              '</div class="form-group" id="postAddress">' +
                                '<label for="new-street" id="postAddress">Street</label>' +
                                '<input type="text" class="form-control new-street" id="postAddress">' +
                              '</div>' +
                              '<div class="form-group" id="postAddress">' +
                                '<label for="new-city" id="postAddress">City</label>' +
                                '<input type="text" class="form-control new-city" id="postAddress">' +
                              '</div>' +
                              '<div class="form-group" id="postAddress">' +
                                '<label for="new-state" id="postAddress">State</label>' +
                                '<input type="text" class="form-control new-state" id="postAddress">' +
                              '</div>' +
                              '</div>');
});

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $(".new-address").each(function() {
     var inputtedType = $(this).find(".new-type option:selected").text();
     var inputtedStreet = $(this).find("input.new-street").val();
     var inputtedCity = $(this).find("input.new-city").val();
     var inputtedState = $(this).find("input.new-state").val();
     var newAddress = new Address(inputtedType, inputtedStreet, inputtedCity, inputtedState)
     newContact.addresses.push(newAddress)
   });

      $("#postAddress").hide();
  //  $('#postAddress').not(this).hide();

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });
    });

    resetFields();


  });
});
