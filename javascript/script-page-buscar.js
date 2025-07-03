//DECLARAÇÃO DE CONSTANTES
const abaBuscar = document.querySelectorAll('.t-forms');
const boxContent = document.querySelectorAll('.box-content-form');
const campoBusca = document.getElementById('numero');
let inforBusca = campoBusca.value
const btns = document.querySelectorAll('.btn-destaque');

//ADICIONA EVENTO
abaBuscar.forEach((aba, i)=>{
    aba.addEventListener('click', () => {
        boxContent[i].classList.toggle('ativo');
    })
})

//CONDIÇÕES OBRIGATÓRIAS
if (inforBusca.value === ''){
btns.forEach((btn, i)=>{
    btn.disabled = true
})
}else{
    
}
