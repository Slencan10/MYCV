let thongtin = document.querySelector('.an');
let input = document.querySelector('.hien');
let viewmoreS = document.querySelectorAll('.viewmore');
let btnBack = document.querySelector('#btn-Back');
    btnBack.classList.add('none')
let divError = document.querySelector('#error-email')
function checkmail(email){
    const checkmail =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return checkmail.test(email);
};
function kiemduyet(event){
    let emailvalue = document.querySelector('#email').value;
    document.querySelector('#error-email').textContent = '';
    event.preventDefault();
    if(emailvalue === ''){
        divError.textContent = 'Hãy nhập email'
        divError.style.color = 'red'
    }  else if(checkmail(emailvalue)){
        thongtin.classList.remove('none')
        input.classList.add('none')
        btnBack.classList.remove('none')
    } else{
        divError.textContent = 'Nhập sai định dạng email'
        divError.style.color = 'red'
    }
}

input.addEventListener('submit', kiemduyet);

function back(){
    document.querySelector('#email').value = "";
    if(btnBack.style.display === "none"){
        thongtin.classList.remove('none')
        input.classList.add('none')
    } else{
        thongtin.classList.add('none')
        input.classList.remove('none')
        btnBack.classList.add('none')
        
    }
};
function viewMore(e){
    let divHidden = e.parentElement.querySelector('.container-job-descriptions');
    let change = e.parentElement.querySelector('.doichu')
if(window.getComputedStyle(divHidden).display === "none"){
    divHidden.style.display = 'block';
    change.textContent = 'View Less';
}else{
    divHidden.style.display = 'none';
    change.textContent = 'View More';
}
};

