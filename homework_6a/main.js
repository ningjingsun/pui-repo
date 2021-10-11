$(".menu").click(function(){
    $(".hamburger").toggleClass("hamburger_open");
});

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