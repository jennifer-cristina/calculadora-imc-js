'use strict'

// função que utilizamos nos dados da range, podendo utilizar em outros programas, pois esta em uma classe a parte.

const iniciarRange = (idRange) => {
    const atualizarValor = () => 
    document.getElementById(`valor-${idRange}`).textContent = document.getElementById(idRange).value;
    document.getElementById(idRange).addEventListener('input', atualizarValor);
} 

export {
    iniciarRange
}
