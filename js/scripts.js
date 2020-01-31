//back
function Pizza (size, meat, sauce, veggie){
  this.size = size,
  this.meat = meat,
  this.sauce = sauce,
  this.veggie = veggie
}

Pizza.prototype.pizzaSum = function(){
  var pizzaPrice = size
  if (this.meat === 3) {
  pizzaPrice += 6
} else if (this.meat === 2){
  pizzaPrice += 4
} else if (this.meat === 1){
  pizzaPrice += 2
} else if (this.veggie === 3){
  pizzaPrice += 3
} else if (this.veggie === 2){
  pizzaPrice += 2 
} else if (this.veggie === 1){
  pizzaPrice += 1
} 

}

//front
$(document).ready(function(){
  $("form").submit(function(){
    event.preventDefault();

    var size = parseInt($("select#size").val());
    var meat = parseInt($("input:radio[name=meat]:checked").val());
    var veggie = parseInt($("input:radio[name=veggie]:checked").val());
    var sauce = parseInt($("input:radio[name=sauce]:checked").val())

    var myPizza = new Pizza(size, meat, sauce, veggie)
    console.log(myPizza)

    $(".price").text(size + meat + veggie);

  })

})