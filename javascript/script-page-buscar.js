//DECLARAÇÃO DE CONSTANTES
const abaBuscar = document.querySelectorAll('.t-busca');
const formulario = document.querySelector('#box-formulario');

//ADICIONA EVENTO
for (let indice = 0; indice <= abaBuscar.length; indice ++){
    abaBuscar[indice].addEventListener('click', () => abriFecha(indice));
}

//FUNÇÕES
function abriFecha(indice){
    formulario.classList.toggle('ativo');    
}