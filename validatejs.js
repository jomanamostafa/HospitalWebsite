function validateForm() {

    var firstName = document.getElementById("FirstName");
    if (firstName && firstName.value === "") {
        alert("First Name cannot be empty");
        return false;
    }

    var familyName = document.getElementById("FamilyName");
    if (familyName && familyName.value === "") {
        alert("Family Name cannot be empty");
        return false;
    }

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

    var nationality = document.getElementById("Nationality");
    if (nationality && nationality.value === "") {
        alert("Please select a doctor");
        return false;
    }

    var dob = document.getElementById("MyDOB");
    if (dob && dob.value === "") {
        alert("Please select your date of birth");
        return false;
    }

    return true;
}

