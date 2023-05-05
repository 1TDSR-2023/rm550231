let botao = document.getElementById("meu-btn");
console.log(botao.textContent);

botao.addEventListener("click",function(){

    let r=0,g=0,b=0;
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);
    
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

const newItem =
document.createElement('li')
FileList.appendChild(newItem)










