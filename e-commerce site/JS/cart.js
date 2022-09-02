function updateSubtotal(){
    var cartItem = document.getElementsByClassName("CartMain")[0];
    var total = 0;
    var Products=cartItem.getElementsByClassName("ProductsAtt");
    
        for(var i=0; i<Products.length;i++){
        var priceElement = cartItem.getElementsByClassName("Price")[i];
        var quantityElement = cartItem.getElementsByClassName("qtyInput")[i];
        var price = parseFloat(priceElement.innerText.replace("RM", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    
    document.getElementsByClassName("final-price")[0].innerText ="RM"+total;
    
    
}  

function buynowBtn() {
    alert("Purchase successful");}
