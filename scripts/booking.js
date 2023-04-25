/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay;
let numberOfDays;
let calculatedCost = document.getElementById("calculated-cost")
let elements = document.querySelectorAll("#monday, #tuesday, #wednesday, #thursday, #friday, #saturday, #sunday");
let fullButton = document.getElementById("full-day");
let halfButton = document.getElementById("half-day");
let clearButton = document.getElementById("clear-button");
let half = document.querySelector("#half");
let full = document.querySelector("#full");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

elements.forEach((element => {
    element.addEventListener("click", function() {
        element.classList.add("clicked");
    })
}))

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener('click', () => {
    elements.forEach(element => {
        element.classList.remove("clicked");
    })
})



// I ran out of time, completely my own fault.


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfButton.addEventListener('click', () => {
    half.forEach(element => {
        element.classList.add("clicked");
    })
})

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


