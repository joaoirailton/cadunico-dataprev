//DECLARAÇÃO DE VARIÁVEIS E CONSTANTES
const conteudoExtra = document.querySelectorAll('.conteudo-extra');
const itemMenu = document.querySelectorAll('.item-menu');
const data = new Date();
const dataFormatada = data.toLocaleDateString();
const horario = data.toLocaleTimeString();
const contentExtra = document.querySelectorAll('.extra');
const userName = document.getElementById('user');
const menu = document.getElementById('menu');
const body = document.body;
const icon = document.querySelectorAll('.icon-seta');
const btnPerfil = document.getElementById('btn-perfil')
const perfil = document.getElementById('perfil');


let usuario = prompt('Qual seu nome?');
userName.textContent = usuario.toUpperCase(usuario)

document.getElementById('text-rodape').textContent = `Versão 2.3.2+84 - ${dataFormatada} ${horario}`

//ADICIONANDO EVENTOS
itemMenu.forEach((link, indice)=>{
  link.addEventListener('click', ()=>{
    conteudoExtra[indice].classList.toggle('ativo')
    icon[indice].classList.toggle('rotate-icon')
  })
})

contentExtra.forEach((item, i)=>{
  item.addEventListener('click', ()=>{
    contentExtra.forEach((del)=>{
      del.classList.remove('selecionado')
    })
    contentExtra[i].classList.add('selecionado')
  })
})

menu.addEventListener('click', ()=>{
  body.classList.toggle('exibe');
});

btnPerfil.addEventListener('click', ()=>{
  perfil.classList.toggle('mostra-perfil');
})

//FUNÇÕES
