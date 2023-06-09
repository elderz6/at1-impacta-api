getIMC = () =>{
    console.log(123)

    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value/100;
    const imc = peso/(altura*altura);

    const status = imc < 18.5 ? "Magreza" 
    : imc > 18.5 && imc < 24.9 ? "Normal"
    : imc > 24.9 && imc < 30 ? "Sobrepeso"
    : imc > 30 ? "Obesidade" : "";

    alert("Seu imc é " + imc + "\n Resultado: "+ status);

}