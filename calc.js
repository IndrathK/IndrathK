function calcularMedia(){
    let nome = document.getElementById("nome").value;
    let nota1B = parseFloat(document.getElementById("nota1").value);
    let nota2B = parseFloat(document.getElementById("nota1").value);
    let nota3B = parseFloat(document.getElementById("nota1").value);
    let nota4B = parseFloat(document.getElementById("nota1").value);
    let conta = (nota1B + nota2B + nota3B + nota4B) / 4 ;
    let mediaFinal = conta.toFixed(1);
    
    if (conta >= 6) {
      document.getElementById("resultado").innerHTML = nome + " sua média é " + mediaFinal + ", você foi aprovado!"
      
    } else {
      document.getElementById("resultado").innerHTML = nome + " sua média é " + mediaFinal + ", você está reprovado!" }
    }