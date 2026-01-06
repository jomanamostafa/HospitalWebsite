/* =========================
   GLOBAL ON LOAD
========================= */
window.onload = function () {
    initDonations();
    initUsers();
    initAppointments();
};

/* =========================
   DONATIONS DATABASE
========================= */
var donationTable, donorName, donationType, donationValue, dIndex;

function initDonations() {
    donationTable = document.getElementById("donationTable");
    donorName = document.getElementById("donorName");
    donationType = document.getElementById("donationType");
    donationValue = document.getElementById("donationValue");
    selectDonationRow();
}

function donationEmpty() {
    if (donorName.value === "") { alert("Donor name required"); return true; }
    if (donationType.value === "") { alert("Donation type required"); return true; }
    if (donationValue.value === "") { alert("Amount or blood type required"); return true; }
    return false;
}

function selectDonationRow() {
    for (var i = 1; i < donationTable.rows.length; i++) {
        donationTable.rows[i].onclick = function () {
            dIndex = this.rowIndex;
            donorName.value = this.cells[0].innerHTML;
            donationType.value = this.cells[1].innerHTML;
            donationValue.value = this.cells[2].innerHTML;
        };
    }
}

function addDonation() {
    if (!donationEmpty()) {
        var row = donationTable.insertRow();
        row.insertCell(0).innerHTML = donorName.value;
        row.insertCell(1).innerHTML = donationType.value;
        row.insertCell(2).innerHTML = donationValue.value;
        selectDonationRow();
    }
}

function updateDonation() {
    donationTable.rows[dIndex].cells[0].innerHTML = donorName.value;
    donationTable.rows[dIndex].cells[1].innerHTML = donationType.value;
    donationTable.rows[dIndex].cells[2].innerHTML = donationValue.value;
}

function deleteDonation() {
    donationTable.deleteRow(dIndex);
    donorName.value = donationType.value = donationValue.value = "";
}

/* =========================
   USER DATABASE
========================= */
var userTable, username, email, role, uIndex;

function initUsers() {
    userTable = document.getElementById("userTable");
    username = document.getElementById("username");
    email = document.getElementById("email");
    role = document.getElementById("role");
    selectUserRow();
}

function userEmpty() {
    if (username.value === "") { alert("Username required"); return true; }
    if (email.value === "") { alert("Email required"); return true; }
    if (role.value === "") { alert("Role required"); return true; }
    return false;
}

function selectUserRow() {
    for (var i = 1; i < userTable.rows.length; i++) {
        userTable.rows[i].onclick = function () {
            uIndex = this.rowIndex;
            username.value = this.cells[0].innerHTML;
            email.value = this.cells[1].innerHTML;
            role.value = this.cells[2].innerHTML;
        };
    }
}

function addUser() {
    if (!userEmpty()) {
        var row = userTable.insertRow();
        row.insertCell(0).innerHTML = username.value;
        row.insertCell(1).innerHTML = email.value;
        row.insertCell(2).innerHTML = role.value;
        selectUserRow();
    }
}

function updateUser() {
    userTable.rows[uIndex].cells[0].innerHTML = username.value;
    userTable.rows[uIndex].cells[1].innerHTML = email.value;
    userTable.rows[uIndex].cells[2].innerHTML = role.value;
}

function deleteUser() {
    userTable.deleteRow(uIndex);
    username.value = email.value = role.value = "";
}

/* =========================
   APPOINTMENTS DATABASE
========================= */
var appointmentTable, patient, department, date, aIndex;

function initAppointments() {
    appointmentTable = document.getElementById("appointmentTable");
    patient = document.getElementById("patient");
    department = document.getElementById("department");
    date = document.getElementById("date");
    selectAppointmentRow();
}

function appointmentEmpty() {
    if (patient.value === "") { alert("Patient name required"); return true; }
    if (department.value === "") { alert("Department required"); return true; }
    if (date.value === "") { alert("Date required"); return true; }
    return false;
}

function selectAppointmentRow() {
    for (var i = 1; i < appointmentTable.rows.length; i++) {
        appointmentTable.rows[i].onclick = function () {
            aIndex = this.rowIndex;
            patient.value = this.cells[0].innerHTML;
            department.value = this.cells[1].innerHTML;
            date.value = this.cells[2].innerHTML;
        };
    }
}

function addAppointment() {
    if (!appointmentEmpty()) {
        var row = appointmentTable.insertRow();
        row.insertCell(0).innerHTML = patient.value;
        row.insertCell(1).innerHTML = department.value;
        row.insertCell(2).innerHTML = date.value;
        selectAppointmentRow();
    }
}

function updateAppointment() {
    appointmentTable.rows[aIndex].cells[0].innerHTML = patient.value;
    appointmentTable.rows[aIndex].cells[1].innerHTML = department.value;
    appointmentTable.rows[aIndex].cells[2].innerHTML = date.value;
}

function deleteAppointment() {
    appointmentTable.deleteRow(aIndex);
    patient.value = department.value = date.value = "";
}
