let nome;
let escolhidaBlusa;
let escolhidaGola;
let escolhidoTecido;
let input
let enviarCamisa;
let modelo;

 function QualSeuNome() {
    
do{
    nome = prompt("Qual seu nome?")
}
    while(nome === ""){
        nome;
    }


} 
//função de verificar camisa
function escolherCamisa(camisa) {
    const camisaEscolhida = document.querySelector(".Camisa-Selecionada");
    
    if (camisaEscolhida !== null) {
        camisaEscolhida.classList.remove("Camisa-Selecionada");
    } else {
      
        camisa.classList.add("Camisa-Selecionada");
        escolhidaBlusa = document.querySelector(".Camisa-Selecionada p").innerHTML;

    }
    checkButton()

}
//função de verificar gola
function escolherGola(gola){
    const golaEscolhida = document.querySelector(".gola-selecionada")
    if(golaEscolhida !== null){
        golaEscolhida.classList.remove("gola-selecionada")
    }else{
        gola.classList.add("gola-selecionada")
        escolhidaGola = document.querySelector(".gola-selecionada p").innerHTML
    }
    checkButton()
    
  
}
//função de verificar tecido
function escolherTecido(tecido){
    const TecidoEscolhido = document.querySelector(".tecido-selecionado")
    if(TecidoEscolhido !== null){
        TecidoEscolhido.classList.remove("tecido-selecionado")
    }else{
        tecido.classList.add("tecido-selecionado")
        escolhidoTecido = document.querySelector(".tecido-selecionado p").innerHTML
    }
    
  
    checkButton()
}

//função de validar o input 
function LinkObrigatorio() {
    input = document.querySelector(".link").value
   
}

function checkButton(){
LinkObrigatorio()
let fecharPedido = document.querySelector("button")
if(escolhidoTecido && input && escolhidaGola && escolhidaBlusa) {
  fecharPedido.classList.add("azul-ao-clicar")
}

}



function pegarBlusas(){
  let pegarBlusa = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts")
    pegarBlusa.then(renderizarBlusasNaTela)
}
function renderizarBlusasNaTela(resposta){
    
    let imagens =  document.querySelector(".imagens")
   //    imagens.innerHTML = ``;
     let response = resposta.data
       response.map((modelo)=>{
        imagens.innerHTML +=`
        <div class="blusaComCriador" onclick = "confirmCamisa(this)" >
        <img  class = "foto-escolhida limitar-imagem-usuario" src=${modelo.image} alt="Blusa">
            <h4 class="Criador"><strong>Criador:</strong> <span>${modelo.owner}</span></h4>
              <p class = "hide modelo-servidor" >${modelo.model}</p>
              <p class = "hide gola-servidor" >${modelo.neck}</p>
              <p class = "hide tecido-servidor" >${modelo.material}</p>
        </div> 
       
        `
    })

    
   
    console.log(renderizarBlusasNaTela())
}
function enviarCamisaFeitaProServidor(checkButton){

    let enviarCamisa = {
        "model": escolhidaBlusa,
        "neck": escolhidaGola,
        "material": escolhidoTecido,
        "image": input,
        "owner": nome,
        "author": nome    
    }
let pedidoFeito = axios.post("https://mock-api.driven.com.br/api/v4/shirts-api/shirts",enviarCamisa)
pedidoFeito.then(confirmarEncomenda)
pedidoFeito.catch(naoEnviouOPedido)

} 
function naoEnviouOPedido(erro){
alert('Ops, não conseguimos processar sua encomenda')
console.log(erro)
}

function confirmarEncomenda(resposta){
    console.log(resposta.data)
    alert("SUCESSO, Encomenda concluida!!")
    pegarBlusas()
}

/* quando a pessoa clica em uma camisa dos ultimos pedidos , ela renderiza a ultima feita
n importa qual a pessoa vai clicar
*/

/* n renderiza a camisa na tela sem que haja um widow reload */

function confirmCamisa(){
    let chamarBlusa =  confirm("Deseja continuar?") 
    if(chamarBlusa){
       axios.post("https://mock-api.driven.com.br/api/v4/shirts-api/shirts" , {
                
            "model": document.querySelector(".modelo-servidor").innerHTML,
            "neck": document.querySelector(".gola-servidor").innerHTML,
            "material": document.querySelector(".tecido-servidor").innerHTML,
            "image": document.querySelector(".foto-escolhida").src,
            "owner": nome,
            "author": document.querySelector("h4 span").innerHTML
    })
   
    }
    pegarBlusas()   
  
}
pegarBlusas()
QualSeuNome()
checkButton()




