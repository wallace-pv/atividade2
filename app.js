function mudarTema() {
    document.getElementById("toggleButton").addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    
        if (document.body.classList.contains("dark-mode")) {
            this.innerText = "☀️ Modo Claro";
        } else {
            this.innerText = "🌙 Modo Escuro";
        }
    });    
  }