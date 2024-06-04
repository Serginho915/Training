document.addEventListener('DOMContentLoaded', (e) => {
    const form = document.getElementById('form');

    const createActionTd = () => {
        const actionTd = document.createElement('td');

        const viewButton = document.createElement('button');
        viewButton.innerHTML = 'View';
        viewButton.id = 'viewButton'

        const editButton = document.createElement('button');
        editButton.innerHTML = 'Edit';
        editButton.id = 'editButton'
        
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        deleteButton.id = 'deleteButton'
        

        actionTd.appendChild(viewButton);
        actionTd.appendChild(editButton);
        actionTd.appendChild(deleteButton);

        return actionTd;
    };

    const fillTable = (id, name, age) => {
        const table = document.getElementById('table');


        const tr = document.createElement('tr');

        const IDTd = document.createElement('td');
        IDTd.innerHTML = `${id}`;

        const NameTd = document.createElement('td');
        NameTd.innerHTML = `${name}`;

        const AgeTd = document.createElement('td');
        AgeTd.innerHTML = `${age}`;

        const actionTd = createActionTd();

        
        
    };
    const createUser = () =>{
        if(id && name && age){
            tr.appendChild(IDTd);
            tr.appendChild(NameTd);
            tr.appendChild(AgeTd);
            tr.appendChild(actionTd);
    
            table.appendChild(tr);
            fillSessionStorage();
        }
        else{
            alert('Something went wrong!')
        }
    }

    const createTable = () => {
        const table = document.createElement('table');
        table.setAttribute('id', 'table');
        document.body.appendChild(table); 
    };

    createTable();
    // form.style.display = 'none';



    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const idElement = document.getElementById('id');
        const nameElement = document.getElementById('name');
        const ageElement = document.getElementById('age');


        const id = idElement.value;
        const name = nameElement.value;
        const age = ageElement.value;

        fillTable(id, name, age);
        
        form.reset(); 
    });
});
