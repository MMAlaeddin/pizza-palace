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
    
    var meats = parseInt($("input:checkbox[name=meat]:checked").val())
    var veggies = parseInt($("input:checkbox[name=veggie]:checked").val())

    $(".price").text(meats + veggies);
  


  })

})