var quantity = [];

$(".menu").click(function(){
    $(".hamburger").toggleClass("hamburger_open");
});

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