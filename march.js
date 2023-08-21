let qimg = document.querySelector('#qimg');
let qrbtn = document.querySelector('#gene');
let input = document.querySelector('#input');
let imgbox = document.querySelector('#img-cont');



function Gene (){

    if (input.value.length < 1) {
        alert('Input is empty, Kindly paste a url or type any text to generate your QR Code')
    }

    else if (input.value.length > 0){
        
        qimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=100x100&color=blue&data="+input.value;
        
        qrbtn.innerText = 'Loading⌛⌛.. Please wait';
        qimg.onload = function () {
            imgbox.style.display = 'block';
            imgbox.style.display.tranition = '10s';
            qrbtn.innerText = 'Generate QR Code';
        };
    }
    
}

