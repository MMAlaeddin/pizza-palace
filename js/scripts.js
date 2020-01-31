//back
function Pizza (size, protein, spice, veggie) {
  this.size = size,
  this.protein = protein,
  this.spice = spice,
  this.veggie = veggie

}

Pizza.prototype.makePizza = function(){
  return this.size + 5;
}





// //front




$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var size = parseInt($("select#size").val());
    var top1 = $("select#top1").val();
    var top2 = $("select#top2").val();
    var top3 = $("select#top3").val();

    var myPizza = new Pizza (size, top1, top2, top3);
    console.log(myPizza);
    
   




  })
})