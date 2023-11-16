function darkMode () {
    const pagina = document.body

    pagina.classList.toggle("dark-mode")

    const isDarkMode = document.body.classList.contains("dark-mode")

    //let textoBotao = isDarkMode ? "Light mode" : " Dark mode";
    //document.querySelector("button").textContent = textoBotao;

    const botao = document.querySelector("button")

    if(isDarkMode){
        botao.textContent = "Light mode"
    }else{
        botao.textContent = "Dark mode"
    }
}