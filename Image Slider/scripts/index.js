// initialize slideindex with 0 as you want to show the first slide first
var SLIDEINDEX = 0;

showSlides(SLIDEINDEX);

// creating function for showing slides
function showSlides(index){
    // lets select all the slides and dots using querySelectorAll method
    var slides = document.querySelectorAll(".slide");
    var dots = document.querySelectorAll(".dot-navigation");
    // if slide index value is greater than length of slides then jump to 1st slide
    if (index >= slides.length){
        SLIDEINDEX = 0;
    // if we want to jump at the last of the slide incase the user is at the first one
    } else if (index < 0) {
        SLIDEINDEX = slides.length - 1;
    } else{
        SLIDEINDEX = SLIDEINDEX;
    }
    // before showing slides we must hide all the slides and remove active-dots class using for loop
    for (var i = 0; i < slides.length; i++){
        // hide slide elements
        slides[i].style.display = "none";
        // hide dots active-dot class
        dots[i].classList.remove("active-dot");
    }
    // show the slide we want and set the dot class active-dot
    slides[SLIDEINDEX].style.display = "block";
    dots[SLIDEINDEX].classList.add("active-dot");
        
};

// select the previous arrow element and add a click event using addEventListener method
document.querySelector("#arrow-prev").addEventListener("click", function(){
    // decrement SLIDEINDEX value to go to previous slide
    showSlides(--SLIDEINDEX);
});

// select the next arrow element and add a click event using addEventListener method
document.querySelector("#arrow-next").addEventListener("click", function(){
    // decrement SLIDEINDEX value to go to previous slide
    showSlides(++SLIDEINDEX);
});

// select all the dots using querySelectorAll and iterate over each one using forEach method
document.querySelectorAll(".dot-navigation").forEach(function(element){
    element.addEventListener("click", function(){
        // make a real array using slice method from array proptotype followed by call method
        var dots = Array.prototype.slice.call(this.parentElement.children);
        // make a dot index variable of the array we have created above
        var dotIndex = dots.indexOf(element);

        // save slideindex value to dot index
        showSlides(SLIDEINDEX = dotIndex);
    });
});

// lets set our slide automatic using setInterval method
setInterval(function(){
    showSlides(++SLIDEINDEX);
}, 5000);
