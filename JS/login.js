

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


//list of users
let listaDeUsuarios = [   
    {
    nomeCompleto : "Lucas das Couves",
    emailUsuario : "lucas@gmail.com",
    senhaUsuario : "123456"
    },
    {
    nomeCompleto : "Juan Pelego",
    emailUsuario : "Juan@gmail.com",
    senhaUsuario : "123456"
    },
    {
    nomeCompleto : "Matheuzin Delgado",
    emailUsuario : "Matheuzin@gmail.com",
    senhaUsuario : "123456"
    },
    {
    nomeCompleto : "Derick Maluco",
    emailUsuario : "Derick@gmail.com",
    senhaUsuario : "123456"
    }
]

const botaoSubmit = document.querySelector("#btnSubmit");

botaoSubmit.addEventListener("click", ()=>{

    //creating an validation object
    let userValidado = {
        emailUsuarioValidado : inputEmail.value,
        senhaUsuarioValidado : inputSenha.value
    }

    //criando uma interação com a lista de objetos para realizar a validação
    //com o usuarioValidado

    try{


    listaDeUsuarios.forEach((usuario)=>{
        //realizando a validação
        //comparando cada objeto da lista com o objeto monstado com os dados que vieram do form
        if(userValidado.emailUsuarioValidado == usuario.emailUsuario && userValidado.senhaUsuarioValidado == usuario.senhaUsuario){
            userValidado = usuario;
            throw "VALIDADO";
        }
    });

    throw "SENHA OU NOME DE USUÁRIO INVÁLIDOS";


    }catch(msg){

    const msgStatus = document.querySelector("#msgStatus");


    if(msg == "VALIDADO"){
        msgStatus.setAttribute("style","color:#00ff00");
        msgStatus.innerHTML = `<span><strong>Usuario: ${userValidado.nomeCompleto} Login efetuado com sucesso!</strong></span>`

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