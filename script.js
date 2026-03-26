//Obtener elementos del HTML
var boton = document.getElementById("agregar-habito");
var tabla = document.getElementById("tabla-habitos");

//Escuchar el click
boton.addEventListener("click", function() {

    //Pedir nombre del hábito
    var nombreHabito = prompt("Ingrese un nuevo Hábito: ");

    if (nombreHabito === null || nombreHabito.trim() === "") {
        alert("No se ingreso nada. Intente de nuevo.");
        return;
    }

    //Crear fila
    var fila = document.createElement("tr");

    //Crear celda del nombre
    var celdaNombre = document.createElement("td");
    celdaNombre.textContent = nombreHabito;
    fila.appendChild(celdaNombre);

    //Crear 7 cheackbox
    for(var i = 0; i < 7; i++) {
        var celda = document.createElement("td");

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        celda.appendChild(checkbox);
        fila.appendChild(celda);
    }
    
    //Agregar fila a la tabla
    tabla.appendChild(fila);
});