//Declaração das variáveis e atribuição os elementos html a partir de suas classes
const addcarrinho_button = document.querySelector(".add_to_cart");
const lista = document.querySelector(".lista_carrinho");
const vazio = document.querySelector(".carrinho_vazio");

let filhos_listachild = [];

let num_elemento;

console.log(lista.children)
//Variável responsável por fazer a numerção dos ids os elementos da lista do carrinho

let lista_navegante = JSON.parse(localStorage.getItem("lista_navegante"));

//localStorage.clear();

if(lista_navegante){
    alert("Oia");
    lista_navegante.forEach(element => {
        alert("1");
        const dados_lista_parent = document.createElement("section");
        let dados_lista = document.createElement(element.tag);
        dados_lista.id = element.id;
        dados_lista.innerHTML = element.innerHTML;
        dados_lista.style.cssText = element.style;
        dados_lista_parent.appendChild(dados_lista);
        lista.appendChild(dados_lista_parent);
    });
}

if(lista.children.length > 1){
    vazio.style.display = "none";
}
else{
    vazio.style.display = "block";
    localStorage.setItem("num_elemento_navegante", 1);
}

//Evento para sempre ficar verificando se o botão do carrinho é clicado se clicado ele executa a função abaixo
addcarrinho_button.addEventListener("click", function() {
    vazio.style.display = "none";

    num_elemento = parseInt(localStorage.getItem("num_elemento_navegante"));

    //Variáveis para coletar os textos contidos nos elementos html
    let produto_class = document.querySelector(".product_title");
    let produto_name = produto_class.textContent;

    let price_class = document.querySelector(".product_price");
    let price_content = price_class.textContent;

    //Variável para coletar o caminho da imagem
    let img_src = document.querySelector(".main_image_img");
    let img_src_content = img_src.src;

    const lista_child = document.createElement("section");
    lista_child.style.width = "auto";
    lista_child.style.height = "auto";

    //Variável que armazena a criação de um elemento dentro do html
    const lista_element = document.createElement("section");
    lista_element.style.display = "flex";
    lista_element.style.alignItems = "center";
    //Variável que atribui o id ao elemento criado e muda a cada vez que o botão é clicado
    lista_element.id = "carrinho_product_"+num_elemento;

    const img_product = document.createElement("img");
    img_product.src = img_src_content;
    img_product.style.width = "30%";

    const textarea_product = document.createElement("article");
    textarea_product.style.width = "60%";

    const title_product = document.createElement("p");
    title_product.innerHTML = produto_name;
    title_product.style.fontWeight = "bold";
    textarea_product.appendChild(title_product);

    const price_product = document.createElement("p");
    price_product.innerHTML = price_content;
    textarea_product.appendChild(price_product);

    //Variável responsável por armazenar a criação do botão de cancelar o item do carrinho
    const cancel_button = document.createElement("button");
    cancel_button.innerHTML = "X";
    cancel_button.className = "close_button";
    cancel_button.id = "close_button_"+num_elemento;
    cancel_button.style.cursor = "pointer";
    cancel_button.style.paddingTop = "0.1vw";
    cancel_button.style.paddingInlineStart = "0.05vw";
    cancel_button.style.display = "grid";
    cancel_button.style.placeItems = "center";
    cancel_button.style.width = "8%";
    cancel_button.style.height = "1.6vw";
    cancel_button.style.marginLeft = "2%";
    cancel_button.style.color = "red";
    cancel_button.style.background = "none";
    cancel_button.style.borderRadius = "100%";
    cancel_button.style.border = "0.1vw solid red";

    //Adiciona o img_product, textarea_product e cancel_button dentro da tag do elemento lista_element
    lista_element.appendChild(img_product);
    lista_element.appendChild(textarea_product);
    lista_element.appendChild(cancel_button);

    //Adiciona o elemento lista_element à tag da lista dentro do html
    lista_child.appendChild(lista_element);

    lista.appendChild(lista_child);

    num_elemento += 1;
    localStorage.setItem("num_elemento_navegante", num_elemento);

    let lista_navegante = JSON.parse(localStorage.getItem("lista_navegante"));

    if(lista_navegante){
        filhos_listachild = lista_navegante;
    }

    lista_child.childNodes.forEach(child_element => {
        filhos_listachild.push({ 
            id: child_element.id,
            tag: child_element.tagName, 
            innerHTML: child_element.innerHTML, 
            style: child_element.style.cssText 
        });
    });

    localStorage.setItem("lista_navegante", JSON.stringify(filhos_listachild));
});

//Cria o evento de clique que irá identificar se o usuário clicou no botão
lista.addEventListener("click", (event) => {

    //Remove a lista que o botão pertence e adiciona a mensagem de carrinho vazio se o carrinho não estiver com nenhum item
    if (event.target.classList.contains("close_button")) {

        let pai_botao = event.target.parentElement.id;
        document.getElementById(pai_botao).parentNode.remove();
        console.log(lista.children);
        let lista_navegante = JSON.parse(localStorage.getItem("lista_navegante"));
        lista_navegante = lista_navegante.filter(elemento => elemento.id !== pai_botao);

        filhos_listachild = filhos_listachild.filter(elemento => elemento.id !== pai_botao);

        localStorage.setItem("lista_navegante", JSON.stringify(lista_navegante));

        if(lista.children.length > 1){
            vazio.style.display = "none";
        }
        else{
            vazio.style.display = "block";
            localStorage.setItem("num_elemento_navegante", 1);
        }
    }
});
