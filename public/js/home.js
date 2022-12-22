// document.addEventListener('DOMContentLoaded', () => {
//     const productContainers = document.querySelector('.product-container');
//     const nxtBtn = document.querySelector('.nxt-btn');
//     const preBtn = document.querySelector('.pre-btn');
//     RolarCards(productContainers, nxtBtn, preBtn);
// })

// function RolarCards(productContainers, nxtBtn, preBtn)
// {
//     let containerDimentions = productContainers.getBoundingClientRect();
//     let containerWidth = containerDimentions.width;

//     nxtBtn.addEventListener('click', () => {
//         productContainers.scrollLeft +=containerWidth;
//         console.log('teste')
//     })
//     preBtn.addEventListener('click', () => {
//         productContainers.scrollLeft -= containerWidth;
//     })
// }

document.addEventListener('DOMContentLoaded', ()=>{
    carouselButtonsFunc();
})

function carouselButtonsFunc(){
    const productContainers = [...document.querySelectorAll('.product-container')]
    const nextButtons = [...document.querySelectorAll('.nxt-btn')]
    const previousButtons = [...document.querySelectorAll('.pre-btn')]
    
    
    productContainers.forEach((item, index)=>{
      let containerDimentions = item.getBoundingClientRect()
      let containerWidth = containerDimentions.width;
    
      nextButtons[index].addEventListener('click', ()=>{
        item.scrollLeft += containerWidth;
      })
      previousButtons[index].addEventListener('click', ()=>{
        item.scrollLeft -= containerWidth;
      })
    })
}






  