var forms = [];
start();



function start() {
    var btnConsult = document.getElementById("btnConsulta");
    btnConsult.onclick = function(){
        consultarCliente();
    }
    var button = document.getElementById('btnEnviar');
    button.onclick = function() {
        saveForm(); 
        
    }
}

function saveForm(){
    var inputName = document.getElementById('nome')
    var inputSobreNome = document.getElementById("sobrenome")
    var inputNascimento = document.getElementById("nascimento")
    var inputRG = document.getElementById("rg")
    var inputCPF = document.getElementById("cpf")
    var inputRua = document.getElementById("rua")
    var inputNumero = document.getElementById("numero")
    var inputBairro = document.getElementById("bairro")
    var inputEstado = document.getElementById("estado")
    var inputCidade = document.getElementById("cidade")
    var inputCEP = document.getElementById("cep")

    
   
    var formulario = {
        nome: inputName.value,
        sobrenome: inputSobreNome.value,
        nascimento: inputNascimento.value,
        rg: inputRG.value,
        cpf: inputCPF.value,
        rua: inputRua.value,
        numero: inputNumero.value,
        bairro: inputBairro.value,
        estado: inputEstado.value,
        cidade: inputCidade.value,
        cep: inputCEP.value

    };

    forms.push(formulario);
    saveLocalStorage();
    

   

}

function saveLocalStorage(){
    var data = JSON.stringify(forms);
    localStorage.setItem("Formulario", data);
    alert("Salvo com SUCESSO!")
}


function loadDataFromLocalStorage(){
    var formSaved = localStorage.getItem("Formulario");
    if(formSaved){
        forms = JSON.parse(formSaved);

    }
}

function consultarCliente(){
    
    var cpfConsulta = document.getElementById("cpfConsulta")

       
    var formSaved = localStorage.getItem("Formulario");
    if(formSaved){
        forms = JSON.parse(formSaved);

    }

    for(var i=0; i < forms.length; i++){
        var form = forms[i];
      

       if(cpfConsulta.value == form.cpf){
      
       alert("O nome da pessoa é:  "+ form.nome+  " " + form.sobrenome + "\n" + " Sua data de nascimento:  " + form.nascimento + "\n" +  " Seu RG: "+ form.rg + "\n" + " Seu CPF:  "+ form.cpf +  "\n" + " Sua rua: "+ form.rua + "\n" +  " O Numero da casa é: "+ form.numero + "\n" + " O Bairro: " + form.bairro + "\n" + " Estado: " + form.estado + "\n" + " Cidade: " + form.cidade + "\n" + " CEP: "+ form.cep )
       }
        

      
        
        
    }
    
   
}
