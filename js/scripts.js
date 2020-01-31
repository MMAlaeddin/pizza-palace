//back
function Pizza (size, top1, top2, top3) {
  this.size = size,
  this.top1 = top1,
  this.top2 = top2,
  this.top3 = top3

}

function Tops () {
  this.pizza = []
}

Pizza.prototype.addPizza = function(){
  Pizza.push(myPizza)
  


}













// //front




$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var size = $("select#size").val();
    var top1 = $("select#top1").val();
    var top2 = $("select#top2").val();
    var top3 = $("select#top3").val();

    var myPizza = new Pizza (size, top1, top2, top3)

    $(".price").text(myPizza);


  })
})