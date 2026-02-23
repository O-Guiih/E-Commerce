let quantidade = 1;
const spanQuantidade = document.getElementById("quantidade");
const radioEstoque = document.querySelectorAll('input[name="estoque"]');
const btnDecrementar = document.querySelector('.quantity button:first-child');
const btnIncrementar = document.querySelector('.quantity button:last-child');

function alterarQuantidade(valor) {
  // Verifica se o produto está marcado como sem estoque
  const semEstoque = document.querySelector('input[name="estoque"]:checked').value === 'nao';
  
  if (!semEstoque) {
    quantidade = Math.max(1, quantidade + valor);
    spanQuantidade.textContent = quantidade;
  }
}

// Adiciona listeners para os radios de estoque
radioEstoque.forEach(radio => {
  radio.addEventListener('change', function() {
    if (this.value === 'nao') {
      // Se for sem estoque, define quantidade como 1 e desabilita os botões
      quantidade = 1;
      spanQuantidade.textContent = quantidade;
      btnDecrementar.disabled = true;
      btnIncrementar.disabled = true;
    } else {
      // Se tiver estoque, reabilita os botões
      btnDecrementar.disabled = false;
      btnIncrementar.disabled = false;
    }
  });
});
