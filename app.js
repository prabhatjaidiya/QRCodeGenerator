const qrText = document.getElementById("QRText");
const sizes = document.getElementById("size");
const Generat = document.getElementById("Generat");
const downloadBtn = document.getElementById("downloadBtn");
const QRcode = document.querySelector('.QRCode');

let size = sizes.value;
Generat.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmptyInput();
});

sizes.addEventListener('change',(e)=>{
    size = e.target.value;
})

downloadBtn.addEventListener('click',()=>{
    let img = document.querySelector('.QRCode img');
    
    if(img !== null){
        let imgAtrr = img.getAttribute('src');
        downloadBtn.setAttribute("href",imgAtrr);
    }
    else{
        downloadBtn.setAttribute("href",`${document.querySelector('canvas').toDataURL()}`);
    }
})

function isEmptyInput(){
    qrText.value.length > 0 ? generateQRCode() : alert("Enter the text or URL to get QR Code");
}
function generateQRCode(){
    QRcode.innerHTML = "";
    new QRCode(QRcode,
        {
            text:qrText.value,
            height:size,
            width:size,
            colorLight:"#ffffff",
            colorDark:"#000000"
        }
    );
}