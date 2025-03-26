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
// Exibir o botão quando o usuário rolar a página
window.onscroll = function() {
    let btnTopo = document.getElementById("btnTopo");
    if (document.documentElement.scrollTop > 300) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
};

// Função para rolar suavemente para o topo
function voltarAoTopo() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

});