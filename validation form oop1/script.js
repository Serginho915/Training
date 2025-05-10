document.addEventListener('DOMContentLoaded', (e) => {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const errorDiv = document.getElementById('error');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        errorDiv.style.display = 'none';

        const name = nameInput.value.trim();
        const age = ageInput.value.trim();

        if (!name || !age) {
            nameInput.parentNode.insertBefore(errorDiv, nameInput.nextSibling);
            errorDiv.style.display = 'block'; 
            return;
        }

        let objFields = {};
        const formData = new FormData(form);
        
        formData.forEach((value, key) => {
            console.log(`${key}: ${value}`);
            objFields[key] = value; 
        });
 
        console.log('Resulting objFields:', objFields);
    });
});
