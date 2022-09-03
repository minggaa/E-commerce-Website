// JS for toggle menu
var MenuItems = document.getElementById("MenuItems");

MenuItems.style.maxHeight = "0px";

function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "200px"
    }
    else {
        MenuItems.style.maxHeight = "0px"
    }
}

// JS for quantity (in)/(de)crease buttons

function decreaseNum() {
    var num = parseInt(document.getElementById("counter").value, 10);
    num = isNaN(num) ? 0 : num;
    num < 2 ? num = 2 : num;
    num--;
    document.getElementById("counter").value = num;
}

function increaseNum() {
    var num = parseInt(document.getElementById("counter").value, 10);
    num = isNaN(num) ? 0 : num;
    num > 999 ? num = 999 : num;
    num++;
    document.getElementById("counter").value = num;
}

// JS to check for input validation in Quantity
function inputCheck() {
    if (parseInt(document.getElementById("counter").value, 10) < 1) {
        document.getElementById("counter").value = 1;
    }
    if (document.getElementById("counter").value.length == 0) {
        document.getElementById("counter").value = 1;
    }
    if (parseInt(document.getElementById("counter").value, 10) > 1000) {
        document.getElementById("counter").value = 1000;
    }
}

// JS for image slider: hover and image change
var thumbnails = document.getElementsByClassName('thumbnail'); 
var actives = document.getElementsByClassName('thumb-active');

for(var i = 0; i < thumbnails.length; i++) { // Loop to allow the cycle of images with the hover and active functions.
    thumbnails[i].addEventListener('mouseover', function() { // When mouse is hovered over image will allow function to perform its tasks.
        //console.log(actives) // to display functions performed with 'actives' in the console
        
        if (actives.length > 0) {                  // This statement is essentially a loop",
            actives[0].classList.remove('thumb-active'); // as it removes the active effects and the index of the thumbnail in the array 
        }                                          // when the mouse is hovered over.
        
        this.classList.add('thumb-active'); // 'this' will grab the values of actives changing the look of the thumbnails as its hovered over.
        document.getElementById('main-display').src = this.src; // The thumbnail hovered over will be changed by grabbing the source of id: main-display and replacing with the hovered source.
    })
}


// JS for image slider: arrow sliders
let leftArrow = document.getElementById('leftSlide');
let rightArrow = document.getElementById('rightSlide');

leftArrow.addEventListener('click', function(){
    document.getElementById('slider').scrollLeft -= 96;
})
rightArrow.addEventListener('click', function(){
    document.getElementById('slider').scrollLeft += 96;
})


// JS for Dropdown Box
var drop = document.getElementsByClassName("dropdown-button");

for (var i = 0; i < drop.length; i++) {
    drop[i].addEventListener("click", function() {

        this.classList.toggle("dropdownButton-active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } 
        else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

// JS for Buy Now Button
function buynowBtn() {
    alert("Purchase successful")
;}