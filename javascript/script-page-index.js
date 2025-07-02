//DECLARAÇÃO DE VARIÁVEIS E CONSTANTES
const conteudoExtra = document.querySelectorAll('.conteudo-extra');
const itemMenu = document.querySelectorAll('.item-menu');

//ADICIONANDO EVENTOS
itemMenu.forEach((item,i) =>{
    item.addEventListener('click', () => {
        conteudoExtra[2].style.height = '100%'
    })
})



/*
elementos.forEach((elemento, indice) => {
  elemento.addEventListener('click', () => {
    alert(`Você clicou no elemento nº ${indice + 1}: ${elemento.tagName}`);
  });
});*/