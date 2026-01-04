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
