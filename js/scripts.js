//back
function Pizza () {
  this.tops = [];

}

Pizza.prototype.addTops = function(toppings){
  this.tops.push(toppings);
}









function Toppings (top1, top2, top3){
  this.size = size,
  this.top1 = top1,
  this.top2 = top2,
  this.top3 = top3
}




//front
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var size = $("select#size").val();
    var protein = $("select#top1").val();
    var spice = $("select#top2").val();
    var veggie = $("select#top3").val();
    var newPizza = new Pizza (size, protein, spice, veggie);
    Pizza.addTops(newPizza);




  })
})