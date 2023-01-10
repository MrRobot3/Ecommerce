 document.addEventListener('DOMContentLoaded', ()=>{
    sliderImages();
 })
 
function sliderImages() {

    const productImages = document.querySelectorAll(".product-images img");  // seleciona as imagens das thumbs
    const productImageSlide = document.querySelector(".image-slider"); //seleciona a imagem maior, elemento da thumb

    let activeImageSlide = 0 ;// Imagem padrão para slide


    productImages.forEach((img, index) => {// looping que irá passar por cada imagem
        img.addEventListener('click', () => { // adiciona um evento para o click em cada imagem 


            productImages[activeImageSlide].classList.remove('active') //remove a classe ativa da imagem atual

            img.classList.add('active'); //adiciona 'classe ativa' para a imagem atual que foi clicada

            productImageSlide.style.backgroundImage = `url('${img.src}')` //seleciona a imagem de fundo para a thumb


            activeImageSlide = index //atualiza a variavel da imagem do slider
        })
    })
}


document.addEventListener('DOMContentLoaded', ()=>{
    SelectSizeButton()
})

function SelectSizeButton(){
    
    const sizeBtns = document.querySelectorAll('.size-radio-btn') //pegando em formato de nodelist os botões

    let checkedBtn =0; //botão atualmente selecionado

    sizeBtns.forEach((btn, i)=>{//looping que vai passar pelos botões
        btn.addEventListener('click', ()=>{//adicionando click event para cada btn
            sizeBtns[checkedBtn].classList.remove('check') //removendo btn que está check ativado atualmente
            btn.classList.add('check') //ativando o check para o btn selecionado

            checkedBtn = i //atualizando a variável

        })
    })
}



