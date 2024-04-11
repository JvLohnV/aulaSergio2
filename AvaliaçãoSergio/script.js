function sorveteria(){
    let sorvete = []
    let i = 0, opcao = "", visualizar = "", adicionaSorve = "", removeSorve = "", local
    while(opcao != 4){
        opcao = prompt("======== OPÇÔES =======\n1 - Adicionar sabor\n2 - Remover sabor\n3 - Visualizar sorvete\n4 - Finalizar pedido")
        switch (opcao) {
            case '1':
                adicionaSorve = prompt("Escolha os sabores(No maximo 3 sabores) ")
                if(sorvete.length < 3){
                 sorvete.push(adicionaSorve)
                 visualizar += "Camada " + i + " - Sabor " + sorvete[i] + "\n"
                 i++
                 alert("Sabor Adicionado!")
                }else{
                    alert("Limite de sabores atingido, remova um sabor!")
            }
                
                break
            case '2':
                removeSorve = prompt("Remova um sabor")
                if(sorvete.includes(removeSorve)){
                    local = sabores.indexOf(removeSorve)
                    sorvete.splice(local,1)
                }else{
                    alert("Não existem sabores adicionados!")
                }
                
                break
            case '3':
                if(sorvete.length != 0){
                    visualizar = ""
                    for(let e = 0; e <= (sorvete.length - 1); e++){
                        visualizar += "Camada " + (e + 1) + " - Sabor " + sorvete[e] + "\n"
                    }
                    alert(visualizar)
                }else{
                    alert("Seu sorvete não possui sabores!") }
                break
            case '4':
                if(sorvete.length == 0){
                    alert("Escolha pelomenos um sabor!")
                    opcao = '1'
                }else{
                   alert("Finalizar programa") 
                }
                
                //mostrar = document.getElementById("mostrar")
                break
                
        }
    }
}
function tres(){
    //let quanti = Number(document.getElementById("quant").value)
    let nums = []
    for(let i = 0; i < 3; i++){
        nums.push(prompt("Digite o " + (i+1) + "° numero:"))
    }
    alert(nums.reverse())
}
function soma(){
    let quanti = Number(document.getElementById("quant").value)
    let nums = []
    let soma = 0
    for(let i = 0; i < quanti; i++){
        nums.push(Number(prompt("Digite o " + (i+1) + "° numero:")))
        soma += nums[i]
    }
    alert(soma)
}
function notas() {
    let aluno = []
    let nota = []
    let soma = 0, media = 0, e = 0, mostrar = ""
    for (let i = 0; i < 5; i++) {
        aluno.push(prompt("Digite o nome do aluno"))
        nota.push(Number(prompt("Digite a nota do aluno")))
        mostrar += aluno[i] + " - Nota: " + nota[i] + "\n"
        if(nota[i] > 5){
          soma += nota[i]
          e++
        }
        
    }
    media = soma / e
    alert(mostrar + "\nMédia das notas acima de 5: " + media)
}
function maior(){
    let quanti = Number(document.getElementById("quant5").value)
    let nums = []
    let maior = 0
    for(let i = 0; i < quanti; i++){ 
        nums.push(Number(prompt("Digite o " + (i+1) + "° numero:")))
        if(nums[i] > maior)
        maior = nums[i]
    }
    alert(nums + "\nO maior numero dento do Away é " + maior)
}
function impar() {
    let quanti = Number(document.getElementById("quant6").value)
    let impare = []
    let num = []
    for (let i = 0; i < quanti; i++) {
        num.push(prompt("Digite o "+ (i+1) +"° numero"))
        if(num[i] % 2 != 0){
          impare.push(num[i])
        }
        
    }
    alert("Entre os numeros: " + num + "\nOs numeros: " + impare + " são impares")
}