const sidebuttonopen = document.getElementById("sidebuttonopen");
const sidebuttonclose = document.getElementById("sidebuttonclose");
const aside = document.querySelector("aside");

const emailInput = document.getElementById("email");
const button = document.getElementById("button");

button.addEventListener("click", function() {
    if(!emailInput.textContent.includes('@') || !emailInput.textContent.includes('.') || !emailInput.textContent.includes('com')) {
        alert("Please enter a valid email address");
        emailInput.textContent = "";
        }
        else
        {
            alert("Thank you for joining the waitlist!");
            emailInput.textContent = "";
        }
    
});


sidebuttonopen.addEventListener("click", function() {
    sidebuttonopen.style.display = "none";
    sidebuttonclose.style.display = "block";
    aside.style.display = "block";
});
sidebuttonclose.addEventListener("click", function() {
    sidebuttonopen.style.display = "block";
    sidebuttonclose.style.display = "none";
    aside.style.display = "none";
});