window.onload = function() {
    let button = document.getElementById('clickme');
    let counter = 0;
    button.addEventListener('click', function() {
        counter++;
        button.innerHTML = `clicked ${counter} times`;
    });
};