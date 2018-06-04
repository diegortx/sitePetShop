var editRowIndex = -1;

start();

function start() {
    var button = document.getElementById('btnAdd');
    button.onclick = function() {
        addContact();
    };
}

function addContact() {
    var inputName = document.getElementById('name');
    var inputTelefone = document.getElementById('telefone');
    var inputData = document.getElementById('data');

    if (isValidField(inputName) && 
        isValidField(inputTelefone) &&
        isValidField(inputData)) {

        if (editRowIndex == -1) {
            createContact(inputName, inputTelefone, inputData);
        } else {telefone
            updateContact(inputName, inputTelefone, inputData);
        }
        
        clearFields(inputName, inputTelefone, inputData);
        editRowIndex = -1;
    } else {
        alert('Preencha todos os campos!');
    }
}

function isValidField(field) {
    return field.value.trim() != '';
}

function createContact(inputName, inputTelefone, inputData) {
    var tr = createLine();
    var tdName = createTableData(inputName.value);
    var tdTelefone = createTableData(inputTelefone.value);
    var tdData = createTableData(inputData.value);
    var tdEdit = createTableData('');
    var tdExcluir = createTableData('');
    
    var btnExcluir = createButtonElement('Excluir');
    btnExcluir.onclick = deleteContact;
    var btnEditar = createButtonElement('Editar');
    btnEditar.onclick = editContact;

    tdEdit.appendChild(btnEditar);
    tdExcluir.appendChild(btnExcluir);

    tr.appendChild(tdName);
    tr.appendChild(tdTelefone);
    tr.appendChild(tdData);
    tr.appendChild(tdEdit);
    tr.appendChild(tdExcluir);

    var table = document.getElementById('tableItems');
    var tbody = table.tBodies[0];
    tbody.appendChild(tr);
}

function createButtonElement(value) {
    var button = document.createElement('input');
    button.value = value;
    button.type = 'button';
    return button; 
}

function createLine() {
    var tr = document.createElement('tr');
    return tr;
}

function createTableData(content) {
    var td = document.createElement('td');
    td.innerHTML = content;
    return td;
}

function clearFields(inputName, inputTelefone, inputData) {
    inputName.value = '';
    inputTelefone.value = '';
    inputData.value = '';
    inputName.focus();
}

function deleteContact() {
    if (editRowIndex != -1) {
        alert('Você está no modo edição!');
    } else {
        var td = this.parentNode;
        var tr = td.parentNode;
        var table = document.getElementById('tableItems');
        var tbody = table.tBodies[0];
        tbody.removeChild(tr);
    }
}

function editContact() {
    var td = this.parentNode;
    var tr = td.parentNode;
    editRowIndex = tr.rowIndex;

    var tableDatas = tr.childNodes;
    var inputName = document.getElementById('name');
    var inputTelefone = document.getElementById('telefone');
    var inputData = document.getElementById('data');

    inputName.value = tableDatas[0].innerHTML;
    inputTelefone.value = tableDatas[1].innerHTML;
    inputData.value = tableDatas[2].innerHTML;
}

function updateContact(inputName, inputTelefone, inputData) {
    var myTable = document.getElementById('tableItems');
    var tbody = myTable.tBodies[0];
    var tr = tbody.children[editRowIndex];

    tr.childNodes[0].innerHTML = inputName.value;
    tr.childNodes[1].innerHTML = inputTelefone.value;
    tr.childNodes[2].innerHTML = inputData.value;
}