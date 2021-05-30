async function handleBuscar(event) {
    event.preventDefault();
    campoPesquisa = document.getElementById('pesquisa');
    
    if (!campoPesquisa.value) return alert('Campo de busca vazio')

    try {
        const result = await axios.get(`http://127.0.0.1:7000/livros/${campoPesquisa.value}`) 

        if (result.data) {
            let campoId = document.getElementById('id')
            let campoTitulo = document.getElementById('titulo')
            let campoAutor = document.getElementById('autor')
            let campoEditora = document.getElementById('editora')
            let campoAno = document.getElementById('ano')

            const inputs = document.querySelectorAll('.w3-input')

            inputs.forEach(input => {
                input.disabled = false;
            });

            const bntEditar =  document.getElementById('bntEditar')
            bntEditar.disabled = false;

            const bntDeletar =  document.getElementById('bntDeletar')
            bntDeletar.disabled = false;

            let dados = [campoId, campoTitulo, campoAutor, campoEditora, campoAno];

            for (let i = 0; i < dados.length; i++) {
                dados[i].value = Object.values(result.data)[i]
            }
        } else {
            alert('Não foi encontrado livro para o id fornecido')
        }

    } catch (error) {
        alert(`Ocorreu um erro durante a busca: ${error.message}`)
        
    }
}

const btn = document.getElementById('bnt');
btn.addEventListener('click', handleBuscar);