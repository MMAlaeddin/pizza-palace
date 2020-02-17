//back
function Pizza() {
  this.pizzaPrice = 0,
      this.size = "",
      this.toppers = []
}

Pizza.prototype.addSize = function() {
  if (this.size === "sm") {
      pizzaPrice = 10
  } else if (this.size === "md") {
      this.pizzaPrice = 15
  } else if (this.size === "lg") {
      this.pizzaPrice = 20
  }
}

Pizza.prototype.addTops = function(toppings) {
  this.toppers.push(toppings)
}

Pizza.prototype.price = function(pricing) {
  this.pizzaPrice += pricing
}

//front
$(document).ready(function() {
  $("form").submit(function() {
      event.preventDefault();

      var myPizza = new Pizza(0, "", [])

      myPizza.addSize$("select#size").val();

      var topping = parseInt($("input:checkbox[name=topping]:checked").val());
      myPizza.addTops(toppings)



      $("ul").show(myPizza.pizzaPrice);


  });

});