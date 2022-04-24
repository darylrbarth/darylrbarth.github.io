let myImage = document.querySelector('img');

myImage.onmouseover = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/daryl-eyes.jpg') {
        myImage.setAttribute ('src', 'images/daryl-smile.jpg');
    } else {
        myImage.setAttribute ('src', 'images/daryl-eyes.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hello there, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
}   else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello there, ' + storedName; 
}

myButton.onclick = function() {
    setUserName();
}