document.getElementById('toggleButton').addEventListener('click', function() {
    const list = document.getElementById('myList');
    
    if (list.style.display === 'none' || list.style.display === '') {
        list.style.display = 'block';

        const newItem = document.createElement('li');
        const newLink = document.createElement('a');
        newLink.href = '#';
        newLink.textContent = 'New Link';
        newItem.appendChild(newLink);
        list.appendChild(newItem);
    } else {
        list.style.display = 'none';
    }
});