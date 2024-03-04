function submitForm() {
    // Get form values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var address = document.getElementById('address').value;
    var pincode = document.getElementById('pincode').value;
    
    // Get gender value
    var genderRadioButtons = document.querySelectorAll('input[name="gender"]:checked');
    var gender = genderRadioButtons.length > 0 ? genderRadioButtons[0].value : '';
    
    var foodCheckboxes = document.querySelectorAll('input[name="food"]:checked');
    var foods = Array.from(foodCheckboxes).map(checkbox => checkbox.value);
    var state = document.getElementById('state').value;
    var country = document.getElementById('country').value;

    // Create table row
    var tableBody = document.getElementById('tableBody');
    var newRow = tableBody.insertRow(tableBody.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);

    // Set cell values
    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = address;
    cell4.innerHTML = pincode;
    cell5.innerHTML = gender;
    cell6.innerHTML = foods.join(', ');
    cell7.innerHTML = state;
    cell8.innerHTML = country;

    // Clear form fields
    document.getElementById('myForm').reset();
}