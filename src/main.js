// query selectors 👇🏾
var sides = document.querySelector('#side-dish');
var main = document.querySelector('#main-dish');
var dessert = document.querySelector('#dessert-dish');
var entireMeal = document.querySelector('#entire-meal');
var letsCookButton = document.querySelector('.choice-box-button');
var mealSelection = document.querySelector('.meal-selection');

// add event listeners here 👇🏾
letsCookButton.addEventListener("click",generateMeal);

// random generation function example! 🃏
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

// add functions here 👇🏾
function generateMeal() {
    if(sides.checked) {
        mealSelection.getElementsByClassName.display = "block";
        
        var sideDish = sideDishes[getRandomIndex(sideDishes)];
        console.log(sideDish);
    } else if (main.checked) {
        mealSelection.style.display = "block";
        var mainDish = mainDishes[getRandomIndex(mainDishes)];
        console.log(mainDish)
    }
}