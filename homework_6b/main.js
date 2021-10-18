var quantity = [];
var cart =[];
const cartElement = document.getElementById("product_added");
const templateElement = document.getElementById("product_template");

$(".menu").click(function(){
    $(".hamburger").toggleClass("hamburger_open");
});

// refresh page to see the number at the icon on each page
function checkOnload(){
    let state = sessionStorage.getItem('quantity');
    if(state){
        quantity = JSON.parse(sessionStorage.getItem('quantity'));
        let totalQuantity = 0;
        for (element of quantity){
            totalQuantity += parseInt(element);
        }
        $("#cartNumber").css("opacity", "1");
        document.getElementById("updateCartNumber").innerHTML = totalQuantity;
    } else {
        $("#cartNumber").css("opacity", "0");
    }
};

// update the number at the icon
function addToCart(){
    if(sessionStorage.getItem('quantity')){
        quantity = JSON.parse(sessionStorage.getItem('quantity'));
    }
    var selectedQuantity = document.getElementById("choosequantity").value;
    quantity.push(selectedQuantity);
    document.getElementById("updateCartNumber").innerHTML = "";
    let totalQuantity = 0;
    for (element of quantity){
        totalQuantity += parseInt(element);
        // convert string to number. Otherwise + will only do string concatenation, since the values are string
    }
    if (totalQuantity > 0){
        $("#cartNumber").css("opacity", "1");
        document.getElementById("updateCartNumber").innerHTML = totalQuantity;
    } else {
        $("#cartNumber").css("opacity", "0");
    }
    sessionStorage.setItem('quantity', JSON.stringify(quantity));
}

function cartLoad(){
    var productName = document.getElementById("productName").innerHTML;
    var productPrice = document.getElementById("productprice").innerHTML;
    var choosesize = document.getElementById("choosesize");
    var productSize = choosesize.options[choosesize.selectedIndex].value;
    var choosecolor = document.getElementById("choosecolor");
    var productColor = choosecolor.options[choosecolor.selectedIndex].value;
    var productQuantity = document.getElementById("choosequantity").value;
    updateCart(productName, productPrice, productSize, productColor, productQuantity)
}

// button onclick: push to the cart in sessionStorage
function updateCart(productName, productPrice, productSize, productColor, productQuantity){
    const product = {
        name: productName,
        price: productPrice,
        size: productSize,
        color: productColor,
        quantity: productQuantity
    }
    if(sessionStorage.getItem('cart')){
        cart = JSON.parse(sessionStorage.getItem('cart'));
    }
    cart.push(product);
    // console.log(cart);
    sessionStorage.setItem('cart', JSON.stringify(cart));
}









// onload the cart page; see what items are in sessionStorage
function loadCart(){
    if(sessionStorage.getItem('cart')){
        cart = JSON.parse(sessionStorage.getItem('cart'));
    }
    console.log("load");
    console.log(cart);
    for (element of cart) {
        console.log(element);
        addProductHTML(element.name, element.price, element.size, element.color, element.quantity)
    }
}

function addProductHTML(productName, productPrice, productSize, productColor, productQuantity){
    const templateElement = document.getElementById("product_template");
    const cartElement = document.getElementById("product_added");

    const productElement = templateElement.cloneNode(true);
    productElement.id = "";

    const imageElement = productElement.getElementsByClassName("product_img")[0];
    imageElement.setAttribute('src', 'img/' + productColor + '.png');

    const nameElement = productElement.getElementsByClassName("product_name")[0];
    nameElement.innerHTML = productName;

    const priceElement = productElement.getElementsByClassName("product_price")[0];
    priceElement.innerHTML = productPrice;

    const sizeElement = productElement.getElementsByClassName("product_size");
    sizeElement.innerHTML = 'Size:' + productSize;

    const colorElement = productElement.getElementsByClassName("product_color");
    colorElement.innerHTML = 'Color:' + productColor;

    const quantityElement = productElement.getElementsByClassName("productquantity");
    quantityElement.value = productQuantity;

    cartElement.appendChild(productElement);
}









function changeColor() {
    var choosecolor = document.getElementById("choosecolor");
    var selectedColor = choosecolor.options[choosecolor.selectedIndex].value;
    var harness = document.getElementById("harnessImage");
    if (selectedColor == "strawberry") {
        harness.setAttribute('src', 'img/productdetail.png');
        harness.setAttribute('onmouseover', "this.src='img/productshow.png';");
        harness.setAttribute('onmouseout', "this.src='img/productdetail.png';");
    } else if (selectedColor == "blackberry") {
        harness.setAttribute('src', 'img/blackberry.png');
        harness.setAttribute('onmouseover', "this.src='img/blackberryshow.png';");
        harness.setAttribute('onmouseout', "this.src='img/blackberry.png';");
    } else if (selectedColor == "crazyberry") {
        harness.setAttribute('src', 'img/crazyberry.png');
        harness.setAttribute('onmouseover', "this.src='img/crazyberryshow.png';");
        harness.setAttribute('onmouseout', "this.src='img/crazyberry.png';");
    } else if (selectedColor == "fireorange") {
        harness.setAttribute('src', 'img/fireorange.png');
        harness.setAttribute('onmouseover', "this.src='img/fireorangeshow.png';");
        harness.setAttribute('onmouseout', "this.src='img/fireorange.png';");
    }
}

function changeSize(){
    var choosesize = document.getElementById("choosesize");
    var selectedSize = choosesize.options[choosesize.selectedIndex].value;
    var productprice = document.getElementById("productprice");
    if (selectedSize == "tiny") {
        productprice.innerHTML = "$15.99";
    } else if (selectedSize == "small") {
        productprice.innerHTML = "$19.99";
    } else if (selectedSize == "medium") {
        productprice.innerHTML = "$23.99";
    } else if (selectedSize == "large") {
        productprice.innerHTML = "$25.99";
    }
}