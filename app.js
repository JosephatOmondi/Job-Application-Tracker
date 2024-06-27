// app.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('application-form');
    const tableBody = document.querySelector('tbody');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const company = document.getElementById('company').value;
        const title = document.getElementById('title').value;
        const date = document.getElementById('date').value;
        const status = document.getElementById('status').value;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${company}</td>
            <td>${title}</td>
            <td>${date}</td>
            <td>${status}</td>
            <td><button class="delete-btn">Delete</button></td>
        `;

        tableBody.appendChild(row);
        form.reset();
    });

    tableBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            e.target.closest('tr').remove();
        }
    });
});
