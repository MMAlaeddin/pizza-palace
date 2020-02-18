//back
function Pizza() {
  this.pizzaPrice = 0,
      this.size = "",
      this.toppers = []
}

Pizza.prototype.addSize = function() {
  this.size = size; 
}

Pizza.prototype.addTops = function(toppings) {
  this.toppers.push(toppings)
}

Pizza.prototype.price = function(pricing) {
  if (this.size === "sm") {
    pizzaPrice = 10
} else if (this.size === "md") {
    this.pizzaPrice = 15
} else if (this.size === "lg") {
    this.pizzaPrice = 20
}
this.pizzaPrice = this.toppers.length;
}


//front
$(document).ready(function() {
  $("form").submit(function() {
      event.preventDefault();

      var myPizza = new Pizza()

      myPizza.addSize("select#size").val();

  $("input:checkbox[name=topping]:checked").val();
      myPizza.addTops(toppings)



      $("ul").text(myPizza.pizzaPrice);


  });

});