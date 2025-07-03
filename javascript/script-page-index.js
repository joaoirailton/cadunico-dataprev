//DECLARAÇÃO DE VARIÁVEIS E CONSTANTES
const conteudoExtra = document.querySelectorAll('.conteudo-extra');
const itemMenu = document.querySelectorAll('.item-menu');
const data = new Date();
const dataFormatada = data.toLocaleDateString();
const horario = data.toLocaleTimeString();

document.getElementById('text-rodape').textContent = `Versão 2.3.2+84 - ${dataFormatada} ${horario}`

//ADICIONANDO EVENTOS
itemMenu.forEach((link, indice)=>{
  link.addEventListener('click', ()=>{
    conteudoExtra[indice].classList.toggle('ativo')
  })
})