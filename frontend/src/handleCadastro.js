function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const livro = Object.fromEntries(data.entries());

    axios.post('http://127.0.0.1:7000/livros',livro)
        .then(res => alert(res.data.message)) //alerta mensagem
        .catch(err => alert(err))   //alerta de erro
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);