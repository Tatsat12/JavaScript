const form = document.getElementById('myForm');
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch('http://localhost:3000/db',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if(response.ok){
        console.log('Form submitted successfully!');
    }
    else{
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
                <td>${item.status}</td>
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

async function deleteItem(id){
    const response = await fetch(`http://localhost:3000/db/${id}`, {
        method: 'DELETE'
    });

    if(response.ok){
        console.log(`Item with id ${id} deleted successfully!`);
        const rowToDelete = document.querySelector(`tr:nth-of-type(${id})`);
        rowToDelete.remove();
    }
    else{
        console.error(`Error deleting item with id ${id}`);
    }
}

function editItem(id){
    const tableBody = document.getElementById('data-table').querySelector('tbody');
    const row = tableBody.querySelector(`tr:nth-of-type(${id})`);
}
