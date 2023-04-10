const form = document.getElementById('myForm');
const filter = document.getElementById('filter-select');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch('http://localhost:3000/db', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        console.log('Form submitted successfully!');
    }
    else {
        console.error('Error submitting form!');
    }
});

fetch('http://localhost:3000/db')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('data-table').querySelector('tbody');

        data.db.forEach(item => {
            const row = document.createElement(`tr`);
            row.innerHTML = `
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.description}</td>
                <td status="${item.status}">${item.status}</td>
                <td>${item.rate}</td>
                <td>${item.balance}</td>
                <td>${item.Deposit}</td>
                <td>
                    <button id="delete-btn" onclick="deleteItem(${item.id})">Delete</button>
                    <button id="editRow" class="edit-btn" onclick="editItem(${item.id})">Edit</button>
                </td>   
             `;
            tableBody.appendChild(row);
        });
    });

filter.addEventListener('change', function () {
    filterTable(filter.value);
});

async function deleteItem(id) {
    const response = await fetch(`http://localhost:3000/db/${id}`, {
        method: 'DELETE'
    });

    if (response.ok) {
        console.log(`Item with id ${id} deleted successfully!`);
        const rowToDelete = document.querySelector(`tr:nth-of-type(${id})`);
        rowToDelete.remove();
    }
    else {
        console.error(`Error deleting item with id ${id}`);
    }
}

function editItem() {
    const editButtons = document.querySelectorAll('.edit-btn');
    
    editButtons.forEach(editButton => {
        editButton.addEventListener('click', () => {

            const row = editButton.closest('tr');

            const name = row.cells[1].textContent;
            const description = row.cells[2].textContent;
            const status = row.cells[3].textContent;
            const rate = row.cells[4].textContent;
            const balance = row.cells[5].textContent;
            const Deposit = row.cells[6].textContent;

            document.getElementById('name').value = name;
            document.getElementById('description').value = description;
            document.getElementById('status').value = status;
            document.getElementById('rate').value = rate;
            document.getElementById('balance').value = balance;
            document.getElementById('Deposit').value = Deposit;

            document.getElementById("saveBtn").disabled = true;
            document.getElementById("updateBtn").disabled = false;

            var id = Number(row.cells[0].textContent);

            document.getElementById("myForm").addEventListener("submit", function (event) {
                event.preventDefault();

                var data = {
                    "name": document.getElementById("name").value,
                    "description": document.getElementById("description").value,
                    "status": document.getElementById("status").value,
                    "rate": document.getElementById("rate").value,
                    "balance": document.getElementById("balance").value,
                    "Deposit": document.getElementById("Deposit").value
                };

                fetch("http://localhost:3000/db/" + id, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        console.log(data);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            });
        });
    });
}

function filterTable(status) {
    var table = document.getElementById("data-table");
    var rows = table.getElementsByTagName("tr");

    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var statusCell = row.querySelector("td[status]");
        if (statusCell) {
            var rowStatus = statusCell.getAttribute("status");
            if (rowStatus === status) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }
        }
    }
    
}
