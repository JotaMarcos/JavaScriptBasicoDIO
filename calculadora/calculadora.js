function calculadora() {

    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (%)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));

    if(!operacao || operacao >= 7) {
        alert('Erro - Operação inválida!');
        calculadora();
    } else {

        let primeiroNumero = Number(prompt('Insira o primeiro número: '));
        let segundoNumero = Number(prompt('Insira o segundo número: '));
        let resultadoDaOperacao;


        if(!primeiroNumero || !segundoNumero) {
            alert('Erro - Parâmetros inválidos!');
            calculadora();
        } else {
            function soma() {
                resultadoDaOperacao = primeiroNumero + segundoNumero;
                alert(`${primeiroNumero} + ${segundoNumero} = ${resultadoDaOperacao}`);
                novaOperacao();
            }
    
            function subtracao() {
                resultadoDaOperacao = primeiroNumero - segundoNumero;
                alert(`${primeiroNumero} - ${segundoNumero} = ${resultadoDaOperacao}`);
            
                novaOperacao();
            }
    
            function multiplicacao() {
                resultadoDaOperacao = primeiroNumero * segundoNumero;
                alert(`${primeiroNumero} * ${segundoNumero} = ${resultadoDaOperacao}`);
                novaOperacao();
            }
    
    
            function divisaoReal() {
                resultadoDaOperacao = primeiroNumero / segundoNumero;
                alert(`${primeiroNumero} / ${segundoNumero} = ${resultadoDaOperacao}`);
                novaOperacao();
            }
    
            function divisaoInteira() {
                resultadoDaOperacao = primeiroNumero % segundoNumero;
                alert(`O  reto da divisão entre ${primeiroNumero} e ${segundoNumero} é igual a ${resultadoDaOperacao}`);
                novaOperacao();
            }
    
            function potenciacao() {
                resultadoDaOperacao = primeiroNumero ** segundoNumero;
                alert(`${primeiroNumero} elevado a ${segundoNumero}ª é igual a ${resultadoDaOperacao}`);
                novaOperacao();
            }
    
            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
                
                if(opcao == 1) {
                    calculadora();
                } else if(opcao == 2) {
                    alert('Até mais!');
                } else {
                    alert('Digite uma opção válida!');
                    novaOperacao();
                }
            }
        }
        

        // if(operacao == 1) {
        //     soma();
        // } else if(operacao == 2){
        //     subtracao();
        // } else if(operacao == 3) {
        //     multiplicacao();
        // } else if(operacao == 4) {
        //     divisaoReal();
        // } else if(operacao == 5) {
        //     divisaoInteira();
        // } else if(operacao == 6) {
        //     potenciacao();
        // } else {
        //     console.log('Operação inválida!');
        // }

        switch(operacao) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3: 
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInteira();
                break;
            case 6:
                potenciacao();
                break;
            default:
                alert('Operação inválida!');
                calculadora();
        }

    }

}


calculadora();