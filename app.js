/***********************************************************
Obejetivo: Projeto para realizar o calculo de media escolares
Autor: Jefferson 
Data: 29/01/2026
Versão: 1.0
************************************************************/

/*
    Tipos de variáveis 

    var => Permite criar um espaço na memoria do tipo variável
           Essa forma de criação hoje é considerado mais antiga,
           é provavel que seja encontrada apenas em projetos
           mais antigos.
           Dica: CAso voe precise utilizar o var, recomenda-se 
           que seja utilizado apenas em escopo global  

    let => Permite criar um espaço em memoria do tipo variável 
        Essa forma de criação é realizada somente no escopo local ,
        ou seja dentro de bloco de programação {}.
        Esse tipo de variável deixa de existir ao término do bloco 

    const => Permite criar um espaço em memória do tipo constante, 
             ou seja esse conteudo não podera sofrer mudanças  durante 
             o projeto 
             Dica: Se possivel voce pode criar esse const escrita em MAIUSCULO para 
             facilitar a sua utilização. Pode ser criada de forma local ou forma global
*/
/*
Operadores de comparação 

        == => Permite a comparação de dois conteudos
        != => Permite comparar a diferença de dois conteudo
        < => permite validar valor menor 
        > => Permite validar valor maior 
        <= -> Permite validar valor menor ou igual
        >= -> Permite validar valor maior ou igual 
        === => permite comparar a igualdade dos conteudos e a
        igualdade da tipagem de dados 
        !== Permite comparar a diferenças do conteudo e a
        igualdade de tipagem de daods
        ==! Permite comparar a igualdade de conteudo e a 
        diferença de tipagem de dados 

        Tipos de operador logicos 
            E =>  AND => &&
            E => OU => ||
            E => NOT = !
        */
       /*Forma de converção  de tipo de dado 
       ParseInt() -> Permite converter um conteudo em numero do tipo INTEIRO    
       PareFloat() -> Permite converter um conteudo em numero do tipo DECIMAL
       Number() -> Permite converter um conteudo em NUMERO, pode ser inteiro
       ou decimal
       String() -> Permite converter o conteudo para STRING
       Boolean() => permite converter o conteudo em BOOLEANO    

       typeof() -> Retorna o tipo de dado de uma variável 
       (String, number, Boolean, Object)
       */
       



//Import da biblioteca de entrada de dados 
const readline = require("readline")
//Criação do objeto para captar as entradas de dados 
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
//Entrada de dados do nome
entradaDeDados.question("Digite o nome do aluno: ", function (nome) {
    //Recebe o nome do aluno
    let nomeAluno = nome

    entradaDeDados.question("Digite a nota1: ", function (valor1) {
        let nota1 = valor1

        entradaDeDados.question("Digite a nota2: ", function (valor2) {
            let nota2 = valor2

            entradaDeDados.question("Digite a nota3: ", function (valor3) {
                let nota3 = valor3

                entradaDeDados.question("Digite a nota4: ", function (valor4) {
                    let nota4 = valor4
                    //validação de entrada
                    if (nomeAluno == "" || nota1 == "" || nota2 == "" || nota3 == "" || nota4 == "") {
                        console.log("ERROR")
                    } else if (nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0) {
                        console.log("ERROR: Somente são possivel valores entre 0 até 100")
                    } else if (nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100) {
                        console.log("ERROR: Somente são possivel valores entre 0 até 100")
                    } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
                        console.log("ERROR: Somente numeros sao permitidos na entrada das notas")
                    }else {
                        let statusAluno
                        let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4))/4
               

                        if(media >=70 ){
                            statusAluno = "Aprovado"
                        }else if(media >= 50 && media < 70){
                            statusAluno = "Recuperação"
                        }else if(media < 50){
                            statusAluno = "Reprovado"
                        }
                        console.log(`Aluno: ${nomeAluno}\n Media final: ${media.toFixed(2)}\n Status do aluno ${statusAluno}`)
                   
                    }
                    

                    
                })
            })
        })
    })
})