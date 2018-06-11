document.getElementById("minhaDiv").style.display = 'none';

var students = [];

saveButtonEvent();

loadDataFromLocalStorage();

function saveButtonEvent(){

    const saveButton = document.getElementById("btnAdd")
    saveButton.onclick = function (){
       saveStudent();
      

    };
}

function saveStudent(){
   
   
    var inputName = document.getElementById("name");
    var inputTelefone = document.getElementById("telefone");
    var inputData = document.getElementById("data");

    var student = {
        name : inputName.value,
        telefone : inputTelefone.value,
        data : inputData.value
    };

    students.push(student);
    clearTable();
    populateTable();
    saveLocalStorage();
    alert("Agendado com SUCESSO!\n" + "Para visualizar a agenda clique abaixo.")

}


function populateTable(){
    var table = document.getElementById("tableItems");

    for(var i=0; i < students.length; i++){
        var student = students[i];
       
        var tr = document.createElement('tr');
        var tdName = document.createElement("td");
        var tdTelefone = document.createElement('td');
        var tdData = document.createElement("td");


        tdName.innerHTML = student.name;
        tdTelefone.innerHTML = student.telefone;
        tdData.innerHTML = student.data;
        
        tr.appendChild(tdName);
        tr.appendChild(tdTelefone);
        tr.appendChild(tdData);

        table.tBodies[0].appendChild(tr);

    }
}


function clearTable(){
    var table = document.getElementById("tableItems");
    var tBody = table.tBodies[0];

    for(var i = tBody.children.length; i > 0; i--){
        var tr = tBody.children[i -1];
        tBody.removeChild(tr)
    }
}

function saveLocalStorage(){
    var data = JSON.stringify(students);
    localStorage.setItem("estudantes", data);
}

function loadDataFromLocalStorage(){
   var studentsSaved = localStorage.getItem("estudantes");
    if(studentsSaved){
        students = JSON.parse(studentsSaved);
        populateTable();
    }

}


function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    if(display == "block")
        document.getElementById(el).style.display = 'none';
    else
        document.getElementById(el).style.display = 'block';
}