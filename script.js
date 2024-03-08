const mainContainer = document.createElement('div');
    const h1 = document.createElement('h1');
        h1.textContent = "Pagination using DOM";
        h1.id = 'title';

const description = document.createElement('p');
    description.textContent = 'Designed a Pagination in DOM manipulation with CSS'
    description.id = 'description'
mainContainer.append(h1,description);


const tableContainer = document.createElement('div');
    tableContainer.setAttribute('class','container');
        const tableBody = document.createElement('table');
            tableBody.id = 'list';

tableContainer.appendChild(tableBody);


const paginationBox = document.createElement('div');
    paginationBox.classList.add('paginationRow');

const frontButton = document.createElement('div');
frontButton.setAttribute('class','pageButton');

    const first = document.createElement('a');
        first.textContent = 'First';
            first.setAttribute('data-set','first');

    const previous = document.createElement('a');
        previous.textContent = 'Previous';
            previous.setAttribute('data-set','previous');

frontButton.append(first,previous);

const paginationNumber = document.createElement('div');
    paginationNumber.id = 'paginationNumber';

const endButton = document.createElement('div');
    endButton.setAttribute('class','pageButton');

    const next = document.createElement('a');
        next.textContent = 'Next';
            next.setAttribute('data-set','next')

    const last = document.createElement('a');
        last.textContent = 'Last';
            last.setAttribute('data-set','last');

endButton.append(next,last);

paginationBox.append(frontButton,paginationNumber,endButton);


document.body.append(mainContainer,tableContainer,paginationBox);

const paginationNumbers = document.getElementById('paginationNumber');
const list = document.getElementById('list');
const paginationRow = document.querySelector('.paginationRow');

const req = new XMLHttpRequest();
req.open(
    'GET',
    'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json'
);
req.send();
req.addEventListener('load',request);

function request () {
    let data = JSON.parse(this.responseText);
        let currentPage = 1;
            let rows = 10;

    function displayHead (data, list, rows, currentPage) {
        list.innerHTML = `
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            </tr>`;

        currentPage--;

        let start = rows * currentPage;
            let end = start + rows;
                let paginatedContent = data.slice(start, end);

        for (let i = 0; i < paginatedContent.length; i++) {
            let content = paginatedContent[i];

            const tr = document.createElement('tr');
            tr.classList.add('content');

            const td1 = document.createElement('td'); 
            const td2 = document.createElement('td'); 
            const td3 = document.createElement('td');
            td1.textContent = content.id;
            td2.textContent = content.name;
            td3.textContent = content.email;
            
            tr.append(td1,td2,td3);
            list.appendChild(tr);
        }
    }

    function settingPagination (data, paginationNumbers, rows) {
        paginationNumbers.innerHTML = '';
            let pageNumber = Math.ceil (data.length / rows);
        
        for (let i = 1; i < pageNumber + 1; i++) {
            let button = paginationButton(i, data);
                        
            paginationNumbers.appendChild(button);
        }
    }

    function paginationButton (page, data) {
        let button = document.createElement('a');
            button.classList.add('page');
                button.innerHTML = page;

        if (currentPage == page) button.classList.add('active');
        button.addEventListener('click', function () {
            currentPage = page;
                displayHead (data, list, rows, currentPage);
                    let allButton = document.querySelectorAll('.page');
                        allButton.forEach((e) => e.classList.remove('active'));
                            button.classList.add('active');
        });
        return button;
    }

    function onClickButton (currentPage) {
        let allButton = document.querySelectorAll('.page');
            allButton.forEach((e) => e.classList.remove('active'));
                allButton[currentPage - 1].classList.add('active');
                    displayHead (data, list, rows, currentPage);
    }

    paginationRow.addEventListener('click', (e) => {
        if (e.target.dataset.set == 'first') {
            if (currentPage != 1) {
                currentPage = 1;
                onClickButton(currentPage);
            }
        } else if (e.target.dataset.set == 'last') {
            if (currentPage != 10) {
                currentPage = 10;
                onClickButton(currentPage)
            }
        } else if (e.target.dataset.set == 'previous') {
            if (currentPage != 1) {
                currentPage--;
                onClickButton(currentPage)
            }
        } else if (e.target.dataset.set == 'next') {
            if (currentPage != 10) {
                currentPage++;
                onClickButton(currentPage)
            }
        } 
    });

    displayHead(data, list, rows, currentPage);
    settingPagination(data, paginationNumbers, rows);
}
