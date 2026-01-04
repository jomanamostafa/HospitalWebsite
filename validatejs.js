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

// billing.js
function validateForm() {
    // Patient Name
    var patientName = document.getElementById("PatientName");
    if (patientName && patientName.value.trim() === "") {
        alert("Patient Name cannot be empty");
        return false;
    }

    // Patient ID
    var patientID = document.getElementById("PatientID");
    if (patientID) {
        if (patientID.value.trim() === "") {
            alert("Patient ID cannot be empty");
            return false;
        }
        if (isNaN(patientID.value)) {
            alert("Patient ID must contain numbers only");
            return false;
        }
    }

    // Date
    var date = document.getElementById("BillDate");
    if (date && date.value === "") {
        alert("Please select the date");
        return false;
    }

    // Service Name
    var serviceName = document.getElementById("ServiceName");
    if (serviceName && serviceName.value.trim() === "") {
        alert("Service Name cannot be empty");
        return false;
    }

    // Service Cost
    var serviceCost = document.getElementById("ServiceCost");
    if (serviceCost) {
        if (serviceCost.value.trim() === "") {
            alert("Service Cost cannot be empty");
            return false;
        }
        if (isNaN(serviceCost.value) || Number(serviceCost.value) <= 0) {
            alert("Service Cost must be a positive number");
            return false;
        }
    }

    // Total (optional: can calculate automatically here)
    var totalAmount = document.getElementById("TotalAmount");
    if (totalAmount) {
        totalAmount.value = Number(serviceCost.value).toFixed(2);
    }

    return true;
}
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

    var email = document.getElementById("Email");
    if (email) {
        if (email.value === "") {
            alert("Email cannot be empty");
            return false;
        }
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            alert("Please enter a valid email address");
            return false;
        }
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

    var department = document.getElementById("Department");
    if (department && department.value === "") {
        alert("Please select a Department");
        return false;
    }

    var dob = document.getElementById("MyDOB");
    if (dob && dob.value === "") {
        alert("Please select your Date of Birth");
        return false;
    }

    var startDate = document.getElementById("StartDate");
    if (startDate && startDate.value === "") {
        alert("Please select Start Date");
        return false;
    }

    var duration = document.getElementById("Duration");
    if (duration) {
        if (duration.value === "") {
            alert("Duration cannot be empty");
            return false;
        }
        if (isNaN(duration.value) || duration.value <= 0) {
            alert("Duration must be a positive number");
            return false;
        }
    }

    var reason = document.getElementById("Reason");
    if (reason && reason.value === "") {
        alert("Please provide a Reason for your application");
        return false;
    }

    return true; 
}
