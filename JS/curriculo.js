let salvarNomeCompletoH1 = document.querySelector('#salvarNomeCompletoH1')
let editarNomeCompletoH1 = document.querySelector('#editarNomeCompletoH1')
let nomeCompletoH1 = document.querySelector('#nomeCompletoH1')


// esconde a DIV
salvarNomeCompletoH1.classList.add('none')

// BTN
let nomeCompletoBTNEdit = document.querySelector('#nomeCompletoBTNEdit')
let nomeCompletoBTNSave = document.querySelector('#nomeCompletoBTNSave')

// eventos
nomeCompletoBTNEdit.addEventListener("click", editarNomeCompleto)
nomeCompletoBTNSave.addEventListener("click", editarNomeCompleto)

// DB - regata o valor armazenado no banco de dados
nomeCompletoH1.textContent = localStorage.getItem("titulo")
// funções
// Edita o CABEÇAHO H1
function editarNomeCompleto (){
    // ativa e desativa a DVI
    editarNomeCompletoH1.classList.toggle('none')
    salvarNomeCompletoH1.classList.toggle('none')

    // DB - armazena valor do input no banco de dados
    let nomeCompletoInput = document.querySelector('#nomeCompletoInput').value
    localStorage.setItem("titulo", nomeCompletoInput)
    nomeCompletoH1.textContent = localStorage.getItem("titulo")
    
}

// Objetivo

// elementos
let salvarObjetivo = document.querySelector('#salvarObjetivo')
let editarObjetivo = document.querySelector('#editarObjetivo')
let descricaoObjetivo = document.querySelector('#descricaoObjetivo')

// esconde a DIV
salvarObjetivo.classList.add('none')

// BTN
let objetivoBTNSave = document.querySelector('#objetivoBTNSave')
let objetivoBTNEdit = document.querySelector('#objetivoBTNEdit')

// eventos
objetivoBTNSave.addEventListener("click", editObjetivo)
objetivoBTNEdit.addEventListener("click", editObjetivo)

// DB - regata o valor armazenado no banco de dados
descricaoObjetivo.textContent = localStorage.getItem("objetivo")
// funções
// Edita o CABEÇAHO H1
function editObjetivo (){
    
    // ativa e desativa a DVI
    editarObjetivo.classList.toggle('none')
    salvarObjetivo.classList.toggle('none')

    // DB - armazena valor do input no banco de dados
    let textAreaObjetivo = document.querySelector('#textAreaInput').value
    localStorage.setItem("objetivo", textAreaObjetivo)
    descricaoObjetivo.textContent = localStorage.getItem("objetivo")   
}

// Qualificacoes

// elementos
let salvarQualificacoes = document.querySelector('#salvarQualificacoes')
let editarQualificacoes = document.querySelector('#editarQualificacoes')
let descricaoQualificacoes = document.querySelector('#descricaoQualificacoes')

// esconde a DIV
salvarQualificacoes.classList.add('none')

// BTN
let qualificacoesBTNSave = document.querySelector('#qualificacoesBTNSave')
let qualificacoesBTNEdit = document.querySelector('#qualificacoesBTNEdit')

// eventos
qualificacoesBTNSave.addEventListener("click", editQualificacoes)
qualificacoesBTNEdit.addEventListener("click", editQualificacoes)

// DB - regata o valor armazenado no banco de dados
descricaoQualificacoes.textContent = localStorage.getItem("qualificacoes")
// funções
// Edita o CABEÇAHO H1
function editQualificacoes(){
    
    // ativa e desativa a DVI
    editarQualificacoes.classList.toggle('none')
    salvarQualificacoes.classList.toggle('none')

    // DB - armazena valor do input no banco de dados
    let textAreaQualificacoes = document.querySelector('#textAreaInput').value
    localStorage.setItem("qualificacoes", textAreaQualificacoes)
    descricaoObjetivo.textContent = localStorage.getItem("qualificacoes")   
}



// Formação

// elementos
let salvarFormacao = document.querySelector('#salvarFormacao')
let editarFormacao = document.querySelector('#editarFormacao')
let descricaoFormacao = document.querySelector('#descricaoFormacao')

// esconde a DIV
salvarFormacao.classList.add('none')

// BTN
let formacaoBTNSave = document.querySelector('#formacaoBTNSave')
let formacaoBTNEdit = document.querySelector('#formacaoBTNEdit')

// eventos
formacaoBTNSave.addEventListener("click", editFormacao)
formacaoBTNEdit.addEventListener("click", editFormacao)

// DB - regata o valor armazenado no banco de dados
descricaoFormacao.textContent = localStorage.getItem("formacao")
// funções
// Edita o CABEÇAHO H1
function editFormacao (){
    
    // ativa e desativa a DVI
    editarFormacao.classList.toggle('none')
    salvarFormacao.classList.toggle('none')

    // DB - armazena valor do input no banco de dados
    let formacaoInput = document.querySelector('#formacaoInput').value
    localStorage.setItem("formacao", formacaoInput)
    descricaoFormacao.textContent = localStorage.getItem("formacao")   
}

