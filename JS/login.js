

const inputEmail = document.querySelector("#idEmail");




inputEmail.addEventListener("keyup", ()=>{

const lblEmail = document.querySelector("label[for='idEmail']")

    if (inputEmail.value.length < 5){
    inputEmail.setAttribute("style","outline-color: #ff0000;");
    lblEmail.setAttribute("style","color: #ff0000;");
    }else{
    inputEmail.setAttribute("style","outline-color: #00ff00;");
    lblEmail.setAttribute("style","color: #00ff00;");
    }

    //inputEmail.setAttribute("style","outline-color: #ff0000;");
});

const inputSenha = document.querySelector("#idPass");
const eyePass = document.querySelector(".fa");

eyePass.addEventListener("click", ()=>{
    

    if(inputSenha.getAttribute("type") == "password"){
        inputSenha.setAttribute("type","text");
        eyePass.setAttribute("class","fa fa-eye-slash");
        
    }else{
        inputSenha.setAttribute("type","password");
        eyePass.setAttribute("class","fa fa-eye");
    }

});

//creation of objects in js
//const usuario1 = {
   // nomeCompleto : "Lucas das Couves",
   // emailUsuario : "lucas@gmail.com",
   // senhaUsuario : "123456"
//} 


// //list of users
// let listaDeUsuarios = [   
//     {
//     nomeCompleto : "Lucas das Couves",
//     emailUsuario : "lucas@gmail.com",
//     senhaUsuario : "123456"
//     },
//     {
//     nomeCompleto : "Juan Pelego",
//     emailUsuario : "Juan@gmail.com",
//     senhaUsuario : "123456"
//     },
//     {
//     nomeCompleto : "Matheuzin Delgado",
//     emailUsuario : "Matheuzin@gmail.com",
//     senhaUsuario : "123456"
//     },
//     {
//     nomeCompleto : "Derick Maluco",
//     emailUsuario : "Derick@gmail.com",
//     senhaUsuario : "123456"
//     }
// ];

            //localStorage.setItem("lista-user", JSON.stringify(listaDeUsuarios));


const botaoSubmit = document.querySelector("#btnSubmit");

botaoSubmit.addEventListener("click", ()=>{

    //creating an validation object
    let userLogado = {
        emailUsuarioLogado : inputEmail.value,
        senhaUsuarioLogado : inputSenha.value
    }

    let userValidado = {};

    //criando uma interação com a lista de objetos para realizar a validação
    //com o usuarioValidado

    try{
        //recuperando do local storage
        let listaDeUsuarios = JSON.parse(localStorage.getItem("lista-user"));


    listaDeUsuarios.forEach((usuario)=>{
        //realizando a validação
        //comparando cada objeto da lista com o objeto monstado com os dados que vieram do form
        if(userLogado.emailUsuarioLogado == usuario.emailUsuario && userLogado.senhaUsuarioLogado == usuario.senhaUsuario){
            userValidado = usuario;
            throw "Logado";
        }
    });

    throw "SENHA OU NOME DE USUÁRIO INVÁLIDOS";


    }catch(msg){

    const msgStatus = document.querySelector("#msgStatus");


    if(msg == "Logado"){
        msgStatus.setAttribute("style","color:#00ff00");
        msgStatus.innerHTML = `<span><strong>Usuario: ${userLogado.nomeCompleto} Login efetuado com sucesso!</strong></span>`

        //Redirect 
        setTimeout(()=>{
            window.location.href = "../home.html";
        
        }, 3000);
        
    }else{
        msgStatus.setAttribute("style","color:#ff0000");
        msgStatus.innerHTML = "<span><strong>Nome de usuario ou senha invalidos...</strong></span>"
    }
}

});