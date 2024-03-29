fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(products => {
        // console.log(products)

        let tableData = '';
        products.map((value) => {
            tableData +=`<tr>
                            <td><strong>${value.title}</strong></td>
                            <td>${value.category[0].toUpperCase()+value.category.slice(1, )}</td>
                            <td>${value.description}</td>
                            <td>${value.price}$</td>
                            <td><img src="${value.image}"/></td>
                            <td>${value.rating.rate}<br>(${value.rating.count})</td>
                        </tr>`
        });
        let tablebody = document.querySelector('.tablebody')
        tablebody.innerHTML = tableData;

    })
    .catch(error => {
        alert('Error fetching weather data: ' + error.message);
    });
    