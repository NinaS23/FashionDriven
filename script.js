let nome;
let escolhidaBlusa;
let escolhidaGola;
let escolhidoTecido;


 function QualSeuNome() {
    do{
        nome = prompt("Qual Seu nome?")
    }
    while(nome !== undefined) {
     console.log(nome)
    }
    //essa ta boa tbm n 

} 
//função de verificar camisa
function escolherCamisa(camisa) {
    const camisaEscolhida = document.querySelector(".Camisa-Selecionada");
    
 
    if (camisaEscolhida !== null) {
        camisaEscolhida.classList.remove("Camisa-Selecionada");
    } else {
      
        camisa.classList.add("Camisa-Selecionada");
        escolhidaBlusa = document.querySelector(".Camisa-Selecionada h3").innerHTML;

    }
  
console.log(escolhidaBlusa)
}
//função de verificar gola
function escolherGola(gola){
    const golaEscolhida = document.querySelector(".gola-selecionada")
    if(golaEscolhida !== null){
        golaEscolhida.classList.remove("gola-selecionada")
    }else{
        gola.classList.add("gola-selecionada")
        escolhidaGola = document.querySelector(".gola-selecionada h3").innerHTML
    }
    
    console.log(escolhidaGola)
}
//função de verificar tecido
function escolherTecido(tecido){
    const TecidoEscolhido = document.querySelector(".tecido-selecionado")
    if(TecidoEscolhido !== null){
        TecidoEscolhido.classList.remove("tecido-selecionado")
    }else{
        tecido.classList.add("tecido-selecionado")
        escolhidoTecido = document.querySelector(".tecido-selecionado h3").innerHTML
    }
    
    console.log(escolhidoTecido)
   
}

//função de validar o input 
function LinkObrigatorio() {
  
    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    var t = 'www.google.com';
    let Input = document.querySelector(".link").value
    if (Input === "") {
        alert("ops...algo deu errado . Verifique se preencheu tudo, por favor!")
    } else if (Input.match(regex)) {
        alert("bom link")
       
      
    } else {
        (Input !== regex)
        alert("link ruim, coloque uma url válida por favor")
    }
    
    checkButton()// n funciona
}

function checkButton(){
let fecharPedido = document.querySelector("button")
if(escolhidoTecido && LinkObrigatorio && escolhidaGola && escolhidaBlusa) {
  fecharPedido.classList.add("azul-ao-clicar")
  alert(`Sucesso , seus pedidos são: ${escolhidaBlusa} , ${escolhidoTecido} e ${escolhidaGola} `)
   
}else{
    alert("Ops, não conseguimos processar sua encomenda")
}

}
// essa aqui, ela retorna a resposta errada
/*
function sucessoOuFracassoNoPedido(){
    if(checkButton){
        alert(`Sucesso , seus pedidos são:${escolhidaBlusa} , ${escolhidoTecido} e ${escolhidaGola} `)
    }else{
        alert("Ops, não conseguimos processar sua encomenda")
    }
}*/

//QualSeuNome()