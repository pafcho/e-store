let productPrice;
let productName;

function cartItems() {
  let key = "";
  let list = "<table><tr><th>Product Name</th><th>Price</th><th>Quantity</th></tr></table>\n";

  for (var i = 0; i <= localStorage.length-1; i++){
    key = localStorage.key(i);
    switch(key) {
      case "123":
        console.log("1")
        productPrice = 149;
        productName = "Faded SkyBlu Denim Jeans";
        break;
      case "124":
        console.log("2")
        productPrice = 50;
        productName = "Christmas Sweater";
        break;
      default:
        console.log("3")
        productPrice = null;
        productName = null;
    }
    list += "<table><tr><td>" + productName + "</td>\n<td>"
     + productPrice + "</td>\n<td>"
     + localStorage.getItem(key) + "</td></tr></table>\n";
    if (list == "<tr><th>Product Name</th><th>Price</th></tr>\n")
      list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
  }
  document.getElementById('cartList').innerHTML = list;
  $("#cartList").addClass("table");
}

$(function() {
  cartItems();
});
