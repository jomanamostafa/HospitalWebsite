var table, input1, input2, input3, rIndex;

window.onload = function () {
    table = document.getElementById("table");
    input1 = document.getElementById("patientName");
    input2 = document.getElementById("diagnosis");
    input3 = document.getElementById("age");
    selectedRowToInput();
}

// check the empty input
function checkEmptyInput() {
    var isEmpty = false,
        patientName = input1.value,
        diagnosis = input2.value,
        age = input3.value;

    if (patientName === "") {
        alert("Patient Name cannot be empty");
        isEmpty = true;
    }
    else if (diagnosis === "") {
        alert("Diagnosis cannot be empty");
        isEmpty = true;
    }
    else if (age === "") {
        alert("Age cannot be empty");
        isEmpty = true;
    }
    return isEmpty;
}

// display selected row data into input text
function selectedRowToInput() {
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].onclick = function () {
            // get the selected row index
            rIndex = this.rowIndex;
            input1.value = this.cells[0].innerHTML;
            input2.value = this.cells[1].innerHTML;
            input3.value = this.cells[2].innerHTML;
        };
    }
}

// add Row
function addNewRecord() {
    if (!checkEmptyInput()) {
        // create a new row and cells
        var newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2);

        // set the values into row cell's
        cell1.innerHTML = input1.value;
        cell2.innerHTML = input2.value;
        cell3.innerHTML = input3.value;

        // call the function to set the event to the new row
        selectedRowToInput();
    }
}

function updateRecord() {
    if (!checkEmptyInput()) {
        table.rows[rIndex].cells[0].innerHTML = input1.value;
        table.rows[rIndex].cells[1].innerHTML = input2.value;
        table.rows[rIndex].cells[2].innerHTML = input3.value;
    }
}

function deleteRecord() {
    table.deleteRow(rIndex);
    // clear input text
    input1.value = "";
    input2.value = "";
    input3.value = "";
}