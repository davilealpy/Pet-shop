// Array para armazenar os itens do carrinho
let carrinho = [];
let total = 0;

// Função para atualizar o total e mostrar o carrinho
function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('lista-carrinho');
    const totalSpan = document.getElementById('total');
    
    listaCarrinho.innerHTML = ''; // Limpa a lista para atualizá-la
    
    carrinho.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - €${item.preco}`;
        listaCarrinho.appendChild(li);
    });

    totalSpan.textContent = total.toFixed(2); // Atualiza o total
}

// Função para adicionar itens ao carrinho
function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += parseFloat(preco);
    atualizarCarrinho();
}

// Adicionar evento aos botões de adicionar ao carrinho
const botoesAdicionar = document.querySelectorAll('button[data-nome]');
botoesAdicionar.forEach(botao => {
    botao.addEventListener('click', function() {
        const nome = this.getAttribute('data-nome');
        const preco = this.getAttribute('data-preco');
        adicionarAoCarrinho(nome, preco);
    });
});

// Finalizar compra (por enquanto apenas limpa o carrinho)
document.getElementById('finalizar-compra').addEventListener('click', () => {
  
    carrinho = [];
    total = 0;
    atualizarCarrinho();
});



/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }

  /*
    Scroll Reveal
  */

    const sr = ScrollReveal ({
        distance: '65px',
        duration: 2600,
        delay: 450,
        reset: true
    });
    
    sr.reveal('.title',{delay:200, origin:'top'})
    sr.reveal('.icon',{delay:450, origin:'top'})