function insereNumeroNoVisor(botao,visor){
    visor.value += botao.value
    
}

const calculoDoResultado = (visor)=>{
    visor.value = eval(visor.value);
}