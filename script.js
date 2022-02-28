let nome;
let escolhidaBlusa;
let escolhidaGola;
let escolhidoTecido;
let input
let enviarCamisa;
let number;
let string;

 function QualSeuNome() {
    
do{
    nome = prompt("Qual seu nome?")
}
    while(nome === ""){
        nome;
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
        escolhidaBlusa = document.querySelector(".Camisa-Selecionada p").innerHTML;

    }
    checkButton()
console.log(escolhidaBlusa)
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
    
    console.log(escolhidaGola)
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
    
    console.log(escolhidoTecido)
    checkButton()
}

//função de validar o input 
function LinkObrigatorio() {
    input = document.querySelector(".link").value
    //checkButton()// n funciona
}

function checkButton(){
LinkObrigatorio()
let fecharPedido = document.querySelector("button")
if(escolhidoTecido && input && escolhidaGola && escolhidaBlusa) {
  fecharPedido.classList.add("azul-ao-clicar")
}

}
// essa aqui, ela retorna a resposta errada 


function pegarBlusas(){
  let pegarBlusa = axios.get("https://mock-api.driven.com.br/api/v4/shirts-api/shirts")
    pegarBlusa.then(renderizarBlusasNaTela)
}
function renderizarBlusasNaTela(resposta){
    let imagens =  document.querySelector(".imagens")
    resposta.data.map((modelo)=>{
        imagens.innerHTML +=`
        <div class="blusaComCriador" >
        <img onclick = "confirmCamisa()" class = "limitar-imagem-usuario" src=${modelo.image} alt="Blusa1">
            <h4 class="Criador"><strong>Criador:</strong> ${modelo.owner}</h4>
        </div> 
        `
    })
}
function enviarCamisaFeitaProServidor(checkButton){
    console.log(input)
    let enviarCamisa = {
        "model": escolhidaBlusa,
        "neck": escolhidaGola,
        "material": escolhidoTecido,
        "image": input,
        "owner": nome,
        "author": nome    
    }
let pedidoFeito = axios.post("https://mock-api.driven.com.br/api/v4/shirts-api/shirts",enviarCamisa)
console.log(enviarCamisa)
renderizarBlusasNaTela()
pedidoFeito.then(pegarBlusas)
pedidoFeito.catch(naoEnviouOPedido)
} 
function naoEnviouOPedido(erro){
console.log('entrei no catch')
console.log(erro.pedidoFeito.status)
  
}

function confirmCamisa(){
    let chamarBlusa =  confirm("Deseja continuar?") 
    if(chamarBlusa){
        pegarBlusas() 
        alert(`Dados da camisa Selecionada : ${[
            {
                "id": number,
                "model": string,
                "neck": string,
                "material": string,
                "image": string,
                "owner": string,
                "author": string
            }
        ]}`)
    }
    console.log(pegarBlusas)
 
}
pegarBlusas()
QualSeuNome()




