async function handleEditar() {
    event.preventDefault();
    
    try {
        let campoId = document.getElementById('id')
        let campoTitulo = document.getElementById('titulo')
        let campoAutor = document.getElementById('autor')
        let campoEditora = document.getElementById('editora')
        let campoAno = document.getElementById('ano')

        let livro = {                                               //criando objeto com os valores do campo
            titulo: campoTitulo.value,
            autor: campoAutor.value,
            editora: campoEditora.value,
            ano: campoAno.value
        }

        const result = await axios.put(`http://127.0.0.1:7000/livros/${campoId.value}`, livro)  //requisição put  com o value do compo ID
        alert(result.data.message)      //mensagem de status

        const inputs = document.querySelectorAll('.w3-input') //css / pegando input

        inputs.forEach(input => { //desabilitando os campos
            input.disabled = true;
            input.value = '';
        });
        
    } catch (error) {
        alert(`Ocorreu a requisição de edição: ${error.message}`)
        
    }
}

const btnEditar = document.getElementById('bntEditar'); // após liberado na busca
btnEditar.addEventListener('click', handleEditar);  // capturando evento