async function handleEditar() {
    event.preventDefault();
    
    try {
        let campoId = document.getElementById('id')
        let campoTitulo = document.getElementById('titulo')
        let campoAutor = document.getElementById('autor')
        let campoEditora = document.getElementById('editora')
        let campoAno = document.getElementById('ano')

        let livro = {
            titulo: campoTitulo.value,
            autor: campoAutor.value,
            editora: campoEditora.value,
            ano: campoAno.value
        }

        const result = await axios.put(`http://127.0.0.1:7000/livros/${campoId.value}`, livro) 
        alert(result.data.message)

        const inputs = document.querySelectorAll('.w3-input')

        inputs.forEach(input => {
            input.disabled = true;
            input.value = '';
        });
        
    } catch (error) {
        alert(`Ocorreu a requisição de edição: ${error.message}`)
        
    }
}

const btnEditar = document.getElementById('bntEditar');
btnEditar.addEventListener('click', handleEditar);