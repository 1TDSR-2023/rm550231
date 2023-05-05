let botao = document.getElementById("meu-btn");
console.log(botao.textContent);

botao.addEventListener("click",function(){
    //console.log(this.textContent)
    //função matematica Math
    //random: retorna numero aleatorio entre 0 e 1 Ex: 0.79756442457;
    //floor: Ela arredonda um número para baixo    
    //ceil: Ela arredinda um numero para cima
    //round: arredonda aleatoriamente
    let r=0,g=0,b=0;
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);
    
    this.setAttribute("style",`background-color:rgb(${r},${g},${b});`);
 });

 //Estudar: querySelector , querySelectorAll , Array , Estruturas de repetição.