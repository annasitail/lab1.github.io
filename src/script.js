function registerForTour()
{
    let firstName = prompt("What is your first name?");
    let lastName = prompt("What is your last name?");
    let age = prompt("How old are you?");
    let email = prompt("What is you email?");
    if (age < 16)
    {
        alert("Sorry, but you must be at least 18 y.o.");
    }
    else
    {
        alert("Hey, " + firstName + " " + lastName + ", now you are registered for a tour in the Carpathians!");
    }
}

let register = document.querySelector(".register");
register.addEventListener("click", registerForTour);
