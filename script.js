const paragraphtext = document.getElementById("paragraphText");
const heading = document.getElementById("heading");

function contentChange() {
    heading.innerHTML = "Content Updated!";
    paragraphtext.innerHTML = "assignment 5 Week the for page my is this and Syrus is name my, Hi" //reverses the text
    paragraphtext.style.backgroundColor="lightblue";
}

//Images
const catImage = document.getElementById("catImage");
const raccoonImage = document.getElementById("raccoonImage");
const dogImage = document.getElementById("dogImage");

catImage.addEventListener("click", (event) => {
    let clicked = catImage.style.border;
    if (clicked == "10px solid red") { //Tests to see if the image has a border
        catImage.style.width = "auto"; //returns the image back to original size
        catImage.style.height = "auto";
        catImage.style.border = "none"; //removes the border
    } else {
        catImage.style.width = "30%";
        catImage.style.height = "30%";
        catImage.style.border = "10px solid red";
    }
})

raccoonImage.addEventListener("click", (event) => {
    let clicked = raccoonImage.style.border;
    if (clicked == "10px solid red") { //Tests to see if the image has a border
        raccoonImage.style.width = "auto"; //returns the image back to original size
        raccoonImage.style.height = "auto";
        raccoonImage.style.border = "none"; //removes the border
    } else {
        raccoonImage.style.width = "30%";
        raccoonImage.style.height = "30%";
        raccoonImage.style.border = "10px solid red";
    }
})

dogImage.addEventListener("click", (event) => {
    let clicked = dogImage.style.border;
    if (clicked == "10px solid red") { //Tests to see if the image has a border
        dogImage.style.width = "auto"; //returns the image back to original size
        dogImage.style.height = "auto";
        dogImage.style.border = "none"; //removes the border
    } else {
        dogImage.style.width = "30%";
        dogImage.style.height = "30%";
        dogImage.style.border = "10px solid red";
    }
})

//Cursor Circle
const cursorCircle = document.getElementById('cursorCircle');
cursorCircle.addEventListener('mouseover', (event) => {
    document.addEventListener('mousemove', (event) => {
        cursorCircle.style.left = (event.clientX-10) + "px"; //moves circle in the X value to align with cursor
        cursorCircle.style.top = (event.clientY-10) + "px"; //moves circle in the Y value to align with cursor
        cursorColor();
    });
})

function cursorColor() { //function to change the cursor color
    cursorCircle.style.borderColor = "rgb("+Math.ceil(Math.random()*255)+","+Math.ceil(Math.random()*255)+","+Math.ceil(Math.random()*255)+")"; //chooses a random number from 1-255
}

//Form
function ageCheck() {
    const age = document.getElementById("age").value;
    const displayAgeCheck = document.getElementById("displayAgeCheck"); //variable to display the results of ageCheck()
    if (age < 18) { // tests if age is less than 18
        displayAgeCheck.innerHTML = "You are a minor.";
    } else if (age >= 18) { // tests if age is 18 or older
        displayAgeCheck.innerHTML = "You are an adult.";
    } else {
        displayAgeCheck.innerHTML = "";
    }
}