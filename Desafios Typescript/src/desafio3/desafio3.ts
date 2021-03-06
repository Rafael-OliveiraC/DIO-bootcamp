let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

campoSaldo.innerHTML = '0';

(document.getElementById("erro") as HTMLElement).style.color = "red";

function somarAoSaldo(soma:number) {
    if(campoSaldo.innerHTML.length==0){
        campoSaldo.innerHTML = soma+'';
        return;
    }
    campoSaldo.innerHTML = (parseFloat(campoSaldo.innerHTML)+soma)+'';
}

function limparSaldo() {
    campoSaldo.innerHTML = '0';
}

botaoAtualizar.addEventListener('click', function () {
    if(soma.value.length==0){
        setErro("Digite pelo menos 1 número!");
        return;
    }
    if(/[^0-9]/g.test(soma.value)){
        setErro("Digite apenas números!");
        return;
    }
    somarAoSaldo(parseFloat(soma.value));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});


let timeOutErro:number|null = null;

function setErro(erro:string){
    const span = document.getElementById("erro") as HTMLElement;
    if(timeOutErro){
        clearTimeout(timeOutErro);
    }
    span.innerHTML = erro+"<br><br>";
    timeOutErro = setTimeout(()=>{
        span.innerHTML = '<br><br>';
        timeOutErro = null;
    },5000)
}