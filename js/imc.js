// Permite analisar e vigiar o seu código.
'use strict';

//importações
import { iniciarRange } from "./input-range.js";

// Validação
const camposValidos = () => document.getElementById('formulario').reportValidity();

const calcularImc = (altura, peso) => peso / (altura * altura);

function mostrarResultado() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');


const classificarImc = (imc) => {
    let texto;

    if( imc < 18.5) {
        texto = 'e você está abaixo do peso.';
    }else if(imc < 25) {
        texto = 'e você está com peso ideal!';
    }else if(imc < 30) {
        texto = 'e você está levemente acima do peso.';
    }else if(imc < 35) {
        texto = 'e você está com obesidade grau I';
    }else if(imc < 40) {
        texto = 'e você está com obesidade grau II';
    }else {
        texto = 'e você está com obesidade grau III.';
    }

    return texto;

}

// função para aprensentar na div resultado o estado conforme a altura e o peso do usuário
function definirAviso(imc) {
    let aviso;

    if( imc < 18.5) {
        aviso = '<span class="vermelho">Cuidado!</span>'
    }else if(imc < 25) {
        aviso = '<span class="verde">Parabéns!</span>'
    }else if( imc > 40){
        aviso = '<span class="vermelho">Cuidado!</span>'
    }

    return aviso;
}


    if(camposValidos()){

    const imc = calcularImc(altura, peso);

    let texto = classificarImc(imc);
    let aviso = definirAviso(imc);

    resultado.textContent = `${nome} seu IMC é ${imc.toFixed(2)} ${texto}`;

// Condição para que segundo o estado imc do usuário mostre o alerta

    if(aviso) resultado.innerHTML += aviso;

    }else{
        resultado.textContent = 'Preencha todos os campos!';       
    }
}

document.getElementById('calcular').addEventListener('click', mostrarResultado);

iniciarRange('altura');
iniciarRange('peso');
