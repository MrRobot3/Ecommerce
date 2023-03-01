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
    }else if(email.value.length==""){
        showAlert('enter your e-mail');
    }else if(password.value.length < 8){
        showAlert('password should be 8 letters long')
    }else if(number.value.length==""){
        showAlert('enter your phone number')
    }else if(Number(number.value) == ""|| number.value.length <10){
        showAlert('invalid number, please enter valid one')
    }else if(tac.checked = false){
        showAlert('you must agree to our terms and conditions')
    }else{
        //submit form
        loader.style.display = 'block';
        sendData('/signup', {
            name:         name.value,
            email:        email.value,
            password:     password.value,
            number:       number.value,
            tac:          tac.checked,
            notification: notification.checked,
            seller:       seller.false

        })
    }
})

//alert function


const showAlert = (msg)=>{
    let alertBox = document.querySelector('.alert-box')
    let alertMsg = document.querySelector('.alert-msg')

    alertMsg.innerHTML = msg;
    alertBox.classList.add('show')
    setTimeout(()=>{
        alertBox.classList.remove('show')
    }, 500);
}

//send data function

const sendData = (path, data)=>{
    fetch(path, {
        method: 'post',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(data)
    }).then((res)=> res.json())
    .then(Response=>{
        processData(Response)
    })
}

