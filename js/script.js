// FUNCION PARA VERIFICAR EDAD
function verificarEdad() {
    const edad = document.getElementById("edad").value;
    const resultadoEdad = document.getElementById("resultadoEdad");

    if (edad >= 18) {
        resultadoEdad.textContent = "¡Eres mayor de edad!";
        resultadoEdad.style.color = "green";
    } else if (edad > 0) {
        resultadoEdad.textContent = "Eres menor de edad.";
        resultadoEdad.style.color = "red";
    } else {
        resultadoEdad.textContent = "Por favor ingresa una edad válida.";
        resultadoEdad.style.color = "orange";
    }
}

// FUNCION PARA GENERAR LISTA DE NUMEROS
function generarLista() {
    const numero = document.getElementById("numero").value;
    const listaNumeros = document.getElementById("listaNumeros");
    listaNumeros.innerHTML = ''; 
    if (numero > 0) {
        for (let i = 1; i <= numero; i++) {
            const li = document.createElement("li");
            li.textContent = `Número: ${i}`;
            listaNumeros.appendChild(li);
        }
    } else {
        const li = document.createElement("li");
        li.textContent = "Por favor ingresa un número mayor que 0.";
        listaNumeros.appendChild(li);
    }
}