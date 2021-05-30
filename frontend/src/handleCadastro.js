function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const livro = Object.fromEntries(data.entries());

    axios.post('http://127.0.0.1:7000/livros',livro)
        .then(res => alert(res.data.message))
        .catch(err => alert(err))
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);