async function handleDeletar() {
    event.preventDefault();
    
    try {
        let campoId = document.getElementById('id')

        if (confirm('Você está prestes a excluir este livro. Confirme se tiver certeza')) {
            const result = await axios.delete(`http://127.0.0.1:7000/livros/${campoId.value}`) 
            alert(result.data.message)

            const inputs = document.querySelectorAll('.w3-input') //css

            inputs.forEach(input => {
                input.disabled = true;
                input.value = '';
        });
        }

        
        
    } catch (error) {
        alert(`Ocorreu a requisição de edição: ${error.message}`)
        
    }
}

const btnDelete = document.getElementById('bntDeletar');
btnDelete.addEventListener('click', handleDeletar);