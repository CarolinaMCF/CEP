function tocar (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const lista = document.querySelectorAll ('.tecla');

for (let Contador = 0; Contador < lista.length; Contador++){
    const tecla = lista[Contador];
    const classe = tecla.classList[1];
    //console.log(classe);

    const idSom = `#som_${classe}`;
    //console.log(idSom);

    lista[Contador].onclick = function() {
    tocar(idSom);
}

    //console.log(Contador);

    tecla.onkeydown = function(evento) {
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        //console.log(evento.code === 'Space' || evento.code === 'Enter'); 
        }   
    } 

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}

const previousOperationText = document.querySelector('#previous-operation');
const currentOperationText = document.querySelector('#current-operation');
const buttons = document.querySelectorAll('#buttons-container button');

class Calculator{
  constructor(previousOperationText, currentOperationText){
    this.previousOperationText = previousOperationText;
    this.currentOperationText = currentOperationText;
    this.currentOperation = "";
  }

  // Add digit to calculator screen
  addDigit(digit){
    // Check if current operation already has a dot
    if(digit === "." && this.currentOperationText.innerText.includes(".")){
      return;
    }
    this.currentOperation = digit;
    this.updateScreen();
  }

  // Process all calculator operations
  processOperation(operation){
    // Get current and previous value
    let operationValue;
    const previous = +this.previousOperationText.innerText;
    const current = +this.currentOperationText.innerText; 

    switch(operation){
      case "+":
          operationValue = previous + current;
          this.updateScreen(operationValue, operation, current, previous);
        break;
      default:
        return;

    }
  }
  
  // Change values of the calculator screen
  updateScreen(
    operationValue = null, 
    operation = null, 
    current = null, 
    previous = null
  ){
    console.log(operationValue, operation, current, previous);

    this.currentOperationText.innerText += this.currentOperation;
  }
}

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach((btn) => {
  btn.addEventListener("click",(e) => {
    const value = e.target.innerText;

    if(+value >= 0 || value === "."){
        calc.addDigit(value);
    }else{
       calc.processOperation(value);
    }
  });
});