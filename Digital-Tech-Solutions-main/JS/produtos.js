const produtos = [
        {
          id: 1,
          nome: "iPhone 12",
          preco: 5799.9,
          precoOriginal: 8500.0,
          imagem: "https://via.placeholder.com/150x150?text=iPhone+12",
          categoria: "iphone",
          marca: "iphone",
          cor: "black",
        },
        {
          id: 2,
          nome: "Samsung Galaxy S21",
          preco: 4599.9,
          precoOriginal: 5999.9,
          imagem: "https://via.placeholder.com/150x150?text=Galaxy+S21",
          categoria: "samsung",
          marca: "samsung",
          cor: "blue",
        },
        {
          id: 3,
          nome: "Xiaomi Redmi Note 11",
          preco: 1299.9,
          precoOriginal: 1999.9,
          imagem: "https://via.placeholder.com/150x150?text=Redmi+Note+11",
          categoria: "xiaomi",
          marca: "xiaomi",
          cor: "green",
        },
        {
          id: 4,
          nome: "iPhone SE",
          preco: 2799.9,
          imagem: "https://via.placeholder.com/150x150?text=iPhone+SE",
          categoria: "iphone",
          marca: "iphone",
          cor: "red",
        },
        {
          id: 5,
          nome: "Samsung Galaxy A53",
          preco: 2299.9,
          imagem: "https://via.placeholder.com/150x150?text=Galaxy+A53",
          categoria: "samsung",
          marca: "samsung",
          cor: "black",
        },
        {
          id: 6,
          nome: "Xiaomi Poco X4",
          preco: 1899.9,
          precoOriginal: 2499.9,
          imagem: "https://via.placeholder.com/150x150?text=Poco+X4",
          categoria: "xiaomi",
          marca: "xiaomi",
          cor: "blue",
        },
      ];

      // Função para renderizar os produtos
      function renderProdutos(lista) {
        const container = document.getElementById("productList");
        container.innerHTML = "";

        if (lista.length === 0) {
          container.innerHTML =
            '<p class="no-products">Nenhum produto encontrado com os filtros selecionados.</p>';
          return;
        }

        lista.forEach((produto) => {
          const productElement = document.createElement("div");
          productElement.className = "product";
          productElement.innerHTML = `
          ${
            produto.precoOriginal
              ? `<div class="badge">Economize R$${(
                  produto.precoOriginal - produto.preco
                ).toFixed(2)}</div>`
              : ""
          }
          <img src="${produto.imagem}" alt="${produto.nome}">
          <h3>${produto.nome}</h3>
          <p class="price">R$ ${produto.preco.toFixed(2).replace(".", ",")}</p>
          ${
            produto.precoOriginal
              ? `<p class="old-price">De: R$ ${produto.precoOriginal
                  .toFixed(2)
                  .replace(".", ",")}</p>`
              : ""
          }`;
          container.appendChild(productElement);
        });
      }

      // Função para aplicar os filtros
      function applyFilters() {
        const minPrice =
          parseFloat(document.getElementById("minPrice").value) || 0;
        const maxPrice =
          parseFloat(document.getElementById("maxPrice").value) || Infinity;

        const selectedCategory = document.querySelector(
          'input[name="category"]:checked'
        ).value;
        const selectedBrands = Array.from(
          document.querySelectorAll('input[name="brand"]:checked')
        ).map((b) => b.value);

        const selectedColors = Array.from(
          document.querySelectorAll(".color-option.selected")
        ).map((c) => c.dataset.color);

        const filteredProducts = produtos.filter((produto) => {
          // Filtro por categoria
          const categoryMatch =
            selectedCategory === "all" ||
            produto.categoria === selectedCategory;

          // Filtro por marca
          const brandMatch =
            selectedBrands.length === 0 ||
            selectedBrands.includes(produto.marca);

          // Filtro por preço
          const priceMatch =
            produto.preco >= minPrice && produto.preco <= maxPrice;

          // Filtro por cor
          const colorMatch =
            selectedColors.length === 0 || selectedColors.includes(produto.cor);

          return categoryMatch && brandMatch && priceMatch && colorMatch;
        });

        renderProdutos(filteredProducts);
      }

      // Função para resetar os filtros
      function resetFilters() {
        document.querySelector(
          'input[name="category"][value="all"]'
        ).checked = true;
        document.getElementById("minPrice").value = "";
        document.getElementById("maxPrice").value = "";

        document.querySelectorAll('input[name="brand"]').forEach((checkbox) => {
          checkbox.checked = false;
        });

        document.querySelectorAll(".color-option").forEach((color) => {
          color.classList.add("selected");
        });

        applyFilters();
      }

      // Event Listeners
      document.addEventListener("DOMContentLoaded", () => {
        // Renderizar produtos inicialmente
        renderProdutos(produtos);

        // Aplicar filtros ao clicar no botão
        document
          .getElementById("applyFilters")
          .addEventListener("click", applyFilters);

        // Resetar filtros
        document
          .getElementById("resetFilters")
          .addEventListener("click", resetFilters);

        // Seleção de cores
        document.querySelectorAll(".color-option").forEach((color) => {
          color.addEventListener("click", function () {
            this.classList.toggle("selected");
          });
        });
      });
