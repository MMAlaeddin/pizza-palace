//back
function Pizza (size, meat, sauce, veggie){
  this.size = size,
  this.meat = meat,
  this.sauce = sauce,
  this.veggie = veggie
}

Pizza.prototype.pizzaSum = function() {
  var pizzaPrice = this.size;
  if (this.meat === "pepperoni") {
    pizzaPrice += 5;
} else if (this.meat === "sausage") {
    pizzaPrice += 5;
} else if (this.meat === "tofu") {
    pizzaPrice += 5;
} else if (this.veggie === "jalapenos") {
    pizzaPrice += 3;
} else if (this.veggie === "bell") {
    pizzaPrice += 3;
} else if (this.veggie === "evoo") {
    pizzaPrice += 3;
}
console.log(pizzaPrice);
}

//front
$(document).ready(function(){
  $("form").submit(function(){
    event.preventDefault();

    var size = parseInt($("select#size").val());
    var meat = $("input:radio[name=meat]:checked").val();
    var veggie = $("input:radio[name=veggie]:checked").val();
    var sauce = $("input:radio[name=sauce]:checked").val();

    var myPizza = new Pizza(size, meat, sauce, veggie)
    // console.log(myPizza)
    // $(".price").text(myPizza.pizzaSum());

  });

});