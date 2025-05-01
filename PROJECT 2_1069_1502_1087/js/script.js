document.addEventListener("DOMContentLoaded", function () {
    // Donation eligibility check
    function checkDonationEligibility(amount) {
        if (amount < 10) {
            alert("Minimum donation amount is RM10. Please enter a higher amount.");
            return false;
        }
        alert("Thank you for your donation of RM" + amount + "!");
        return true;
    }

    // Donation buttons event listener
    const donationButtons = document.querySelectorAll(".feature button");
    donationButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            let text = this.innerText.trim();

            if (text === "Donate Now") {
                let input = prompt("Enter your donation amount (RM):");
                let amount = parseFloat(input);

                if (isNaN(amount)) {
                    alert("Please enter a valid number.");
                    return;
                }

                checkDonationEligibility(amount);
            } else {
                let amount = text.replace("RM", "").trim();
                amount = parseFloat(amount);

                if (!isNaN(amount)) {
                    checkDonationEligibility(amount);
                } else {
                    alert("Invalid donation amount.");
                }
            }
        });
    });

    function validateContactForm(event) {
        var nameField = document.getElementById("full-name");
        var emailField = document.getElementById("email-address");
        var subjectField = document.getElementById("subject");
        var messageField = document.getElementById("message");
    
        var name = nameField.value.trim();
        var email = emailField.value.trim();
        var subject = subjectField.value.trim();
        var message = messageField.value.trim();
    
        // Validate email contains '@'
        if (!email.includes("@")) {
            emailField.setCustomValidity("Please enter a valid email address (missing '@').");
            emailField.reportValidity();
            event.preventDefault();
            emailField.focus();
            return false;
        } else {
            emailField.setCustomValidity("");
        }
    
        // Validate email format
        var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            emailField.setCustomValidity("Please enter a valid email address.");
            emailField.reportValidity();
            event.preventDefault();
            emailField.focus();
            return false;
        } else {
            emailField.setCustomValidity("");
        }
    
        // Validate all required fields
        if (name === "" || email === "" || subject === "" || message === "") {
            alert("Please fill in all fields before submitting.");
            event.preventDefault();
            return false;
        }
    
        // All validations passed — show thank you alert and prevent actual submission for demo
        event.preventDefault();  // Remove this line if you want real form submission
        alert("Thank you! Your message has been submitted.");
        return true;
    }
    
    // Attach form submit validation
    const contactForm = document.querySelector("form");
    if (contactForm) {
        contactForm.addEventListener("submit", validateContactForm);
    }
    
    // Attach blur event to email field for immediate validation
    const emailField = document.getElementById("email-address");
    emailField.addEventListener("blur", function(event) {
        const email = emailField.value.trim();
    
        if (!email.includes("@")) {
            emailField.setCustomValidity("Please enter a valid email address (missing '@').");
            emailField.reportValidity();
    
            setTimeout(() => {
                emailField.focus();
            }, 0);
        } else {
            emailField.setCustomValidity("");
        }
    });

});
	document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".campaign-slideshow .slide");

    function showSlides() {
        slides.forEach(slide => slide.style.display = "none");
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000); // Change every 3 seconds
    }

    if (slides.length > 0) {
        showSlides();
    }
});
        // Calendar script for April 2025 with events
        const calendar = document.getElementById("calendar");
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        
        // Add day names to the calendar
        days.forEach(day => {
            const div = document.createElement("div");
            div.textContent = day;
            div.className = "day-name";
            calendar.appendChild(div);
        });
        
        // Blank cells for alignment (April 2025 starts on a Tuesday)
        for (let i = 0; i < 2; i++) {
            const emptyCell = document.createElement("div");
            calendar.appendChild(emptyCell);
        }
        
        // Add days of the month to the calendar
        for (let d = 1; d <= 30; d++) {
            const dayCell = document.createElement("div");
            dayCell.textContent = d;
        
            // Add special class for event days
            if (d === 25) {
                dayCell.className = "event";
                dayCell.title = "Volunteer Day";
            }
            if (d === 30) {
                dayCell.className = "event";
                dayCell.title = "Charity Walk";
            }
        
            calendar.appendChild(dayCell);
        }