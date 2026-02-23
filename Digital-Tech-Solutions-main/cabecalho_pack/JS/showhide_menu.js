const lista_menu = document.querySelector(".lista_menu");
const menu_button = document.querySelector(".menu_button");
const lista_carrinho = document.querySelector(".lista_carrinho");
const carrinho_button = document.querySelector(".carrinho_icon");
const cad_button = document.querySelector(".cadastro_button");
const log_button = document.querySelector(".login_button");
let x = 0;
let y = 0;

menu_button.addEventListener("click", function() {
    if(x == 0){
        lista_menu.style.visibility = "visible";
        x = 1;
    }
    else{
        lista_menu.style.visibility = "hidden";
        x = 0
    }
});

carrinho_button.addEventListener("click", function() {
    if(y == 0){
        lista_carrinho.style.visibility = "visible";
        y = 1;
    }
    else{
        lista_carrinho.style.visibility = "hidden";
        y = 0
    }
});

if (window.location.href.indexOf("index") !== -1) {
    cad_button.addEventListener("click", function() {
        window.location.href  = "View/cadastro.html";
    });

    log_button.addEventListener("click", function() {
        window.location.href  = "View/login.html";
    });
}
else {
    cad_button.addEventListener("click", function() {
        window.location.href  = "../View/cadastro.html";
    });

    log_button.addEventListener("click", function() {
        window.location.href  = "../View/login.html";
    });
}
