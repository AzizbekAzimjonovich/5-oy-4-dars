document.addEventListener('DOMContentLoaded', function () {
    const saveButton = document.querySelector('.btn-outline-success');
    const input = document.querySelector('.form-control');
    const list = document.querySelector('.list-none');

    saveButton.addEventListener('click', function () {
        const value = input.value.trim();

        if (value !== '') {
            const li = document.createElement('li');
            li.className = 'p-2 border-top';
            li.innerHTML = `
                <p class="w-75">${value}</p>
                <button type="button" class="btn btn-outline-danger">delete</button>
            `;
            list.appendChild(li);
            input.value = '';
            const deleteButton = li.querySelector('.btn-outline-danger');
            deleteButton.addEventListener('click', function () {
                list.removeChild(li);
            });
        }
    });
    const deleteButtons = document.querySelectorAll('.btn-outline-danger');
    deleteButtons.forEach(function (deleteButton) {
        deleteButton.addEventListener('click', function () {
            const li = deleteButton.parentElement;
            list.removeChild(li);
        });
    });
});
