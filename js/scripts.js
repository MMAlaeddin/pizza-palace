//back
function Pizza () {
  this.tops = [];

}

Pizza.prototype.addTops = function(toppings){
  this.tops.push(toppings);
}









function Toppings (top1, top2, top3){
  this.top1 = top1,
  this.top2 = top2,
  this.top3 = top3
}




//front
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var size = $("select#size").val();




  })
})