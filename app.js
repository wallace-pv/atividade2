document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const body = document.body;

    toggleButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            this.innerText = '☀️ Modo Claro';
        } else {
            this.innerText = '🌙 Modo Escuro';
        }
    });

});