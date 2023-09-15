const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example";

const qrBoxCode = document.querySelector("#qrboxcode");
const qrImage = document.querySelector("#qrcodeimage");
const qrText = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", ()=>{
    if(qrText.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    }
})

