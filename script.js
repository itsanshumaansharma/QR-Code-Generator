const qrinput = document.getElementById('qr-input');
const qrimg = document.getElementById('qr-img');
const qrbutton = document.getElementById('qr-button');
const qrdownload = document.getElementById('qr-download');

// const ele = document.createElement("a");
qrbutton.addEventListener("click",async ()=>{
    const inputValue = qrinput.value.trim();
    console.log(inputValue);
    if(inputValue === ""){
        alert("Please Enter URL");
        return;
    }
    const qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    qrimg.src = qrURL;
    qrdownload.download="qr-code.png";
    const response = await fetch(qrURL);
    const blob = await response.blob();
    const objectURL = URL.createObjectURL(blob);
    console.log(response,'\n',blob,'\n',objectURL);
    
    qrdownload.href = objectURL;
    
    qrdownload.classList.remove("hide");
    qrdownload.style.display = "block";
    
});