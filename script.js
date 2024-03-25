let select = document.querySelectorAll('.currency')
let btn = document.querySelector('.btn')
let input = document.querySelector('.input')

//fetching the data...
fetch('https://www.frankfurter.app/currencies')
.then(response => response.json())
.then(response => displayDropDown(response));

//function to push the currency into the dropdown list-
function displayDropDown(response) {
    // console.log(Object.entries(response)[0])
    let curr = Object.entries(response)
    for (let i = 0; i < curr.length; i++) {
        let opt = `<option value = '${curr[i][0]}'>${curr[i][0]}</option>`
        select[0].innerHTML += opt
        select[1].innerHTML += opt
    } 
};

//button activation-
btn.addEventListener('click', () => {
    let curr1 = select[0].value;
    let curr2 = select[1].value;
    let inputVal = input.value
    if(curr1 === curr2)
        alert('Invalid Selection of From / To Currency')
    else 
        convert(curr1,curr2,inputVal)
});

//function to convert the currency
function convert(curr1,curr2,inputVal) {
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
  .then(response => response.json())
  .then((data) => {
    document.querySelector('.result').value = Object.values(data.rates)[0]
  });
}