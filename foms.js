function SaveFormDetails() {
    validateControls();
}
var gender;
var FoodofChoice = [];
function validateControls() {
    //FirstName
    var fname = document.getElementById("fname")
    if (fname.value == "") {
        window.alert("please enter your first name");
        fname.focus();
        return false;
    }
    //LastName
    var lname = document.getElementById("lname")
    if (lname.value == "") {
        window.alert("please enter your last name");
        lname.focus();
        return false;
    }
    
    //Gender   
    gender = document.querySelector('input[name="gender"]:checked');
    if (gender === null) {
        window.alert("Gender required!");
        gender.focus();
        return false;
    }
    //Address
    var address = document.getElementById("address")
    if (address.value == "") {
        window.alert("please enter your address details");
        address.focus();
        return false;
    }

    // Pin
    var pin = document.getElementById("pin")
    if (pin.value == "") {
        window.alert("please enter your 6 digits Area PIN");
        pin.focus();
        return false;
    }
    // State
    var state = document.getElementById("state")
    if (state.value == "") {
        window.alert("please enter your state name");
        state.focus();
        return false;
    }
    //Country
    var Country = document.getElementById("Country")
    if (state.value == "") {
        window.alert("please enter your Country name");
        Country.focus();
        return false;
    }
    //Food of Choice
    var FoodofChoice = document.getElementById("FoodofChoice")
    if (FoodofChoice.selectedIndex < 1) {
        window.alert("please choose your Choice");
        Choice.focus();
        return false;
    }

    getControlValues();

}
function getControlValues() {
    alert("First Name= " + fname.value + "\n" + "Last Name= " + lname.value + "\n"  +"\n" + "Gender= " + gender.value + "\n" + "DateOfBirth= " + dob.value + "\n" + "Address= " + address.value + "\n" + "City= " + city.value + "\n" + "Pin= " + pin.value + "\n" + "State= " + state.value + "\n" + "Choice= " + Choice.value + "\n" + "FoodfoChoice= " + FoodofChoice + "\n")
}