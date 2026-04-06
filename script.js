const table = document.getElementById('habit-table');
const open = document.getElementById('open');

const modalContainer = document.getElementById('modal_container');
const input = document.getElementById('habit');
const close = document.getElementById('close');

const deleteAll = document.getElementById('delete-all');

//Muestra el modal
open.addEventListener('click', function() {
    input.value = "";
    modalContainer.classList.add('show');
});


//Agregar un hábito y cierra el modal
close.addEventListener('click', function() {
    let newRow = document.createElement("tr");
  
    let newHabit = input.value;
    
    if (newHabit === "") {
        modalContainer.classList.remove('show');
        return;
    }

    //Verifica que no exista en la tabla
    if (!uniqueHabit(newHabit)) {
        alert('Ya existe.')
        return
    }
  
    let cellName = document.createElement("td");
    cellName.textContent = newHabit;
    newRow.appendChild(cellName);
  
    for(let i = 0; i < 7; i++) {
        let newCell = document.createElement("td");
    
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
    
        newCell.appendChild(checkbox);
        newRow.appendChild(newCell);
    }
  
    table.appendChild(newRow);

    modalContainer.classList.remove('show');
});

function uniqueHabit(newHabit) {
    let rows = table.querySelectorAll('tr')

    for (let row of rows) {
        let firstCell =  row.children[0];

        if (firstCell.textContent.toLocaleLowerCase() === newHabit.toLocaleLowerCase()) {
            return false
        }
    }

    return true
}

deleteAll.addEventListener('click', function() {
    table.innerHTML = '';
})
