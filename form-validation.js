ffunction validateForm(formId) {
    // Only run this for the admin login form
    if (formId === "adminLoginForm") {
        var username = document.getElementById("admin-username").value;
        var password = document.getElementById("admin-password").value;

        if (username === "") {
            alert("Please enter a username");
            return false; // stops form
        }

        if (password === "") {
            alert("Please enter a password");
            return false; // stops form
        }

        // All good → redirect to dashboard
        window.location.href = "admin-dashboard.html";
        return false; // prevents actual form submission
    }
    // First Name
    var firstName = document.getElementById("FirstName");
    if (firstName && firstName.value === "") {
        alert("First Name cannot be empty");
        return false;
    }

    // Family Name
    var familyName = document.getElementById("FamilyName");
    if (familyName && familyName.value === "") {
        alert("Family Name cannot be empty");
        return false;
    }

    // Telephone Number
    var phone = document.getElementById("TelephoneNumber");
    if (phone) {
        if (phone.value === "") {
            alert("Telephone Number cannot be empty");
            return false;
        }
        if (isNaN(phone.value)) {
            alert("Telephone Number must contain numbers only");
            return false;
        }
    }

    // Inquiry (volunteer page only)
    var inquiry = document.getElementById("Inquiry");
    if (inquiry && inquiry.value === "") {
        alert("Inquiry cannot be empty");
        return false;
    }

    // Nationality
    var nationality = document.getElementById("Nationality");
    if (nationality && nationality.value === "") {
        alert("Please select your nationality");
        return false;
    }

    // Blood Type (blood donation page only)
    var bloodO = document.getElementById("bloodO");
    if (bloodO) {
        var bloodA = document.getElementById("bloodA");
        var bloodB = document.getElementById("bloodB");
        var bloodAB = document.getElementById("bloodAB");
        if (!bloodO.checked && !bloodA.checked && !bloodB.checked && !bloodAB.checked) {
            alert("Please select your blood type");
            return false;
        }
    }

    // Payment Method
    var payment = document.getElementById("PaymentMethod");
    if (payment && payment.value === "") {
        alert("Please select a payment method");
        return false;
    }

    // Gender (blood donation page only)
    var female = document.getElementById("Female");
    var male = document.getElementById("Male");
    if (female && male) {
        if (!female.checked && !male.checked) {
            alert("Please select your gender");
            return false;
        }
    }

    // Date of Birth
    var dob = document.getElementById("MyDOB");
    if (dob && dob.value === "") {
        alert("Please select your date of birth");
        return false;
    }

    // Preferred Donation Date
    var prefDate = document.getElementById("ddpref");
    if (prefDate && prefDate.value === "") {
        alert("Please select a preferred donation date");
        return false;
    }

    // Consent (blood donation page only)
    var consent = document.getElementById("Consent");
    if (consent && !consent.checked) {
        alert("You must confirm that you are willing to donate blood");
        return false;
    }

    // Availability (volunteer page only)
    var availability = document.getElementById("Availability");
    if (availability && availability.value === "") {
        alert("Please select your availability date");
        return false;
    }

    // Area of Interest (volunteer page only)
    var patientSup = document.getElementById("PatientSup");
    if (patientSup) {
        var eventAssis = document.getElementById("EventAssis");
        var commOut = document.getElementById("CommOut");
        var adminSup = document.getElementById("AdminSup");
        if (!patientSup.checked && !eventAssis.checked && !commOut.checked && !adminSup.checked) {
            alert("Please select an area of interest");
            return false;
        }
    }

    // Organization Name (partnership page only)
    var orgName = document.getElementById("Orgnme");
    if (orgName && orgName.value === "") {
        alert("Please enter your organization name");
        return false;
    }

    // Contact Person (partnership page only)
    var contactPerson = document.getElementById("CP");
    if (contactPerson && contactPerson.value === "") {
        alert("Please enter a contact person");
        return false;
    }

    // Partnership Type (partnership page only)
    var partnershipType = document.getElementById("PT");
    if (partnershipType && partnershipType.value === "") {
        alert("Please select a partnership type");
        return false;
    }

    // All validations passed
    return true;
}
