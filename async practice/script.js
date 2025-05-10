document.addEventListener('DOMContentLoaded', function () {
    const counterElement = document.getElementById('counter');
    const startButton = document.getElementById('startButton');
    let counter = 0;
    let date = Date.now();

    startButton.addEventListener('click', function () {
        setInterval(function () {
            counter++;
            counterElement.textContent = counter;
        }, 1000);
    });
});

