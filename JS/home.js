if(localStorage.getItem("user-token")){


const elementoBemVindo = document.querySelector("#welcome");
 
//recuperando o objeto do local storage

const usuarioValidado = JSON.parse(localStorage.getItem("user-validado"));

elementoBemVindo.innerHTML = usuarioValidado.nomeCompleto;

}else{
    alert("Só poderá acessar este conteudo se estiver logado!")
    window.location.href = "../login.html";

}

const botaoSair = document.querySelector("#btnSair")
botaoSair.addEventListener("click", ()=>{

    localStorage.removeItem("user-token");
    localStorage.removeItem("user-validado");
    window.location.href = "../login.html"
    

});