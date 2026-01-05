// ===== Billing Form Validation =====
function validateBillingForm() {
    var patientName = document.getElementById("PatientName");
    if (!patientName || patientName.value.trim() === "") {
        alert("Patient Name cannot be empty");
        return false;
    }

    var patientID = document.getElementById("PatientID");
    if (!patientID || patientID.value.trim() === "") {
        alert("Patient ID cannot be empty");
        return false;
    }
    if (isNaN(patientID.value)) {
        alert("Patient ID must contain numbers only");
        return false;
    }

    var billDate = document.getElementById("BillDate");
    if (!billDate || billDate.value === "") {
        alert("Please select the date");
        return false;
    }

    var serviceName = document.getElementById("ServiceName");
    if (!serviceName || serviceName.value.trim() === "") {
        alert("Service Name cannot be empty");
        return false;
    }

    var serviceCost = document.getElementById("ServiceCost");
    if (!serviceCost || serviceCost.value.trim() === "") {
        alert("Service Cost cannot be empty");
        return false;
    }
    if (isNaN(serviceCost.value) || Number(serviceCost.value) <= 0) {
        alert("Service Cost must be a positive number");
        return false;
    }

    var totalAmount = document.getElementById("TotalAmount");
    if (totalAmount) {
        totalAmount.value = Number(serviceCost.value).toFixed(2);
    }

    alert("Billing submitted successfully!");
    return true;
}

// ===== Internship/Application Form Validation =====
function validateApplicationForm() {
    var firstName = document.getElementById("FirstName");
    if (!firstName || firstName.value.trim() === "") {
        alert("First Name cannot be empty");
        return false;
    }

    var familyName = document.getElementById("FamilyName");
    if (!familyName || familyName.value.trim() === "") {
        alert("Family Name cannot be empty");
        return false;
    }

    var email = document.getElementById("Email");
    if (!email || email.value.trim() === "") {
        alert("Email cannot be empty");
        return false;
    }
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        alert("Please enter a valid email address");
        return false;
    }

    var phone = document.getElementById("TelephoneNumber");
    if (!phone || phone.value.trim() === "") {
        alert("Telephone Number cannot be empty");
        return false;
    }
    if (isNaN(phone.value)) {
        alert("Telephone Number must contain numbers only");
        return false;
    }

    var department = document.getElementById("Department");
    if (!department || department.value === "") {
        alert("Please select a Department");
        return false;
    }

    var dob = document.getElementById("MyDOB");
    if (!dob || dob.value === "") {
        alert("Please select your Date of Birth");
        return false;
    }

    var startDate = document.getElementById("StartDate");
    if (!startDate || startDate.value === "") {
        alert("Please select Start Date");
        return false;
    }

    var duration = document.getElementById("Duration");
    if (!duration || duration.value.trim() === "" || isNaN(duration.value) || Number(duration.value) <= 0) {
        alert("Duration must be a positive number");
        return false;
    }

    var reason = document.getElementById("Reason");
    if (!reason || reason.value.trim() === "") {
        alert("Please provide a Reason for your application");
        return false;
    }

    return true;
}

// ===== Login Form Validation =====
function validateLogin() {
    var firstName = document.getElementById("FirstName");
    if (!firstName || firstName.value.trim() === "") {
        alert("First Name cannot be empty");
        return false;
    }

    var lastName = document.getElementById("LastName");
    if (!lastName || lastName.value.trim() === "") {
        alert("Last Name cannot be empty");
        return false;
    }

    var password = document.getElementById("Password");
    if (!password || password.value.trim() === "") {
        alert("Password cannot be empty");
        return false;
    }

    return true;
}
