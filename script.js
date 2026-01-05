function toggleMenu(id){
    var x=document.getElementById(id);
    if(x==null){
        // alert("no element")
        return;
    }
    if(x.style.display=="block"){
        x.style.display="none";
    } else {
        x.style.display="block";
    }
    // alert("menu")
}

function submitForm(){
    var n=document.getElementById("Name").value;
    var p=document.getElementById("Phone").value;
    var d=document.getElementById("Date").value;

    if(n=="" || p=="" || d==""){
        alert("please fill all fields");
        return;
    }

    alert("thank you "+n+" , your request was sent");
}


function submitForm() {
    var name = document.getElementById("Name").value;
    var phone = document.getElementById("Phone").value;
    var date = document.getElementById("Date").value;

    if (name == "" || phone == "" || date == "") {
        alert("please fill all fields");
    } else {
        alert("thank you " + name + " , your request was sent");
    }
}

function simpleFormCheck() {
    var test = document.getElementById("testInput").value;
    if (test == "") {
        alert("please fill the field");
        return false;
    }
    return true;
}

function encodeHome() {
    var text = document.getElementById("homeText").value;
    var result = "";
    result = text + "++"; // super simple fake encoding
    document.getElementById("homeResult").innerHTML = result;
}

function decodeHome() {
    var text = document.getElementById("homeResult").innerHTML;
    var result = text.replace("++", ""); // super simple fake decoding
    document.getElementById("homeResult").innerHTML = result;
}

function submitAppointment() {
    var name = document.getElementById("fullName").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;
    var doctor = document.getElementById("doctor").value;

    if (name == "" || phone == "" || email == "" || dob == "" || doctor == "") {
        alert("Please fill out all fields.");
    } else {
        alert("Appointment Submitted for " + name);
    }
}
function submitStory() {
    var s=document.getElementById("input1").value;
    if(s==""){
        alert("Please write your story before submitting.");
        return;
    }
    alert("Thank you for sharing your story");
}

function submitNomination() {
    var nominationText = document.getElementById("nomination").value;
    if (nominationText === "") {
        alert("Please write your nomination before submitting.");
        return;
    }
    alert("Thank you for nominating us!");
}

