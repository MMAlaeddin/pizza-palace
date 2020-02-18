function Pizza() {
  this.pizzaPrice = 0,
    this.size = "",
    this.toppers = []
}

Pizza.prototype.addSize = function(size) {
  this.size = size;
}

Pizza.prototype.addTops = function(toppings) {
  this.toppers.push(toppings)
}

Pizza.prototype.price = function() {
  if (this.size === "sm") {
    this.pizzaPrice = 10
  } else if (this.size === "md") {
    this.pizzaPrice = 15
  } else if (this.size === "lg") {
    this.pizzaPrice = 20
  }
  return this.pizzaPrice += this.toppers.length;
}


//front
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var myPizza = new Pizza()

    myPizza.addSize($("select#size").val());

    $("input:checkbox[name=topping]:checked").each(function(topping) {
      myPizza.addTops(toppings)
    });

    myPizza.price();
    $("ul").text(myPizza.pizzaPrice);


  });

});