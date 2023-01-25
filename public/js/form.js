const loader       = document.querySelector('#loader')
const name         = document.querySelector('#name')
const email        = document.querySelector('#password')
const number       = document.querySelector('#number')
const tac          = document.querySelector('#terms-and-cond')
const notification = document.querySelector('#notification')
const submitBtn    = document.querySelector('#submit-btn')


submitBtn.addEventListener('click', ()=>{
    if(name.value.length < 3){
        showAlert('name must be 3 letters long');
    }else if(!email){

    }
})




