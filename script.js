function submitForm() {
    // Get form values
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let address = document.getElementById('address').value;
    let pincode = document.getElementById('pincode').value;
    
    // Get gender value
    let genderRadioButtons = document.querySelectorAll('input[name="gender"]:checked');
    let gender = genderRadioButtons.length > 0 ? genderRadioButtons[0].value : '';
    
    let foodCheckboxes = document.querySelectorAll('input[name="food"]:checked');
    let foods = Array.from(foodCheckboxes).map(checkbox => checkbox.value);
    let state = document.getElementById('state').value;
    let country = document.getElementById('country').value;

    // Create table row
    let tableBody = document.getElementById('tableBody');
    let newRow = tableBody.insertRow(tableBody.rows.length);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);
    let cell7 = newRow.insertCell(6);
    let cell8 = newRow.insertCell(7);

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