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
    var meat = parseInt($("input:checkbox[name=meat]:checked").val());
    var veggie = parseInt($("input:checkbox[name=veggie]:checked").val());
    var sauce = parseInt($("input:checkbox[name=sauce]:checked").val())

    var myPizza = new Pizza(size, meat, sauce, veggie)
    console.log(myPizza)

    var fullPizza = parseInt($(pizzaPrice + this.meat + this.veggie).val());
    console.log(fullPizza)


  })

})